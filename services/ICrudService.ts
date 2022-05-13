/**
 * Generic re-usable CRUD service interface using generic types
 */
export interface ICrudService<T> {
    /** Get all items of type T. 
     * @return {Promise<T[]>}
    */
    getAll():Promise<ReadonlyArray<T>>
    add(item:T):Promise<void>
    delete(id:string):Promise<void> 
    update(id:string, newItem:Partial<T>):Promise<T> 
    getById(id:string):Promise<T>
}
