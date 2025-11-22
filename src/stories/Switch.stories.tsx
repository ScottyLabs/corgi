import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "../../lib/components/Switch";

const meta = {
    component: Switch,
    argTypes: {
        palette: {
            table: { type: { summary: "neutral | brand | brandNeutral" } },
            options: ["neutral", "brand", "brandNeutral"],
            control: "select",
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Switch>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Neutral: Story = {
    args: { palette: "neutral" },
};

export const Brand: Story = {
    args: { palette: "brand" },
};

export const DefaultChecked: Story = {
    args: { defaultChecked: true },
};
