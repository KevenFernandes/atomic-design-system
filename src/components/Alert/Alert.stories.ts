import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Alert } from ".";
import { Bell, Mail, Search, Star, User } from "lucide-react";

const iconMap = {
  Star: Star,
  Mail: Mail,
  Search: Search,
  Bell: Bell,
  User: User,
};

const meta = {
  title: "component/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "info", "warning", "error"],
    },
    mode: {
      control: "inline-radio",
      options: ["solid", "outline"],
    },

    title: {
      control: "text",
    },

    description: {
      control: "text",
    },

    icon: {
      control: "select",
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    mode: "outline",
    title: "Title",
    description: "Get immediate alerts and a notification badge.",
    icon: Star,
  },
};
