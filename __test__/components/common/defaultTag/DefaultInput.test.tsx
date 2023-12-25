import { DefaultInput } from '@app/_components/common';
import { fireEvent, render, screen } from '@testing-library/react';

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

  test('정상적으로 값이 입력된다.', () => {
    render(<DefaultInput data-testid="input" />);

    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'value changed' } });

    expect(input).toHaveValue('value changed');
  });
});
