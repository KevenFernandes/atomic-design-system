import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from ".";
import { Bell, Mail, Search, User } from "lucide-react";

const iconMap = {
  None: null,
  Mail: Mail,
  Search: Search,
  Bell: Bell,
  User: User,
};

const meta = {
  title: "component/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },

  argTypes: {
    varirant: {
      control: "select",
      options: ["default", "success", "error", "info", "warning"],
    },
    mode: {
      control: "inline-radio",
      options: ["solid", "outline"],
    },
    size: { control: "radio", options: ["medium", "small", "tiny"] },
    buttonText: { control: "text" },
    icon: {
      control: "select",
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    varirant: "default",
    mode: "solid",
    size: "medium",
    buttonText: "Badger",
  },
};
