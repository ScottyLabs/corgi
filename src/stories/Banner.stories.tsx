import type { Meta, StoryObj } from "@storybook/react-vite";
import { Banner } from "../../lib/components/Banner";

const meta = {
    component: Banner,
    tags: ["autodocs"],
} satisfies Meta<typeof Banner>;
export default meta;

type Story = StoryObj<typeof meta>;
export const cmueats: Story = {
    args: {
        projectName: "CMU Eats",
    },
};

export const cmucourses: Story = {
    args: {
        projectName: "CMU Courses",
    },
};

export const cmumaps: Story = {
    args: {
        projectName: "CMU Maps",
    },
};
