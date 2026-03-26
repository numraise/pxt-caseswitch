/**
 * test.ts – unit tests for pxt-caseswitch (number + range only)
 */

// ── Test 1: number match ──────────────────────────────
let score = 0

caseSwitch.switchNumber(2, function () {
    caseSwitch.caseNumber(1, function () { score = 10 })
    caseSwitch.caseNumber(2, function () { score = 20 })
    caseSwitch.caseNumber(3, function () { score = 30 })
    caseSwitch.defaultCase(function () { score = -1 })
})
if (score !== 20) {
    basic.showString("FAIL T1 score=" + score)
} else {
    basic.showString("PASS T1")
}

// ── Test 2: default fires when no match ──────────────
let result = 0

caseSwitch.switchNumber(99, function () {
    caseSwitch.caseNumber(1, function () { result = 1 })
    caseSwitch.caseNumber(2, function () { result = 2 })
    caseSwitch.defaultCase(function () { result = -1 })
})
if (result !== -1) {
    basic.showString("FAIL T2 result=" + result)
} else {
    basic.showString("PASS T2")
}

// ── Test 3: range case ────────────────────────────────
let tier = ""

caseSwitch.switchNumber(75, function () {
    caseSwitch.caseRange(0,  49, function () { tier = "F" })
    caseSwitch.caseRange(50, 69, function () { tier = "C" })
    caseSwitch.caseRange(70, 89, function () { tier = "B" })
    caseSwitch.caseRange(90, 100,function () { tier = "A" })
    caseSwitch.defaultCase(      function () { tier = "?" })
})
if (tier !== "B") {
    basic.showString("FAIL T3 tier=" + tier)
} else {
    basic.showString("PASS T3")
}

// ── Test 4: exact 0 match ─────────────────────────────
let z = -1

caseSwitch.switchNumber(0, function () {
    caseSwitch.caseNumber(0, function () { z = 0 })
    caseSwitch.defaultCase(function () { z = 99 })
})
if (z !== 0) {
    basic.showString("FAIL T4 z=" + z)
} else {
    basic.showString("PASS T4")
}

basic.showString("DONE")
