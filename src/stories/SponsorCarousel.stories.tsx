import type { Meta, StoryObj } from "@storybook/react-vite";
import { SponsorCarousel } from "../../lib/components/SponsorCarousel";

const meta = {
    component: SponsorCarousel,
    argTypes: {
        darkMode: {
            table: { type: { summary: "boolean" } },
            control: "boolean",
        },
        openByDefault: {
            table: { type: { summary: "boolean" } },
            control: "boolean",
        },
        textColor: {
            table: { type: { summary: "string" } },
            control: "color",
        },
        backgroundColor: {
            table: { type: { summary: "string" } },
            control: "color",
        },
        borderColor: {
            table: { type: { summary: "string" } },
            control: "color",
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof SponsorCarousel>;
export default meta;

type Story = StoryObj<typeof meta>;
export const darkModeClosed: Story = {
    args: {
        darkMode: true,
        openByDefault: false,
    },
};

export const lightModeClosed: Story = {
    args: {
        darkMode: false,
        openByDefault: false,
    },
};

export const darkModeOpen: Story = {
    args: {
        darkMode: true,
        openByDefault: true,
    },
};

export const lightModeOpen: Story = {
    args: {
        darkMode: false,
        openByDefault: true,
    },
};
