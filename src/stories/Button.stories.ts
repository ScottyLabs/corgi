import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../lib/components/Button";

const meta = { component: Button } satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        className: "bg-blue-500 text-white",
        children: "Button",
    },
};
