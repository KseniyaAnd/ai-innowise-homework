import { render, screen } from '@testing-library/react';
import UserDirectory from '../components/UserDirectory';

test('renders user directory title', () => {
  render(<UserDirectory />);
  expect(screen.getByText(/User Directory/i)).toBeInTheDocument();
});