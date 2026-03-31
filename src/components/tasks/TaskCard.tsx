"use client";

import { Task } from "@/types";
import { Clock, Edit, Flag, Trash2 } from "lucide-react";
import { createContext, memo, useContext } from "react";

// Context داخلي للـ TaskCard

interface TaskCardContextType {
    task: Task;
}

const TaskCardContext = createContext<TaskCardContextType | null>(null);

function useTaskCard() {
    const context = useContext(TaskCardContext);
    if (!context) {
        throw new Error("TaskCard sub-components must be used within TaskCard");
    }
    return context;
}

const statusStyles: Record<Task["status"], string> = {
    todo: "bg-gray-100 text-gray-700",
    "in-progress": "bg-blue-100 text-blue-700",
    done: "bg-green-100 text-green-700",
};

const statusLabels: Record<Task["status"], string> = {
    todo: "To Do",
    "in-progress": "In Progress",
    done: "Done",
};

const priorityStyles: Record<Task["priority"], string> = {
    low: "text-gray-400",
    medium: "text-yellow-500",
    high: "text-red-500",
};

// Sub-components

function Header() {
    const { task } = useTaskCard();
    return (
        <div className="flex items-start justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-800 leading-snug flex-1 ml-2">
                {task.title}
            </h3>
            <span
                className={`text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap ${
                    statusStyles[task.status]
                }`}
            >
                {statusLabels[task.status]}
            </span>
        </div>
    );
}

function Body() {
    const { task } = useTaskCard();
    <div className="mb-4">
        <p className="text-sm text-gray-500 leading-relaxed">
            {task.description}
        </p>
        <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center gap-1">
                <Flag size={12} className={priorityStyles[task.priority]} />
                <span className="text-xs text-gray-400 capitalize">
                    {task.priority}
                </span>
            </div>
            <div className="flex items-center gap-1">
                <Clock size={12} className="text-gray-400" />
                <span className="text-xs text-gray-400">
                    {new Date(task.createdAt).toLocaleDateString("ar-EG")}
                </span>
            </div>
        </div>
    </div>;
}

interface FooterProps {
    onDelete: (id: string) => void;
    onEdit: (task: Task) => void;
}

function Footer({ onDelete, onEdit }: FooterProps) {
    const { task } = useTaskCard();

    return (
        <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-100">
            <button
                onClick={() => onEdit(task)}
                className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            >
                <Edit size={13} />
                <span>تعديل</span>
            </button>
            <button
                onClick={() => onDelete(task.id)}
                className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
            >
                <Trash2 size={13} />
                <span>حذف</span>
            </button>
        </div>
    );
}

// Main Component

interface TaskCardProps {
    task: Task;
    children: React.ReactNode;
}

function TaskCardRoot({ task, children }: TaskCardProps) {
    return (
        <TaskCardContext.Provider value={{ task }}>
            <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
                {children}
            </div>
        </TaskCardContext.Provider>
    );
}

// تركيب الـ Compound Component

export const TaskCard = Object.assign(memo(TaskCardRoot), {
    Header,
    Body,
    Footer,
});
