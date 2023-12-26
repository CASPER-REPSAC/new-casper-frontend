import { DefaultTextarea } from '@app/_components/common';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<DefaultTextarea />', () => {
  test('snapshot test', () => {
    const { container } = render(<DefaultTextarea />);

    expect(container).toMatchSnapshot();
  });

  test('값을 정상적으로 입력할 수 있다.', () => {
    render(<DefaultTextarea placeholder="값을 입력하세요." />);

    const textarea = screen.getByPlaceholderText('값을 입력하세요.');
    fireEvent.change(textarea, {
      target: {
        value: 'value is changed',
      },
    });

    expect(textarea).toHaveValue('value is changed');
  });
});
