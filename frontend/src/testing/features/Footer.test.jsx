import { it, vi } from 'vitest';
import {render, screen} from '@testing-library/react';
import Footer from '../../features/Home/Footer/Footer';

describe('Footer', () => {
	it('displays correct year', () => {
		const date = new Date(2000, 1, 1, 1);
		vi.setSystemTime(date);
        render(<Footer />);
        const paragraph = screen.getByText(/2000/);
        expect(paragraph).toBeInTheDocument();
	});

    
});
