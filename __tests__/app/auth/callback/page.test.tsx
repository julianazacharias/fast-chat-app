// __tests__/app/auth/callback/page.test.tsx

import { vi, Mock } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Page from "@/app/auth/callback/page"; // Adjust the path if needed

// Mock the dependencies
vi.mock("@tanstack/react-query", () => ({
	useQuery: vi.fn(),
}));

vi.mock("next/navigation", () => ({
	useRouter: vi.fn(),
}));

vi.mock("@/actions/auth.actions", () => ({
	checkAuthStatus: vi.fn(),
}));

describe("Page Component", () => {
	it("should show loader and message while fetching auth status", () => {
		(useRouter as unknown as Mock).mockReturnValue({ push: vi.fn() });

		// Mock useQuery to simulate loading state
		(useQuery as unknown as Mock).mockReturnValue({
			isLoading: true,
			data: undefined,
		});

		render(<Page />);

		// Check for loader and message
		expect(screen.getByText(/Redirecting.../i)).toBeInTheDocument();
		expect(screen.getByText(/Please wait/i)).toBeInTheDocument();
	});
	it("should show redirect message when auth check is successful", async () => {
		const push = vi.fn();
		const router = { push } as unknown as ReturnType<typeof useRouter>;
		(useRouter as Mock).mockReturnValue(router);

		(useQuery as Mock).mockReturnValue({
			data: { success: true },
		});

		render(<Page />);

		// Wait for component effects
		await waitFor(() => {
			expect(push).toHaveBeenCalledWith("/");
		});

		// Check for loader and message
		expect(screen.getByText(/Redirecting.../i)).toBeInTheDocument();
		expect(screen.getByText(/Please wait/i)).toBeInTheDocument();
	});

	it("should handle errors in auth check", async () => {
		const push = vi.fn();
		(useRouter as unknown as Mock).mockReturnValue({ push });

		// Mock useQuery to simulate an error
		(useQuery as unknown as Mock).mockReturnValue({
			isError: true,
			data: undefined,
		});

		render(<Page />);

		// Check for loader and message
		expect(screen.getByText(/Redirecting.../i)).toBeInTheDocument();
		expect(screen.getByText(/Please wait/i)).toBeInTheDocument();
	});

	it("should not redirect when auth check fails", () => {
		const push = vi.fn();
		(useRouter as unknown as Mock).mockReturnValue({ push });

		// Mock useQuery to simulate a failed auth check
		(useQuery as unknown as Mock).mockReturnValue({
			data: { success: false },
		});

		render(<Page />);

		// Ensure router push was not called
		expect(push).not.toHaveBeenCalled();
	});
});
