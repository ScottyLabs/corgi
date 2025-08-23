import { cn } from "../../utils";

export const Banner = ({
    projectName,
    className,
}: {
    projectName: string;
    className?: string;
}) => (
    <div
        className={cn(
            "flex h-10 w-full items-center justify-center bg-bg-brand text-2xl text-white",
            className,
        )}
    >
        Interested in Tech or Design? Like {projectName}? Join ScottyLabs!
    </div>
);
