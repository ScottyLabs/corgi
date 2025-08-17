import { cva, type VariantProps } from "cva";
import { cn } from "../../utils";

const buttonStyles = cva({
    base: "flex items-center justify-center rounded-4xl cursor-pointer text-white",
    variants: {
        disabled: {
            true: "cursor-not-allowed",
        },
        size: {
            sm: "text-sm py-1.5 px-3",
            md: "text-base py-2 px-4",
            lg: "text-lg py-2.5 px-5",
        },
        theme: {
            neutral:
                "bg-bg-neutral hover:bg-bg-neutral-hover active:bg-bg-neutral-active",
            brand: "bg-bg-brand hover:bg-bg-brand-hover active:bg-bg-brand-active",
        },
    },
    compoundVariants: [
        {
            theme: "neutral",
            disabled: true,
            className: "bg-bg-neutral-disabled text-fg-neutral-disabled",
        },
        {
            theme: "brand",
            disabled: true,
            className: "bg-bg-brand-disabled text-fg-brand-disabled",
        },
    ],
});

type ButtonProps = Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "disabled"
> &
    VariantProps<typeof buttonStyles>;

export const Button = ({
    className,
    size = "md",
    theme = "neutral",
    disabled = false,
    ...props
}: ButtonProps) => (
    <button
        className={cn(buttonStyles({ disabled, size, theme, className }))}
        {...props}
    />
);
