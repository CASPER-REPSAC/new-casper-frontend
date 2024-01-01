import { DefaultLink } from '@app/_components/common';
import { render, screen } from '@testing-library/react';

describe('<DefaultLink />', () => {
  test('snapshot test', () => {
    const { container } = render(
      <DefaultLink href="https://www.test.com">Link</DefaultLink>,
    );

    expect(container).toMatchSnapshot();
  });

  test('href 속성을 올바르게 가진다.', () => {
    const href = 'https://www.test.com';
    render(<DefaultLink href={href}>Link</DefaultLink>);

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', href);
  });
});
