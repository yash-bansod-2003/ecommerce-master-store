"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MainNavItem, Category } from "@/types";

type MainNavProps = React.HTMLAttributes<HTMLDivElement> & {
    items: Array<Category>;
};

const MainNav: React.FC<MainNavProps> = ({ items, className, ...props }) => {
    const pathname = usePathname();

    const routes: MainNavItem[] = items.map((item) => ({
        href: `/category/${item.id}`,
        label: item.name,
        active: pathname === `/category/${item.id}`,
    }));

    return (
        <nav
            className={cn(
                "mx-6 flex items-center space-x-4 lg:space-x-6",
                className,
            )}
            {...props}
        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        route.active ? "text-black" : "text-neutral-500",
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    );
};

export { MainNav };
