import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { join } from "path";

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "__tests__/setup.ts",
		alias: {
			"@": join(__dirname, "src"),
		},
		mockReset: true,
	},
});
