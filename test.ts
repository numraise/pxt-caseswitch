/**
 * test.ts – unit tests for pxt-caseswitch v2.0.0
 * boolean-reporter pattern (no handlerStatement)
 */

// ── Test 1: exact number match ────────────────────────
let result = 0

caseSwitch.switchOn(2)
if (caseSwitch.isCase(1)) { result = 10 }
if (caseSwitch.isCase(2)) { result = 20 }
if (caseSwitch.isCase(3)) { result = 30 }
if (caseSwitch.isDefault()) { result = -1 }
// Expected: 20
if (result !== 20) {
    basic.showString("FAIL T1=" + result)
} else {
    basic.showString("PASS T1")
}

// ── Test 2: first-match only (no double-fire) ─────────
let hits = 0

caseSwitch.switchOn(5)
if (caseSwitch.isCase(5)) { hits += 1 }
if (caseSwitch.isCase(5)) { hits += 1 }   // same value, must NOT fire again
if (caseSwitch.isDefault()) { hits += 1 }
// Expected: hits === 1
if (hits !== 1) {
    basic.showString("FAIL T2 hits=" + hits)
} else {
    basic.showString("PASS T2")
}

// ── Test 3: default fires when no match ───────────────
let tier = ""

caseSwitch.switchOn(99)
if (caseSwitch.isCase(1)) { tier = "one" }
if (caseSwitch.isCase(2)) { tier = "two" }
if (caseSwitch.isDefault()) { tier = "default" }
// Expected: "default"
if (tier !== "default") {
    basic.showString("FAIL T3=" + tier)
} else {
    basic.showString("PASS T3")
}

// ── Test 4: range match ───────────────────────────────
let grade = ""

caseSwitch.switchOn(75)
if (caseSwitch.isCaseRange(90, 100)) { grade = "A" }
if (caseSwitch.isCaseRange(70, 89))  { grade = "B" }
if (caseSwitch.isCaseRange(50, 69))  { grade = "C" }
if (caseSwitch.isDefault())          { grade = "F" }
// Expected: "B"
if (grade !== "B") {
    basic.showString("FAIL T4=" + grade)
} else {
    basic.showString("PASS T4")
}

// ── Test 5: exact 0 match ─────────────────────────────
let z = -1

caseSwitch.switchOn(0)
if (caseSwitch.isCase(0)) { z = 0 }
if (caseSwitch.isDefault()) { z = 99 }
// Expected: 0
if (z !== 0) {
    basic.showString("FAIL T5 z=" + z)
} else {
    basic.showString("PASS T5")
}

// ── Test 6: switchOn resets state ─────────────────────
caseSwitch.switchOn(1)
if (caseSwitch.isCase(1)) { } // consume match

caseSwitch.switchOn(1)         // reset → _matched must be false again
let reset = false
if (caseSwitch.isCase(1)) { reset = true }
// Expected: true
if (!reset) {
    basic.showString("FAIL T6")
} else {
    basic.showString("PASS T6")
}

basic.showString("DONE")
