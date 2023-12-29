import { usePagination } from '@app/_hooks';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('usePagination', () => {
  test('페이지를 증가시킬 수 있다.', () => {
    const { result } = renderHook(() =>
      usePagination({ maxPage: 10, initialPage: 1 }),
    );

    act(() => {
      result.current.paginate(2);
    });

    expect(result.current.page).toBe(3);
  });
});
