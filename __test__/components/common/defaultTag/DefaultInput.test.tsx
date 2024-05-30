import { DefaultInput } from '@app/_components/common';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<DefaultInput />', () => {
  test('snapshot test', () => {
    const { container } = render(
      <DefaultInput
        placeholder="값을 입력하세요."
        defaultValue="default value"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  test('정상적으로 값이 입력된다.', () => {
    render(<DefaultInput placeholder="값을 입력하세요." />);

    const input = screen.getByPlaceholderText('값을 입력하세요.');
    fireEvent.change(input, { target: { value: 'value changed' } });

    expect(input).toHaveValue('value changed');
  });
});
