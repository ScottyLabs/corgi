import { cva, type VariantProps } from "cva";
import { cn } from "../../utils";

export const buttonStyles = cva({
    base: "flex items-center justify-center rounded-4xl cursor-pointer text-white font-medium",
    variants: {
        disabled: {
            true: "cursor-not-allowed",
            false: "",
        },
        size: {
            sm: "text-sm py-1.5 px-3",
            md: "text-base py-2 px-4",
            lg: "text-lg py-2.5 px-5",
        },
        style: {
            filled: "",
            tonal: "",
            outline: "",
            subtle: "",
        },
        palette: {
            neutral: "",
            brand: "",
            brandneutral: "",
        },
    },
    compoundVariants: [
        /* Filled Enabled */
        {
            style: "filled",
            palette: "neutral",
            disabled: false,
            className:
                "bg-filled-bg-neutral hover:bg-filled-bg-neutral-hover active:bg-filled-bg-neutral-active",
        },
        {
            style: "filled",
            palette: "brand",
            disabled: false,
            className:
                "bg-filled-bg-brand hover:bg-filled-bg-brand-hover active:bg-filled-bg-brand-active",
        },
        /* Filled Disabled */
        {
            style: "filled",
            palette: "neutral",
            disabled: true,
            className:
                "bg-filled-bg-neutral-disabled text-filled-fg-neutral-disabled",
        },
        {
            style: "filled",
            palette: "brand",
            disabled: true,
            className:
                "bg-filled-bg-brand-disabled text-filled-fg-brand-disabled",
        },
        /* Tonal Enabled */
        {
            style: "tonal",
            palette: "neutral",
            disabled: false,
            className:
                "bg-tonal-bg-neutral hover:bg-tonal-bg-neutral-hover active:bg-tonal-bg-neutral-active text-tonal-fg-neutral",
        },
        {
            style: "tonal",
            palette: "brand",
            disabled: false,
            className:
                "bg-tonal-bg-brand hover:bg-tonal-bg-brand-hover active:bg-tonal-bg-brand-active text-tonal-fg-brand",
        },
        {
            style: "tonal",
            palette: "brandneutral",
            disabled: false,
            className:
                "bg-tonal-bg-brandneutral hover:bg-tonal-bg-brandneutral-hover active:bg-tonal-bg-brandneutral-active text-tonal-fg-brandneutral",
        },
        /* Tonal Disabled */
        {
            style: "tonal",
            palette: "neutral",
            disabled: true,
            className: "bg-tonal-bg-neutral text-tonal-fg-neutral-disabled",
        },
        {
            style: "tonal",
            palette: "brand",
            disabled: true,
            className:
                "bg-tonal-bg-brand-disabled text-tonal-fg-brand-disabled",
        },
        {
            style: "tonal",
            palette: "brandneutral",
            disabled: true,
            className:
                "bg-tonal-bg-brandneutral-disabled text-tonal-fg-brandneutral-disabled",
        },
        /* Outline Enabled */
        {
            style: "outline",
            palette: "neutral",
            disabled: false,
            className:
                "bg-outline-bg border border-outline-stroke-neutral hover:bg-outline-bg-neutral-hover active:bg-outline-bg-neutral-active text-outline-fg-neutral",
        },
        {
            style: "outline",
            palette: "brandneutral",
            disabled: false,
            className:
                "bg-outline-bg border border-outline-stroke-brandneutral hover:bg-outline-bg-brandneutral-hover active:bg-outline-bg-brandneutral-active text-outline-fg-brandneutral",
        },
        /* Outline Disabled */
        {
            style: "outline",
            palette: "neutral",
            disabled: true,
            className:
                "bg-outline-bg border border-outline-stroke-neutral-disabled text-outline-fg-neutral-disabled",
        },
        {
            style: "outline",
            palette: "brandneutral",
            disabled: true,
            className:
                "bg-outline-bg border border-outline-stroke-brandneutral-disabled text-outline-fg-brandneutral-disabled",
        },
        /* Subtle Enabled */
        {
            style: "subtle",
            palette: "neutral",
            disabled: false,
            className:
                "bg-subtle-bg hover:bg-subtle-bg-neutral-hover active:bg-subtle-bg-neutral-active text-subtle-fg-neutral",
        },
        {
            style: "subtle",
            palette: "brandneutral",
            disabled: false,
            className:
                "bg-subtle-bg hover:bg-subtle-bg-brandneutral-hover active:bg-subtle-bg-brandneutral-active text-subtle-fg-brandneutral",
        },
        /* Subtle Disabled */
        {
            style: "subtle",
            palette: "neutral",
            disabled: true,
            className: "bg-subtle-bg text-subtle-fg-neutral-disabled",
        },
        {
            style: "subtle",
            palette: "brandneutral",
            disabled: true,
            className: "bg-subtle-bg text-subtle-fg-brandneutral-disabled",
        },
    ],
});

export type ButtonProps = Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "disabled"
> & {
    icon?: React.ReactNode;
} & VariantProps<typeof buttonStyles>;

export const Button = ({
    className,
    size = "md",
    style = "filled",
    palette = "neutral",
    disabled = false,
    icon,
    ...props
}: ButtonProps) => (
    <button
        className={cn(
            buttonStyles({ disabled, size, style, palette, className }),
        )}
        {...props}
    >
        {icon && <span className="mr-2">{icon}</span>}
        {props.children}
    </button>
);
