import { ITodo } from "../@types/Todo";
import { ICrudService } from "./ICrudService";

/**
 * Service to store and add/remove todos
 * 
 */
export class TodoService implements ICrudService<ITodo> {
    private repo: Set<ITodo>
    
    constructor(){
        this.repo = new Set<ITodo>();;
    }

    getAll():Promise<ReadonlyArray<ITodo>>{
        return Promise.resolve(Array.from(this.repo));
    }

    add(item:ITodo):Promise<void>{
        this.repo.add(item);
        return Promise.resolve();
    }

    delete(id:string):Promise<void> {
        const item = Array.from(this.repo).find(item => item.id === id)
        this.repo.delete(item);
        return Promise.resolve();
    }

    update(id:string, newItem:Partial<ITodo>):Promise<ITodo> {
        const found = Array.from(this.repo).find(item => item.id === id)

        const replace = {...found, ...newItem};
        this.delete(id);

        this.repo.add(replace);

        return Promise.resolve(replace);
    }

    findIncomplete(): Promise<ITodo[]> {
        const found = Array.from(this.repo).filter(item => !item.complete);
        return Promise.resolve(found);
    }

    getById(id:string):Promise<ITodo>{
        return Promise.resolve(Array.from(this.repo).find(item => item.id === id))
    }
}
