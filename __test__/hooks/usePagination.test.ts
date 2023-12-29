import { usePagination } from '@app/_hooks';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('usePagination', () => {
  test('페이지를 증가 시킬 수 있다.', () => {
    const { result } = renderHook(() =>
      usePagination({ maxPage: 10, initialPage: 1 }),
    );

    act(() => {
      result.current.paginate(2);
    });

    expect(result.current.page).toBe(3);
  });

  test('maxPage 이상으로 설정하면, maxPage로 설정된다.', () => {
    const { result } = renderHook(() =>
      usePagination({ maxPage: 10, initialPage: 1 }),
    );

    act(() => {
      result.current.paginate(30);
    });

    expect(result.current.page).toBe(10);
  });

  test('0 이하로 설정하면, 0으로 설정된다.', () => {
    const { result } = renderHook(() =>
      usePagination({ maxPage: 10, initialPage: 3 }),
    );

    act(() => {
      result.current.paginate(-5);
    });

    expect(result.current.page).toBe(0);
  });
});
