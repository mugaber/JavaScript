# Event loop

as we know that js is execution is non blocking so the functions that does not\
run immediatley (will take time to finish execution) will run later.\
the event loop takes care of those functions that runs later and schedule their\
execution, there are multiple ways of handling those functions either using:\
`callback` or `promises` or `async/await` or `generators`.\
the same applies for event handlers also the event loop schedule their execution\
until the event will be fired then the correponding function fires too.

---

## call stack

thse operations and functions that will be executed gets their turn on the call stack\
wich is the place where functions will be realy executed (last in first out).

---

**there are to my knowledge to different schedulres**

1. **message queue**\
   this one handles most of the operations like `setTimeOut` and others that execute later.\
   this queue puts it's operations at the end of the `call stack`
2. **Job queue**\
   this one handles promises and it puts it's operations at the top of the `call stack`
