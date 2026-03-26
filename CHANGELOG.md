# Changelog – pxt-caseswitch

## [1.1.0] – 2025-07
### Removed
- `switchText` / `caseText` – ถูกถอดออก (number only)
- `switchBoolean` / `caseBoolean` – ถูกถอดออก (number only)
### Changed
- Internal types เปลี่ยนจาก `any` เป็น `number` strict

## [1.0.0] – 2025-07
### Added
- `switchNumber` / `caseNumber` – match numbers
- `switchText`   / `caseText`   – match strings
- `switchBoolean`/ `caseBoolean`– match true/false
- `defaultCase`  – fallback block (all variants)
- `caseRange`    – number range matching (from X to Y)
- Unit tests in `test.ts`

## [2.0.0] – 2025-07
### Breaking Change
- เปลี่ยน architecture ทั้งหมด: ลบ `handlerStatement` pattern ออก
  เนื่องจากไม่แสดง block ใน Minecraft Education Edition MakeCode
### Added
- `switchOn(value)` – ตั้งค่าที่จะตรวจ (statement block)
- `isCase(match)` – ตรวจค่าตรง (boolean reporter)
- `isCaseRange(from, to)` – ตรวจช่วงตัวเลข (boolean reporter)
- `isDefault()` – fallback (boolean reporter)
### Removed
- `switchNumber`, `caseNumber`, `caseRange`, `defaultCase` (handlerStatement pattern)
