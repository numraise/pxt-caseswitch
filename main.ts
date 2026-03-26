/**
 * Case / Switch blocks for MakeCode Minecraft Education Edition
 * Allows players to write multi-condition logic without deeply nested if/else
 *
 * Usage (Blocks):
 *   [switch on] [value]
 *   [if] [case 1]              [then] → do ...
 *   [if] [case from 70 to 89]  [then] → do ...
 *   [if] [default case]        [then] → do ...
 *
 * Design note:
 *   Block functions return boolean so they plug directly into
 *   standard "if" blocks — no handlerStatement needed.
 *   This is the only pattern that shows blocks reliably in
 *   Minecraft Education Edition MakeCode.
 */

/**
 * Case Switch – เขียนหลายเงื่อนไขได้ง่าย ไม่ต้อง if/else ซ้อนกัน
 */
//% block="Case Switch"
//% weight=95
//% color=#7B5EA7
//% icon="\uf074"
namespace caseSwitch {

    let _value: number = 0
    let _matched: boolean = false

    // ─────────────────────────────────────────────────
    // STEP 1 – ตั้งค่าที่จะตรวจ (วางก่อน case ทุกครั้ง)
    // ─────────────────────────────────────────────────

    /**
     * ตั้งค่าที่จะตรวจสอบ — วางบล็อกนี้ก่อน case ทุกครั้ง
     * @param value ค่าตัวเลขที่ต้องการเปรียบเทียบ
     */
    //% block="switch on %value"
    //% weight=100
    //% blockGap=8
    export function switchOn(value: number): void {
        _value = value
        _matched = false
    }

    // ─────────────────────────────────────────────────
    // STEP 2 – case blocks (boolean → เสียบใน if ได้เลย)
    // ─────────────────────────────────────────────────

    /**
     * ตรวจว่าค่าตรงกับ match หรือไม่
     * ใช้เสียบใน if: [if] [case 1] [then]
     * @param match ค่าที่ต้องการจับคู่
     */
    //% block="case %match"
    //% weight=90
    //% blockGap=4
    export function isCase(match: number): boolean {
        if (!_matched && _value === match) {
            _matched = true
            return true
        }
        return false
    }

    /**
     * ตรวจว่าค่าอยู่ในช่วง from ถึง to หรือไม่
     * ใช้เสียบใน if: [if] [case from 70 to 89] [then]
     * @param from ค่าเริ่มต้นของช่วง
     * @param to   ค่าสิ้นสุดของช่วง
     */
    //% block="case from %from to %to"
    //% weight=85
    //% blockGap=4
    export function isCaseRange(from: number, to: number): boolean {
        if (!_matched && _value >= from && _value <= to) {
            _matched = true
            return true
        }
        return false
    }

    /**
     * ทำงานถ้าไม่มี case ไหนตรงเลย
     * ใช้เสียบใน if: [if] [default case] [then]
     */
    //% block="default case"
    //% weight=80
    //% blockGap=8
    export function isDefault(): boolean {
        return !_matched
    }
}
