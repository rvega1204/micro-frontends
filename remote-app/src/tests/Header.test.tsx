import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header Component", () => {
  it("renders the header element", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("displays the correct heading text", () => {
    render(<Header />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Updated Remote App Header");
  });

  it("displays the greeting message", () => {
    render(<Header />);
    const greeting = screen.getByText(/hi, ricardo/i);
    expect(greeting).toBeInTheDocument();
  });

  it("applies correct CSS classes to header", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("bg-gray-800", "text-white", "p-4");
  });

  it("applies correct CSS classes to heading", () => {
    render(<Header />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveClass("text-2xl");
  });

  it("greeting paragraph has correct styling", () => {
    render(<Header />);
    const greeting = screen.getByText(/hi, ricardo/i);
    expect(greeting).toHaveClass("text-white");
  });
});
