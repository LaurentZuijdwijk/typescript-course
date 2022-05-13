# Lesson 3 Generic types, extending types, comments

In this lesson we will implement an interface with generic types and add documentation to our classes.

Essentially, generic types allow you to write a general, generic class (or method) that works with different types, allowing for code re-use. In TypeScript a generic type is defined by adding the generic like `<Type>` where we want to use it.

Example:
`Promise<string>` is a promise that returns a string.
`Promise<ITodo>` is a promise that returns a Todo object.

We can create our own generic types and functions in the following way. 

```TypeScript
class DoSomething<T> {
  async getFromRemote():T{
    const data = await fetch()
    return JSON.parse(data) as T;
  }
}
```
Or for a function:
```typescript
function identity<Type>(arg: Type): Type {
  return arg;
}
```

## Task

* Create an interface for a CRUD service to retrieve, add, update and delete items. 
* Our TODO service should implement our generic service. 

# Type modifiers 

Typescript comes with a number of built in [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html). We used the `Partial` type already to update todos.

Some other ones that are useful are:
* Readonly\<Todo>
* Pick\<T> 

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<Todo, "title" | "completed">;
```

## Task
* Make the returned array of Todos immutable