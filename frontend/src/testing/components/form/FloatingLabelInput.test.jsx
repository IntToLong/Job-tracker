import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import FloatingLabelInput from '../../../components/form/FloatingLabelInput';
import userEvent from '@testing-library/user-event';

describe('FloatingLabelInput', () => {
	it('renders email input with correct label and no toggle button', () => {
		render(
			<FloatingLabelInput
				label='Email'
				type='email'
			/>
		);

		const label = screen.getByText('Email');
		expect(label).toBeInTheDocument();

		const input = screen.getByLabelText('Email');
		expect(input.type).toBe('email');

		const button = screen.queryByRole('button');
		expect(button).not.toBeInTheDocument();
	});

	it('renders password toggle button when showToggle is true', () => {
		render(
			<FloatingLabelInput
				label='Password'
				type='password'
				showToggle
			/>
		);

		const button = screen.queryByRole('button');
		expect(button).toBeInTheDocument();
	});

	it('toggles password visibility and updates eye icon when button is clicked', async () => {
		render(
			<FloatingLabelInput
				label='Password'
				type='password'
				showToggle
			/>
		);

		const button = screen.queryByRole('button');
		const closedEyeImg = within(button).getByAltText('closed eye');
		expect(closedEyeImg).toBeInTheDocument();
		const input = screen.getByLabelText('Password');
		expect(input.type).toBe('password');

		await userEvent.click(button);
		const openedEyeImg = await within(button).findByAltText('opened eye');
		expect(openedEyeImg).toBeInTheDocument();
		expect(input.type).toBe('text');
	});

	it('displays error message when errors prop is provided', () => {
		render(
			<FloatingLabelInput
				label='Name'
				type='name'
				errors={{ message: 'Name is required' }}
			/>
		);

		const alert = screen.getByRole('alert');
		expect(alert).toBeInTheDocument();
		expect(alert).toHaveTextContent('Name is required');
	});
});
