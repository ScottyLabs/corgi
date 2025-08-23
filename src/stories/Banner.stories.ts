import type { Meta, StoryObj } from "@storybook/react-vite";
import { Banner } from "../../lib/components/Banner";

const meta = {
    component: Banner,
    tags: ["autodocs"],
} satisfies Meta<typeof Banner>;
export default meta;

type Story = StoryObj<typeof meta>;
export const CMUEats: Story = {
    args: {
        projectName: "CMU Eats",
    },
};
export const CMUCourses: Story = {
    args: {
        projectName: "CMU Courses",
    },
};
export const CMUMaps: Story = {
    args: {
        projectName: "CMU Maps",
    },
};
