import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import React from "react";

expect.extend(matchers);

// Mock remote components for testing
vi.mock("remote_app/Header", () => ({
  default: () => React.createElement("div", null, "Mocked Remote Header"),
}));

vi.mock("remote_app/Button", () => ({
  default: ({ text, onClick }: { text: string; onClick?: () => void }) =>
    React.createElement("button", { onClick }, `Mocked ${text}`),
}));

afterEach(() => {
  cleanup();
});
