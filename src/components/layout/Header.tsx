"use client";
import { useTasks } from "@/context/TaskContext";

export const Header = () => {
    const { tasks } = useTasks();

    const stats = {
        total: tasks.length,
        done: tasks.filter((t) => t.status === "done").length,
        inProgress: tasks.filter((t) => t.status === "in-progress").length,
    };
    return (
        <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                        Dashboard
                    </h2>
                    <p className="text-sm text-gray-500">
                        Manage your tasks effectively
                    </p>
                </div>
                <div className="flex items-center gap-6">
                    <div className="text-center">
                        <p className="text-2xl font-bold text-gray-800">
                            {stats.total}
                        </p>
                        <p className="text-xs text-gray-500">total</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">
                            {stats.inProgress}
                        </p>
                        <p className="text-xs text-gray-500">in progress</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">
                            {stats.done}
                        </p>
                        <p className="text-xs text-gray-500">done</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

