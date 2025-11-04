import type { Meta, StoryObj } from "@storybook/react-vite";
import { SponsorCarousel } from "../../lib/components/SponsorCarousel";

const meta = {
    component: SponsorCarousel,
    argTypes: {
        darkMode: {
            table: { type: { summary: "boolean" } },
            control: "boolean",
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof SponsorCarousel>;
export default meta;

type Story = StoryObj<typeof meta>;
export const darkMode: Story = {
    args: { darkMode: true },
};

export const lightMode: Story = {
    args: { darkMode: false },
};
