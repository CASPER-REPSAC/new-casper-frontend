import { CheckInput } from '@app/_components/common';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<CheckInput />', () => {
  test('클릭 하여 선택할 수 있다.', () => {
    render(<CheckInput />);
    const checkInput = screen.getByRole('checkbox');

    fireEvent.click(checkInput);

    expect(checkInput).toBeChecked();
  });

  test('label이 정상적으로 나타난다.', () => {
    render(<CheckInput label="test-label" />);
    const checkInput = screen.getByLabelText('test-label');

    expect(checkInput).toBeInTheDocument();
  });
});
