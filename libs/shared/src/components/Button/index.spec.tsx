import { render } from '@testing-library/react';
import { Button } from './index';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>Click me</Button>);
    expect(baseElement).toBeTruthy();
  });

  it('should render with primary variant', () => {
    const { getByText } = render(<Button variant="primary">Primary Button</Button>);
    expect(getByText('Primary Button')).toBeTruthy();
  });

  it('should render with different sizes', () => {
    const { getByText } = render(<Button size="lg">Large Button</Button>);
    expect(getByText('Large Button')).toBeTruthy();
  });

  // it('should handle click events', () => {
  //   const handleClick = jest.fn();
  //   const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
    
  //   getByText('Click me').click();
  //   expect(handleClick).toHaveBeenCalledTimes(1);
  // });

  it('should show loading state', () => {
    const { getByText } = render(<Button isLoading>Loading</Button>);
    expect(getByText('Loading...')).toBeTruthy();
  });

  // it('should be disabled when isLoading is true', () => {
  //   const { getByText } = render(<Button isLoading>Button</Button>);
  //   const button = getByText('Loading...').closest('button');
  //   expect(button?.disabled).toBe(true);
  // });

  // it('should apply full width class', () => {
  //   const { container } = render(<Button fullWidth>Full Width</Button>);
  //   const button = container.querySelector('button');
  //   expect(button?.className).toContain('w-full');
  // });

  // it('should apply different variants', () => {
  //   const { rerender, container } = render(<Button variant="success">Success</Button>);
  //   let button = container.querySelector('button');
  //   expect(button?.className).toContain('bg-green-600');

  //   rerender(<Button variant="danger">Danger</Button>);
  //   button = container.querySelector('button');
  //   expect(button?.className).toContain('bg-red-600');
  // });
});