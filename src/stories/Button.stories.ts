import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../lib/components/Button";

const meta = {
    component: Button,
    argTypes: {
        theme: {
            table: { type: { summary: "neutral | brand" } },
            options: ["neutral", "brand"],
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
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        theme: "neutral",
        size: "md",
        children: "Button",
        disabled: false,
    },
};
