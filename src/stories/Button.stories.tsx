import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../lib/components/Button";
import { Home01 } from "../../lib/main";

const meta = {
    component: Button,
    argTypes: {
        style: {
            table: { type: { summary: "filled | tonal | outline | subtle" } },
            options: ["filled", "tonal", "outline", "subtle"],
            control: "select",
        },
        palette: {
            table: { type: { summary: "neutral | brand | brandneutral" } },
            options: ["neutral", "brand", "brandneutral"],
            control: "select",
        },
        size: {
            table: { type: { summary: "sm | md | lg" } },
            options: ["sm", "md", "lg"],
            control: "select",
        },
        disabled: {
            table: { type: { summary: "boolean" } },
            control: "boolean",
        },
        icon: {
            table: { type: { summary: "React.ReactNode" } },
            control: "object",
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        style: "filled",
        palette: "neutral",
        size: "md",
        children: "Button",
        disabled: false,
    },
};

export const IconButton: Story = {
    args: {
        style: "filled",
        palette: "neutral",
        size: "md",
        children: "Button",
        icon: <Home01 className="size-5 text-white" />,
    },
};
