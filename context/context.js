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

/**
 * @Execution_context == @Scope
 * the vaialbes will not collide as they are in different scopes
 */

const myVar = 'global scope'

function functionContext() {
  const myVar = 'functionContext functoin scope'
  console.log(myVar)
}

// functionContext()
// console.log(myVar)

/**
 * @Scope_chain
 * the most relative execution context till the global scope
 */

const anotherVar = 'anotherVar in global scope'

function firstFunction() {
  console.log(anotherVar)
}

function seconFunction() {
  const anotherVar = 'anotherVar in seconFunction scope'
  firstFunction()
}

function thirdFunction() {
  const anotherVar = 'anotherVar in thirdFuntion scope'

  function forthFunction() {
    console.log(anotherVar)
  }

  forthFunction()
}

// console.log(anotherVar)
// seconFunction()
// thirdFunction()
