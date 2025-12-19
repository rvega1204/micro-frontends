import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

describe("Button Component", () => {
  it("renders with the provided text", () => {
    render(<Button text="Click me" />);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it("applies correct CSS classes", () => {
    render(<Button text="Test Button" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("px-4", "py-2", "bg-red-500", "text-white", "rounded");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button text="Click me" onClick={handleClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not crash when onClick is not provided", () => {
    render(<Button text="No handler" />);
    const button = screen.getByRole("button");

    expect(() => fireEvent.click(button)).not.toThrow();
  });

  it("displays the correct text content", () => {
    const testText = "Test Button Text";
    render(<Button text={testText} />);

    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});
