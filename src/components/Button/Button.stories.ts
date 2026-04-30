import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from ".";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "component/button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: ["primary", "outline", "ghost"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "primary",
    size: "sm",
    children: "Button",
  },
};

export const Interactive: Story = {
  args: {
    variant: "primary",
    size: "sm",
    children: "click me",
  },
  play: async ({ canvasElement }) => {
    const user = userEvent.setup({ delay: 500 });
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    expect(button).toBeInTheDocument();

    await user.hover(button);
    await user.click(button);
  },
};
