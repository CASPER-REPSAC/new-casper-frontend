import { LabelTextarea } from '@app/_components/common';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<LabelTextarea />', () => {
  test('알맞는 레이블을 가진다.', () => {
    render(<LabelTextarea label="test-label" />);

    const textarea = screen.getByLabelText('test-label');

    expect(textarea).toBeInTheDocument();
  });

  test('정상적으로 값이 입력된다.', () => {
    render(<LabelTextarea label="test-label" />);

    const textarea = screen.getByLabelText('test-label');
    fireEvent.change(textarea, { target: { value: 'value is changed' } });

    expect(textarea).toHaveValue('value is changed');
  });
});
