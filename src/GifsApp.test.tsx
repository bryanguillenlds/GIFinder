import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { GifsApp } from './GifsApp';

describe('GifsApp', () => {
  it('should render component properly', () => {
    const { container } = render(<GifsApp />);
    expect(container).toMatchSnapshot();
  });
})