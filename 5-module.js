const names = require('./1-names')
const sayHi = require('./2-util')

sayHi('susan')
sayHi(names.james)
sayHi(names.peter)

const alt_flavor = require('./3-alternative_flavor')
console.log(alt_flavor)

require('./4-mind_granade')