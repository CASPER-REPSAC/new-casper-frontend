import { LabelInput } from '@app/_components/common';
import { UserIcon } from '@app/_components/icons';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<LabelInput />', () => {
  test('알맞는 레이블을 가진다.', () => {
    render(<LabelInput label="test-label" />);

    const input = screen.getByLabelText('test-label');

    expect(input).toBeInTheDocument();
  });

  test('알맞는 아이콘을 가진다.', () => {
    const utils = render(
      <LabelInput labelIcon={<UserIcon data-testid="icon" />} />,
    );

    const icon = utils.getByTestId('icon');

    expect(icon).toBeInTheDocument();
  });

  test('정상적으로 값이 입력된다.', () => {
    render(<LabelInput placeholder="값을 입력하세요." />);

    const input = screen.getByPlaceholderText('값을 입력하세요.');
    fireEvent.change(input, { target: { value: 'value changed' } });

    expect(input).toHaveValue('value changed');
  });
});
