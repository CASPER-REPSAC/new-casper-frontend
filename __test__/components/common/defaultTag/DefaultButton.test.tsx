import { DefaultButton } from '@app/_components/common';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<DefaultButton /> 테스트', () => {
  test('snapshot test', () => {
    const { container } = render(<DefaultButton>버튼</DefaultButton>);

    expect(container).toMatchSnapshot();
  });

  test('알맞는 글자를 포함하여 렌더링한다.', () => {
    render(<DefaultButton>버튼</DefaultButton>);

    const button = screen.getByText('버튼');

    expect(button).toBeInTheDocument();
  });

  test('onClick 함수가 정상적으로 실행된다.', () => {
    const onClick = jest.fn();
    render(<DefaultButton onClick={onClick}>버튼</DefaultButton>);

    const button = screen.getByText('버튼');

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
