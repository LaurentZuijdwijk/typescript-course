import {TodoService} from './todo-service'
import { ITodo, STATUS } from '../@types/Todo';

describe('TodoService -', () => {

  test('should have zero todos by default', async() => {
    const service = new TodoService();
    expect(await service.getAll()).toEqual([]);
  });

  test('should be able to add a todo', async() => {
    const service = new TodoService();
    const todo:ITodo = {
      id: '1245',
      complete:false, 
      task:"something", 
      status: STATUS.DONE
    }

    await service.add(todo);
    expect(await service.getAll()).toEqual([{
      id: '1245',
      complete:false, 
      task:"something", 
      status: STATUS.DONE
    }]);
  });
  
  test('should be able to remove a todo', async() => {
    const service = new TodoService();
    const todo:ITodo = {
      id: '1245',
      complete:false, 
      task:"something", 
      status: STATUS.DONE
    }

    await service.add(todo);
    await service.delete(todo.id);
    expect((await service.getAll()).length).toEqual(0);
  })

  test('should be able to update a todo', async() => {
    const service = new TodoService();
    const todo:ITodo = {
      id: '12345',
      complete:false, 
      task:"something", 
      status: STATUS.DONE
    }

    await service.add(todo);
    await service.update('12345', { complete: true});

    const items = await service.getAll();

    expect((await service.getAll()).length).toEqual(1);
    expect((await service.getAll())[0].complete).toEqual(true);
  });
});