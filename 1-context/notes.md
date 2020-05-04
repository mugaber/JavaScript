# Execution context and Lexical environment

## Syntax parser

the code gets translated by an engine for the computer to understand and execute

## Lexical environment

the place where the code sets matters, because it determines how the syntax parser\
is going to handle it where it will be in memory and how it is going to interact

## Execution context

wrapper around the code and the environment that determines what to be executed \
next and manages these operatins and more

## Name/Value pairs

this is the core idea about objects

## Global execution context

this is where your code sets and also it provides two other things

1. Global object : this is the main object that represents the environment\
   in the case of browsers it's the `window` object
2. this: which represents the current lexical env.

## Execution context Creation

the creation of the execution context happends in two phases:

1. creation: in this phase all of the code written gets stored in memory\
   excpet for variables only a place-holder `undefined` for memory management
2. execution: the execution statements get carried out and invoked

## Hoisting

this is related to the creation of the execution context creation which means\
that we can invoke functions before we define them because when the engine\
parsed the code it goes through it to the end and the functions gets stored\
in memory in it's interity, so we can execute them before defining them\
however this is not the case for variables as they gets the value of `undefined`

## undefined

special value - special keyword means that the variable have not set to a value

## Execution stack

the order in which the function invocatins take place in the JS engine
it happenes in the order of - last in first out (stack) and it runs
synchronous single threaded whick means only one at a time in one context
