import { MainNav } from "@/components/main-nav";
import { LayoutBalancer } from "@/components/ui/balancer";
import Link from "next/link";

const SiteHeader = () => {
    return (
        <header className="border-b">
            <LayoutBalancer>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">Store</p>
                    </Link>
                    <MainNav items={[]} />
                </div>
            </LayoutBalancer>
        </header>
    );
};

export { SiteHeader };
