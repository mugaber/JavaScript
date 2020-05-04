/**
 * the global object in browsers is  @window
 * on the global lexical env @this equals @window
 * any vars (using var keyword), function etc..
 * will be available on the global @window object
 */

// window.console.log(this)
// console.log(this)

var someName = 'whatever'
function newFunc() {}

// console.log(window.someName, window.newFunc)

/**
 * @Hoisting
 */

// beforeDefinition()
// console.log(varBeforeDefine)

var varBeforeDefine = 'i will be undefined at first'

function beforeDefinition() {
  console.log('i will be executed no problem')
}
