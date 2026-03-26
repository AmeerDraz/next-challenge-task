import { Task, TaskPriority, TaskStatus } from "@/types";

// generate uniq id

export function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function generateMockTasks(count: number): Task[] {
    const statuses = ["todo", "in-progress", "done"] as const;
    const priorities = ["low", "medium", "high"] as const;

    return Array.from({ length: count }, (_, i) => ({
        id: `task-${i + 1}`,
        title: `Task ${i + 1}: ${getSampleTitle(i)}`,
        description: `Description for task ${i + 1}`,
        status: statuses[i % 3],
        priority: priorities[i % 3],
        createdAt: new Date(Date.now() - i * 86400000).toISOString(),
        updatedAt: new Date(Date.now()- i * 43200000).toISOString(),
    }))
}

function getSampleTitle(index: number): string {
    const titles = [
        "Fix authentication bug",
        "Update dashboard UI",
        "Write unit tests",
        "Review pull request",
        "Deploy to production",
        "Refactor API calls",
        "Add dark mode support",
        "Optimize database queries",
    ];
    return titles[index% titles.length]
}

export const PRIORITY_ORDER: Record<TaskPriority, number> = {
    high: 3,
    medium: 2,
    low: 1,
};