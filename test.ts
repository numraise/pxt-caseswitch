/**
 * test.ts – unit tests for pxt-caseswitch
 * Run these from the MakeCode editor in JavaScript mode,
 * or via `pxt test` on the command line.
 */

// ── Test 1: number match ──────────────────────────────
let score = 0

caseSwitch.switchNumber(2, function () {
    caseSwitch.caseNumber(1, function () { score = 10 })
    caseSwitch.caseNumber(2, function () { score = 20 })
    caseSwitch.caseNumber(3, function () { score = 30 })
    caseSwitch.defaultCase(function () { score = -1 })
})
// Expected: score === 20
if (score !== 20) {
    basic.showString("FAIL T1 score=" + score)
} else {
    basic.showString("PASS T1")
}

// ── Test 2: default fires when no match ──────────────
let result = ""

caseSwitch.switchText("hello", function () {
    caseSwitch.caseText("hi",   function () { result = "hi" })
    caseSwitch.caseText("hey",  function () { result = "hey" })
    caseSwitch.defaultCase(     function () { result = "default" })
})
// Expected: result === "default"
if (result !== "default") {
    basic.showString("FAIL T2 result=" + result)
} else {
    basic.showString("PASS T2")
}

// ── Test 3: boolean match ────────────────────────────
let flag = false

caseSwitch.switchBoolean(true, function () {
    caseSwitch.caseBoolean(false, function () { flag = false })
    caseSwitch.caseBoolean(true,  function () { flag = true })
    caseSwitch.defaultCase(       function () { flag = false })
})
// Expected: flag === true
if (!flag) {
    basic.showString("FAIL T3")
} else {
    basic.showString("PASS T3")
}

// ── Test 4: range case ────────────────────────────────
let tier = ""

caseSwitch.switchNumber(75, function () {
    caseSwitch.caseRange(0,  49, function () { tier = "F" })
    caseSwitch.caseRange(50, 69, function () { tier = "C" })
    caseSwitch.caseRange(70, 89, function () { tier = "B" })
    caseSwitch.caseRange(90, 100,function () { tier = "A" })
    caseSwitch.defaultCase(      function () { tier = "?" })
})
// Expected: tier === "B"
if (tier !== "B") {
    basic.showString("FAIL T4 tier=" + tier)
} else {
    basic.showString("PASS T4")
}

basic.showString("DONE")
