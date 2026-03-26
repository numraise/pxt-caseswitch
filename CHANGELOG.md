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
