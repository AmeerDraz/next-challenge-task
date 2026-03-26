import { TaskState, TaskAction, TaskFilter } from '@/types';

// initial state
// -----------------------

export const initialFilter: TaskFilter = {
    status: 'all',
    search: '',
    sortField: 'createdAt',
    sortDirection: 'desc',
}

export const initialState: TaskState = {
    tasks: [],
    filters: initialFilter
}

// reducer
// -----------------------


export function taskReducer(state: TaskState, action: TaskAction) : TaskState {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            };
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task)=> task.id === action.payload.id? action.payload : task)
            }
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((task)=> task.id !== action.payload)
            }
        case 'SET_FILTER':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    ...action.payload
                }
            }
        default:
            return state;
    }
}
