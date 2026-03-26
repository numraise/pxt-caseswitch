# pxt-caseswitch

> \*\*Case / Switch blocks\*\* for \*\*Minecraft Education Edition MakeCode\*\*  
> แทนที่ if/else ซ้อนกันลึก ๆ ด้วย case ที่อ่านง่ายกว่ามาก

\---

## ✨ Features

|Block|หน้าที่|
|-|-|
|`switch number \[value]`|เริ่ม switch กับค่าตัวเลข|
|`switch text \[value]`|เริ่ม switch กับข้อความ|
|`switch boolean \[value]`|เริ่ม switch กับ true/false|
|`case \[match]`|เพิ่มเงื่อนไข – ทำงานถ้าค่าตรงกัน|
|`case from \[X] to \[Y]`|เพิ่มช่วงตัวเลข (number switch เท่านั้น)|
|`default`|ทำงานถ้าไม่มี case ไหนตรงเลย|

\---

## 🧱 Block Usage (Blocks Editor)

```blocks
// ตัวอย่าง: ตรวจคะแนน → บอก tier
caseSwitch.switchNumber(player.getScore(), function () {
    caseSwitch.caseRange(90, 100, function () {
        player.say("ระดับ A – ยอดเยี่ยม!")
    })
    caseSwitch.caseRange(70, 89, function () {
        player.say("ระดับ B – ดีมาก")
    })
    caseSwitch.caseRange(50, 69, function () {
        player.say("ระดับ C – พอใช้")
    })
    caseSwitch.defaultCase(function () {
        player.say("ระดับ F – ต้องพยายามมากขึ้น")
    })
})
```

```blocks
// ตัวอย่าง: เลือกสัตว์
caseSwitch.switchText(chosen, function () {
    caseSwitch.caseText("cat",  function () { mobs.spawn(OCELOT, pos(0,0,0)) })
    caseSwitch.caseText("dog",  function () { mobs.spawn(WOLF,   pos(0,0,0)) })
    caseSwitch.caseText("bird", function () { mobs.spawn(PARROT, pos(0,0,0)) })
    caseSwitch.defaultCase(function () { player.say("ไม่รู้จักสัตว์นี้") })
})
```

\---

## 📦 Installation

1. เปิด MakeCode Minecraft Education Edition
2. คลิก **Extensions** (ไอคอนเฟือง → Extensions)
3. วาง URL ของ repo นี้:  
`https://github.com/<your-username>/pxt-caseswitch`
4. กด **Enter** แล้วรอโหลด
5. หมวด **Case Switch** จะปรากฏใน Toolbox

\---

## ⚙️ How It Works

* `switchNumber / switchText / switchBoolean` รับค่า + รัน body callback
* ภายใน body ให้วาง `case` หรือ `default` blocks
* เมื่อ body จบ engine จะเปรียบเทียบค่าแล้วเรียก handler ตัวแรกที่ตรง
* ถ้าไม่มีตรงเลย → เรียก `default` (ถ้ามี)
* **ไม่มี fall-through** – จับคู่ตัวแรกที่เจอแล้วหยุด

\---

## 🗂 File Structure

```
pxt-caseswitch/
├── main.ts       ← block definitions (TypeScript)
├── test.ts       ← unit tests
├── pxt.json      ← extension manifest
├── README.md
└── CHANGELOG.md
```

\---

## 📝 CHANGELOG

See [CHANGELOG.md](CHANGELOG.md)

\---

## 📄 License

MIT © 2025



for PXT/minecraft

