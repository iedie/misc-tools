/**
 * Ensure a string only contains characters that are allowed by API/ActiveDirectory password policy.
 * @param {string} pw The string to validate
 * @returns {boolean} If true then the password is good
 */
const checkPassword = (pw) => {
    // Ensure we're working with a string
    let str = convertToString(pw)
    // Check string for characters that aren't allowed by API/ActiveDirectory password policy
    // eslint-disable-next-line no-useless-escape
    const re = /[^a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ0-9$&+,:;=?@#|'.^*%!_-]/gim
    return !re.test(str)
}
 
 
// --------------------------------
// TESTS (put in separate .js file)
// --------------------------------
describe('checkPassword', () => {
    test('allows a valid password', () => {
        const want = true
        const got = checkPassword('Äýÿ=ÑÓbody^gonna&guess-this')
        expect(got).toBe(want)
    })
    test('rejects an invalid password', () => {
        const want = false
        // eslint-disable-next-line no-useless-escape
        const got = checkPassword(
            'i contain invalid characters $%^&*$^ &*$% ^*$&^()   ()()()(][] [][][ ][///////\\'
        )
        expect(got).toBe(want)
    })
})
