import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "../../lib/components/Checkbox";

const meta = {
    component: Checkbox,
    argTypes: {
        palette: {
            table: { type: { summary: "neutral | brand" } },
            options: ["neutral", "brand"],
            control: "select",
        },
        disabled: {
            table: { type: { summary: "boolean" } },
            control: "boolean",
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Neutral: Story = {
    args: {
        palette: "neutral",
        disabled: false,
    },
};

export const Brand: Story = {
    args: {
        palette: "brand",
        disabled: false,
    },
};

export const DefaultChecked: Story = {
    args: {
        defaultChecked: true,
    },
};
