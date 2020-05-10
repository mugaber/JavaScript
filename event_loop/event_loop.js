/**
 * @Message_queue vs @Job_queue
 * at the end     vs at the top of the call stack
 */

function bar() {
  // message queue
  setTimeout(() => {
    console.log('hi from timeout')
  }, 0)

  // job queue
  new Promise((resolve, reject) => {
    resolve('hi from the promise')
  }).then(res => console.log(res))
}

bar()
