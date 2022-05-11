# Lesson 2 more types

We should break up our code and create a service layer to manage our todos. We can use modules for this, which are just separate TypeScript files.

At the end of this lesson you know ho modules work and how to write unit tests.

## Create a TODO service 

Starting with ECMAScript 2015, JavaScript has a concept of modules. TypeScript shares this concept.

Modules are executed within their own scope, not in the global scope; this means that variables, functions, classes, etc. declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms. Conversely, to consume a variable, function, class, interface, etc. exported from a different module, it has to be imported using one of the import forms.


```typescript 
// named exports
export interface StringValidator {
  isAcceptable(s: string): boolean;
}
// default export
export default $;


// named import
import { StringValidator } from "./StringValidator";

// default import
import $ from "jquery";
```

## Tasks

* Create a directory called `services`
* Create a file called `todo-service.ts`
* create CRUD functions for our service




## write tests for the service 




At the end of this lesson you should have the following files:
* index.ts
* package.json
* tsconfig.json