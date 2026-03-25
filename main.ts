/**
 * Case / Switch blocks for MakeCode Minecraft Education Edition
 * Allows players to write multi-condition logic without deeply nested if/else
 * 
 * Usage (Block):
 *   switchOn [value]
 *     case [match] → do ...
 *     case [match] → do ...
 *     default      → do ...
 */

/**
 * CaseSwitch – multi-condition logic blocks
 */
//% block="Case Switch"
//% weight=95
//% color=#7B5EA7
//% icon="\uf074"
namespace caseSwitch {

    // ─────────────────────────────────────────────────
    // Internal registry for cases built during one run
    // ─────────────────────────────────────────────────
    let _cases: { match: any; handler: () => void }[] = []
    let _defaultHandler: (() => void) | null = null
    let _currentValue: any = null

    // ─────────────────────────────────────────────────
    // NUMBER variant
    // ─────────────────────────────────────────────────

    /**
     * เริ่มบล็อก Switch สำหรับตัวเลข
     * จับคู่ค่า number กับ Case ที่ตรงกัน
     * @param value ค่าที่ต้องการตรวจสอบ
     * @param body  บล็อก case ที่อยู่ข้างใน
     */
    //% block="switch number $value"
    //% handlerStatement=1
    //% weight=100
    //% blockGap=8
    export function switchNumber(value: number, body: () => void): void {
        _cases = []
        _defaultHandler = null
        _currentValue = value
        body()
        _evaluate()
    }

    /**
     * เพิ่มเงื่อนไข Case สำหรับตัวเลข
     * @param match ค่าที่ต้องตรงกัน
     * @param handler บล็อกที่จะทำงานถ้าตรง
     */
    //% block="case $match"
    //% handlerStatement=1
    //% weight=90
    //% blockGap=4
    //% advanced=false
    export function caseNumber(match: number, handler: () => void): void {
        _cases.push({ match: match, handler: handler })
    }

    // ─────────────────────────────────────────────────
    // STRING variant
    // ─────────────────────────────────────────────────

    /**
     * เริ่มบล็อก Switch สำหรับข้อความ
     * @param value ข้อความที่ต้องการตรวจสอบ
     * @param body  บล็อก case ที่อยู่ข้างใน
     */
    //% block="switch text $value"
    //% handlerStatement=1
    //% weight=99
    //% blockGap=8
    export function switchText(value: string, body: () => void): void {
        _cases = []
        _defaultHandler = null
        _currentValue = value
        body()
        _evaluate()
    }

    /**
     * เพิ่มเงื่อนไข Case สำหรับข้อความ
     * @param match ข้อความที่ต้องตรงกัน
     * @param handler บล็อกที่จะทำงานถ้าตรง
     */
    //% block="case $match"
    //% handlerStatement=1
    //% weight=88
    //% blockGap=4
    export function caseText(match: string, handler: () => void): void {
        _cases.push({ match: match, handler: handler })
    }

    // ─────────────────────────────────────────────────
    // BOOLEAN variant  (เช่น ตรวจสอบ true/false)
    // ─────────────────────────────────────────────────

    /**
     * เริ่มบล็อก Switch สำหรับ true/false
     * @param value ค่า boolean ที่ต้องการตรวจสอบ
     * @param body  บล็อก case ที่อยู่ข้างใน
     */
    //% block="switch boolean $value"
    //% handlerStatement=1
    //% weight=98
    //% blockGap=8
    export function switchBoolean(value: boolean, body: () => void): void {
        _cases = []
        _defaultHandler = null
        _currentValue = value
        body()
        _evaluate()
    }

    /**
     * เพิ่มเงื่อนไข Case สำหรับ true/false
     * @param match ค่าที่ต้องตรงกัน
     * @param handler บล็อกที่จะทำงานถ้าตรง
     */
    //% block="case $match"
    //% handlerStatement=1
    //% weight=86
    //% blockGap=4
    export function caseBoolean(match: boolean, handler: () => void): void {
        _cases.push({ match: match, handler: handler })
    }

    // ─────────────────────────────────────────────────
    // DEFAULT case  (ใช้ได้กับทุก switch variant)
    // ─────────────────────────────────────────────────

    /**
     * บล็อก Default – ทำงานถ้าไม่มี case ไหนตรง
     * @param handler บล็อกที่จะทำงานเมื่อไม่มีเคสตรง
     */
    //% block="default"
    //% handlerStatement=1
    //% weight=80
    //% blockGap=8
    export function defaultCase(handler: () => void): void {
        _defaultHandler = handler
    }

    // ─────────────────────────────────────────────────
    // RANGE case  (number only) – "case from X to Y"
    // ─────────────────────────────────────────────────

    /**
     * Case สำหรับช่วงตัวเลข (from … to …)
     * @param from  ค่าเริ่มต้นของช่วง
     * @param to    ค่าสิ้นสุดของช่วง
     * @param handler บล็อกที่จะทำงานถ้าค่าอยู่ในช่วง
     */
    //% block="case from $from to $to"
    //% handlerStatement=1
    //% weight=85
    //% blockGap=4
    export function caseRange(from: number, to: number, handler: () => void): void {
        if (typeof _currentValue === "number") {
            const v = _currentValue as number
            if (v >= from && v <= to) {
                // register as an always-match sentinel
                _cases.push({ match: _currentValue, handler: handler })
            }
        }
    }

    // ─────────────────────────────────────────────────
    // Internal helper – evaluate after body() runs
    // ─────────────────────────────────────────────────
    function _evaluate(): void {
        let matched = false
        for (const c of _cases) {
            if (c.match === _currentValue) {
                c.handler()
                matched = true
                break          // first-match semantics (no fall-through)
            }
        }
        if (!matched && _defaultHandler !== null) {
            _defaultHandler()
        }
    }
}
