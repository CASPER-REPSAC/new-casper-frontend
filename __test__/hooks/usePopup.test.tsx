import { PopupWrapper } from '@app/_components/providers';
import { usePopup } from '@app/_hooks';
import { renderHook, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { RecoilRoot } from 'recoil';

describe('usePopup', () => {
  test('<PopupWrapper /> 내에 팝업을 생성할 수 있다.', () => {
    const { result } = renderHook(() => usePopup(), {
      wrapper: ({ children }) => (
        <RecoilRoot>
          <PopupWrapper />
          {children}
        </RecoilRoot>
      ),
    });

    act(() => {
      result.current.openPopup({
        key: 1,
        message: 'test-message',
      });
    });

    const popup = screen.getByText('test-message');
    expect(popup).toBeInTheDocument();
  });
});
