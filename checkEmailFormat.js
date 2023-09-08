/**
 * Verifies if a string is in email format. Returns true if valid.
 * @param {string} val The string to check.
 */
 const checkEmailFormat = (val) => {
    // Regular expression to validate email.
    // Lifted from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#Validation
    // eslint-disable-next-line no-useless-escape
    const re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return re.test(val)
}
 
// ----------------------------------
// TESTS (put in separate .js file)
// ----------------------------------
describe('checkEmailFormat', () => {
    test('allows a valid email', () => {
        const want = true
        const got = checkEmailFormat('testymctesterson@testing.com')
        expect(got).toBe(want)
    })
    test('catches incorrectly formatted emails', () => {
        const want = false
        let got = checkEmailFormat('rekt@no.com.')
        expect(got).toBe(want)
        got = checkEmailFormat('www.userslike.to.enter.in.weird.stuff.com')
        expect(got).toBe(want)
        got = checkEmailFormat('wut@who.@')
        expect(got).toBe(want)
    })
})
