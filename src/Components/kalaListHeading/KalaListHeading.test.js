import { render, screen } from '@testing-library/react';
import KalaListHeading from './KalaListHeading';

describe('KalaListHeading', () => {
    test('KalaListHeading must have src = "Kalavithi_Logo_Final.png" and alt = "kala"', () => {
      render(<KalaListHeading/>);
  
      const logo = screen.getByRole('img');
      expect(logo).toHaveAttribute('src', 'Kalavithi_Logo_Final.png');
      expect(logo).toHaveAttribute('alt', 'kala');
    });
  });
  