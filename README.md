# Introduction

This is a multi lesson typescript and Node.js course. By the end of the course you should be able to create a web API using typescript and you should have a basic understanding of the features of typescript. 

TypeScript is a superset of JavaScript, it has all the functionality of modern JS with the addition of types. 

TypeScript has to be compiled to JavaScript before it can be run in the Node.js runtime. Compile time is the only time that the type checks for typescript are being run. Typescript doesn't offer runtime type checking as it compiles to plain old JS.

Node.js is a eventloop based server/command line runtime. It has its own set of APIs that differ from the standard browser APIs.

# Setup dependencies

In this first lesson we will set up our environment for developing with TypeScript and NodeJs. 

[install nodejs](https://nodejs.org/en/)

[install vscode](https://code.visualstudio.com/)

## Task: Create the environment
```mkdir typescript-todos```

```npm init```

```npm install ts-node typescript```

```touch index.ts```

```touch tsconfig.json```

In TypeScript we can create types in the following way:


```typescript
// The primitives
const name:string = "John Doe";
const age:number = 30;
let done:boolean = false;

// interfaces
interface ICar = { 
    brand: string, 
    readonly model: string
    mileage?: number
};

const car:ICar = {
    brand: 'Toyota',
    model: 'Camry',
    mileage: 10E3
}

const cars:ICar[] = [];
const myCars:Array<ICar> = [];

// type hints
type UUID = string;
type age = number;

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

```

## Task: 

1. Edit index.ts and create an array of todos with the following fields:
* id which is an UUID
* completed
* task

2 . Map and filter this array and log out the items that are not complete by calling console.log(item). 

run your code with `ts-node index.ts`

Alternatively we can compile out code with `npx tsc` and then a javascript file is created.

Next we will add a little functionality

## Task:

Add an optional field location

We add a field "status" with an option for not started, in progress and done.

At the end of this lesson you should have the following files:
* index.ts
* package.json
* tsconfig.json
