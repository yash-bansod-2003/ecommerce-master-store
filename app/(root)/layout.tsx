import { SiteFooter } from "@/components/site-footer";

type RootLayoutProps = React.PropsWithChildren;

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col h-full w-full">
            <main className="flex-1">{children}</main>
            <SiteFooter />
        </div>
    );
};

export default RootLayout;
