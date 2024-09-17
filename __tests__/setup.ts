import "@testing-library/jest-dom/vitest";
import { config } from "dotenv";
import { beforeAll, afterAll, vi, importOriginal } from "vitest";

// Load environment variables from .env.local file
config({ path: ".env.local" });

// Mock Redis client
vi.mock("@upstash/redis", () => ({
	Redis: vi.fn(() => ({
		// Mock methods if necessary
		get: vi.fn(),
		set: vi.fn(),
		del: vi.fn(),
		// Add more methods as needed
	})),
}));

// // Mock specific modules
// vi.mock("@kinde-oss/kinde-typescript-sdk", () => ({
// 	createKindeServerClient: vi.fn(),
// }));

vi.mock("@kinde-oss/kinde-typescript-sdk", async () => {
	const originalModule = await importOriginal(
		"@kinde-oss/kinde-typescript-sdk"
	);

	return {
		...originalModule,
		createKindeServerClient: vi.fn(),
		// Mock only the required parts
		GrantType: {
			AuthorizationCode: "authorization_code",
			ClientCredentials: "client_credentials",
		},
	};
});

vi.mock("@kinde-oss/kinde-auth-nextjs", () => ({
	someFunction: vi.fn(),
}));

// Add any additional setup needed for your tests
beforeAll(() => {
	// Perform any setup needed before all tests
});

afterAll(() => {
	// Clean up resources or perform any teardown needed after all tests
});
