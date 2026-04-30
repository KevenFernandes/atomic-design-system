import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InputText } from ".";
import { Bell, Mail, Search, User } from "lucide-react";

const iconMap = {
  None: null,
  Mail: Mail,
  Search: Search,
  Bell: Bell,
  User: User,
};

const meta = {
  title: "component/InputText",
  component: InputText,
  argTypes: {
    intent: {
      control: "select",
      options: ["default", "success", "error", "warning", "info"],
    },
    mode: {
      control: "select",
      options: ["solid", "outline"],
    },
    inputSize: {
      control: "select",
      options: ["larger", "medium"],
    },
    labelText: {
      control: "text",
    },
    helperText: {
      control: "text",
    },
    icon: {
      control: "select",
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
    disabled: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    intent: "default",
    mode: "solid",
    inputSize: "larger",
    labelText: "Default",
    helperText: "Default Text",
    placeholder: "Placeholder Default",
    disabled: false,
  },
};
