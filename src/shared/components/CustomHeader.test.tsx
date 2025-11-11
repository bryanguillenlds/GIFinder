import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CustomHeader } from './CustomHeader';


describe('CustomHeader', () => {
  const title = 'Test Title';
  const description = 'Test Description';

  it('should render the title correctly', () => {

    render(<CustomHeader title={title} description={description} />);

    const titleElement = screen.getByText(title).textContent;
    const descriptionElement = screen.getByText(description).textContent;

    expect(titleElement).toEqual(title);
    expect(descriptionElement).toEqual(description);
  });

  it('should render the description correctly', () => {
    render(<CustomHeader title={title} description={description} />);

    const descriptionElement = screen.getByText(description).textContent;

    expect(descriptionElement).toEqual(description);
  });

  it('should not render the description if it is not provided', () => {
    const { container } = render(<CustomHeader title={title} />);

    expect(container.querySelector('p')).toBeNull();
  });

  it('should not render the description if it is not provided (with screen)', () => {
    render(<CustomHeader title={title} />);
    expect(screen.queryByRole('paragraph')).toBeNull();
  });
})