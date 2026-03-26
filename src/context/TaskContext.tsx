"use client";
import { createContext, ReactNode, useContext, useMemo, useReducer } from 'react';
import { TaskState, TaskAction } from '@/types';
import { taskReducer, initialState } from './taskReducer';

// contexts
// -----------------------

const TaskStateContext = createContext<TaskState | null>(null);

const TaskDispatchContext = createContext<React.Dispatch<TaskAction> | null>(null);


// provider
// -----------------------

export function TaskProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    const stableState = useMemo(() => state, [state]);

    return ( 
        <TaskStateContext.Provider value={stableState} >
            <TaskDispatchContext.Provider value={dispatch}>
                    {children}
            </TaskDispatchContext.Provider>
        </TaskStateContext.Provider>
    )
}


// custom hooks
// -----------------------

export function useTasks(): TaskState {
    const context = useContext(TaskStateContext);
    if (!context) {
        throw new Error("useTasks must be used within TaskProvider")
    }
    return context;
}

export function useTaskDispatch(): React.Dispatch<TaskAction> {
    const context = useContext(TaskDispatchContext);
    if (!context) {
        throw new Error("useTaskDispatch must be used within TaskProvider")
    }
    return context;
}
