import { DefaultButton } from '@app/_components/common';
import { render } from '@testing-library/react';

describe('<DefaultButton /> 테스트', () => {
  test('버튼의 글자를 포함하여 렌더링한다.', () => {
    const container = render(<DefaultButton name="button">버튼</DefaultButton>);
    const button = container.getByText('버튼');
    expect(button).toBeInTheDocument();
  });
});
