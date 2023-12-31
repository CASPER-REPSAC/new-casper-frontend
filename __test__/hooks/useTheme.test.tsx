import { useTheme } from '@app/_hooks';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { RecoilRoot } from 'recoil';

describe('useTheme', () => {
  test.each<'dark' | 'light'>(['dark', 'light'])(
    'theme 값을 %s로 변경할 수 있다.',
    (theme) => {
      const { result } = renderHook(() => useTheme(), {
        wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
      });

      act(() => {
        result.current.setTheme(theme);
      });

      expect(result.current.theme).toBe(theme);
    },
  );

  test('theme을 변경하면 html class도 변경된다.', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
    });

    act(() => {
      result.current.setTheme('light');
    });

    const html = document.querySelector('html');
    const htmlTheme = html?.classList.contains('dark') ? 'dark' : 'light';

    expect(htmlTheme).toBe('light');
  });
});
