enum STATUS {
    NOT_STARTED,
    IN_PROGRESS,
    DONE
}

type UUID = string;

interface ITodo {
    id: UUID,
    complete: boolean,
    task: string
    location?: string,
    status?: STATUS
}

const todoList: ITodo[] = [
    { id: "1", complete: false, task: 'Mow the lawn' },
    { id: "2", complete: true, task: 'Prepare typescript course' },
    { id: "3", complete: false, task: 'Fill out timesheet' }
];

const todos = todoList
    .filter(todo => !todo.complete)
    .map(todo => todo.task);

console.log(todos)
