import { DefaultInput } from '@app/_components/common';
import { render, screen } from '@testing-library/react';

describe('<DefaultInput />', () => {
  test('알맞는 value를 가진다.', () => {
    render(<DefaultInput value="default value" readOnly />);

    const input = screen.getByDisplayValue('default value');

    expect(input).toBeInTheDocument();
  });

  test('알맞는 placeholder를 가진다.', () => {
    render(<DefaultInput placeholder="default placeholder" />);

    const input = screen.getByPlaceholderText('default placeholder');

    expect(input).toBeInTheDocument();
  });
});
