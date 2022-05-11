import { TodoService } from "./services/todo-service";
import { stdout } from 'process';

const todoService = new TodoService();

(async () => {
    await todoService.add({ id: "1", complete: false, task: 'Mow the lawn' })
    await todoService.add({ id: "2", complete: true, task: 'Prepare typescript course' })
    await todoService.add({ id: "3", complete: false, task: 'Fill out timesheet' })

    const todos = (await todoService.getAll())
        .filter(todo => !todo.complete)
        .map(todo => todo.task).forEach(item => {
            stdout.write(item + '\n')
        });
})();
