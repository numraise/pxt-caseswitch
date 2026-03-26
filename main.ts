/**
 * Case Switch – เขียนหลายเงื่อนไขได้ง่าย ไม่ต้อง if/else ซ้อนกัน
 */
//% block="Case Switch"
//% color="#7B5EA7"
//% icon="\uf074"
//% weight=95
namespace caseSwitch {

    let _value: number = 0
    let _matched: boolean = false

    /**
     * ตั้งค่าที่จะตรวจสอบ — วางบล็อกนี้ก่อน case ทุกครั้ง
     * @param value ค่าตัวเลขที่ต้องการเปรียบเทียบ
     */
    //% blockId=caseswitch_switch_on
    //% block="switch on $value"
    //% weight=100
    //% blockGap=8
    export function switchOn(value: number): void {
        _value = value
        _matched = false
    }

    /**
     * ตรวจว่าค่าตรงกับ match หรือไม่ — เสียบใน if ได้เลย
     * @param match ค่าที่ต้องการจับคู่
     */
    //% blockId=caseswitch_is_case
    //% block="case $match"
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
     * ตรวจว่าค่าอยู่ในช่วง from ถึง to — เสียบใน if ได้เลย
     * @param from ค่าเริ่มต้นของช่วง
     * @param to   ค่าสิ้นสุดของช่วง
     */
    //% blockId=caseswitch_is_case_range
    //% block="case from $from to $to"
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
     * ทำงานถ้าไม่มี case ไหนตรงเลย — เสียบใน if ได้เลย
     */
    //% blockId=caseswitch_is_default
    //% block="default case"
    //% weight=80
    //% blockGap=8
    export function isDefault(): boolean {
        return !_matched
    }
}
