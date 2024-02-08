import { cn } from "@/lib/utils";

type LayoutBalancerProps = React.HTMLAttributes<HTMLDivElement>;

const LayoutBalancer: React.FC<LayoutBalancerProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={cn("mx-auto max-w-7xl", className)} {...props}>
            {children}
        </div>
    );
};

export { LayoutBalancer };
