/**
 * Case / Switch blocks for MakeCode Minecraft Education Edition
 * Allows players to write multi-condition logic without deeply nested if/else
 *
 * Usage (Block):
 *   switch number [value]
 *     case [match]         → do ...
 *     case from [X] to [Y] → do ...
 *     default              → do ...
 */

/**
 * CaseSwitch – multi-condition logic blocks (number only)
 */
//% block="Case Switch"
//% weight=95
//% color=#7B5EA7
//% icon="\uf074"
namespace caseSwitch {

    // ─────────────────────────────────────────────────
    // Internal registry for cases built during one run
    // ─────────────────────────────────────────────────
    let _cases: { match: number; handler: () => void }[] = []
    let _defaultHandler: (() => void) | null = null
    let _currentValue: number = 0

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
    export function caseNumber(match: number, handler: () => void): void {
        _cases.push({ match: match, handler: handler })
    }

    // ─────────────────────────────────────────────────
    // DEFAULT case
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
                break
            }
        }
        if (!matched && _defaultHandler !== null) {
            _defaultHandler()
        }
    }
}
