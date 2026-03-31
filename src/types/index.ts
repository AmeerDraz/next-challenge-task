// task types
// ------------------
export type TaskStatus = "todo" | "in-progress" | "done";

export type TaskPriority = "low" | "medium" | "high";

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    createdAt: string;
    updatedAt: string;
}

// filter & sorting types
// ------------------

export type FilterStatus = TaskStatus
    | "all";
export type SortField = "createdAt" | "priority" | "title";

export type SortDirection = "asc" | "desc";

export interface TaskFilter { 
    status: FilterStatus;
    search: string;
    sortField: SortField;
    sortDirection: SortDirection;
}

// context types
// ------------------

export interface TaskState{
    tasks: Task[];
    filters: TaskFilter;
}

export type TaskAction = { type: "ADD_TASK"; payload: Task }
    | { type: "UPDATE_TASK"; payload: Task }
    | { type: "DELETE_TASK"; payload: string }
    | { type: "SET_FILTER"; payload: Partial<TaskFilter> }


    