"use client";

import { CheckSquare, LayoutDashboard, Settings } from "lucide";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    {
        href: "/",
        label: "Home",
        icon: LayoutDashboard,
    },
    { href: "/tasks", label: "Tasks", icon: CheckSquare },
    {
        href: "/settings",
        label: "Settings",
        icon: Settings,
    },
];

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <aside className="w-64 min-h-screen bg-gray-900 text-white flex flex-col">
            <div className="p-6 border-b border-gray-700">
                <h1 className="text-xl font-bold text-white">Task Master</h1>
                <p className="text-xs text-gray-400 mt-1">
                    React Advanced Patterns
                </p>
            </div>
            <nav className="">
                <ul className="">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                        isActive
                                            ? "bg-blue-600 text-white"
                                            : "text-gray-300 hover:bg-gray-800 hover:text-whitr"
                                    }`}
                                >
                                    <Icon size={18} />
                                    <span className="text-sm font-mediun">
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className="p-4 border-t border-gray-700">
                <p className="text-xs text-gray-500 text-center">Task Master v1.0</p>
            </div>
        </aside>
    );
};

export default Sidebar;
