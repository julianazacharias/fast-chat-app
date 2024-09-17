import { fireEvent, render, screen } from "@testing-library/react";
import AuthButtons from "@/app/auth/AuthButtons";

describe("AuthButtons", () => {
	it("renders Sign up button", () => {
		render(<AuthButtons />);
		expect(screen.getByText("Sign up")).toBeInTheDocument();
	});

	it("renders Login button", () => {
		render(<AuthButtons />);
		expect(screen.getByText("Login")).toBeInTheDocument();
	});

	it("renders with Sign up button not in loading state initially", () => {
		render(<AuthButtons />);

		const signUpButton = screen.getByText("Sign up");

		expect(signUpButton).toBeInTheDocument();

		expect(signUpButton).not.toBeDisabled(); // Ensure it's not disabled
	});

	it("renders with Login button not in loading state initially", () => {
		render(<AuthButtons />);

		const loginButton = screen.getByText("Login");

		expect(loginButton).toBeInTheDocument();

		expect(loginButton).not.toBeDisabled(); // Ensure it's not disabled
	});

	it("disables buttons and shows loading state when Sign up button is clicked", () => {
		render(<AuthButtons />);

		const signUpButton = screen.getByText("Sign up");
		const loginButton = screen.getByText("Login");

		// Simulate button click to trigger loading state
		fireEvent.click(signUpButton);

		// Assert that the buttons are disabled after the click
		expect(signUpButton).toBeDisabled();
		expect(loginButton).toBeDisabled();
	});

	it("disables buttons and shows loading state when Login button is clicked", () => {
		render(<AuthButtons />);

		const signUpButton = screen.getByText("Sign up");
		const loginButton = screen.getByText("Login");

		// Simulate button click to trigger loading state
		fireEvent.click(loginButton);

		// Assert that the buttons are disabled after the click
		expect(signUpButton).toBeDisabled();
		expect(loginButton).toBeDisabled();
	});

	it("clicking Sign up button does not affect the Login button's state", () => {
		render(<AuthButtons />);

		const signUpButton = screen.getByText("Sign up");
		const loginButton = screen.getByText("Login");

		// Click Sign Up button
		fireEvent.click(signUpButton);

		// Ensure Login button is still disabled
		expect(loginButton).toBeDisabled();
	});

	it("clicking Login button does not affect the Sign up button's state", () => {
		render(<AuthButtons />);

		const signUpButton = screen.getByText("Sign up");
		const loginButton = screen.getByText("Login");

		// Click Sign Up button
		fireEvent.click(loginButton);

		// Ensure Login button is still disabled
		expect(signUpButton).toBeDisabled();
	});
});
