//*** util.Promisify ***//

// Change my function from using callback
// to be a promise where I can use async/await

const util = require('util')
const makeAPromise = util.promisify(myFunction)


