export enum STATUS  {
    NOT_STARTED,
    IN_PROGRESS,
    DONE
}

export type UUID = string;

export interface ITodo {
    id: UUID,
    complete: boolean,
    task: string
    location?: string,
    status?: STATUS
}
