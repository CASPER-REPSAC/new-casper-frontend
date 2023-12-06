'use client';

/* eslint-disable jsx-a11y/control-has-associated-label */
import { Skeleton } from 'app/_components/common';
import createNumArr from 'app/_utils/createNumArr';

function BoardBodySkeleton() {
  const numOfRows = 10;
  return (
    <table className="w-full table-fixed text-base">
      <thead
        className="
      h-10 
      border-b border-solid border-slate-300 
      bg-slate-100 
      font-bold leading-10 
      dark:border-gray-600 
      dark:bg-slate-800
      "
      >
        <tr className="text-center">
          <td className="w-[7%]">번호</td>
          <td className="w-[35%]">제목</td>
          <td className="w-[10%]">작성자</td>
          <td className="w-[15%]">날짜</td>
          <td className="w-[10%]">조회수</td>
        </tr>
      </thead>

      <tbody>
        {createNumArr(numOfRows).map((val) => (
          <tr
            className="h-10 cursor-pointer 
            border-b border-solid border-slate-200 
            text-center 
            dark:border-slate-700 
            "
            key={val}
          >
            <td className="align-middle" align="center">
              <Skeleton className="h-4 w-2/3 rounded" />
            </td>
            <td className="align-middle" align="left">
              <Skeleton className="h-4 w-2/3 rounded" />
            </td>
            <td className="align-middle" align="center">
              <Skeleton className="h-4 w-2/3 rounded" />
            </td>
            <td className="align-middle" align="center">
              <Skeleton className="h-4 w-2/3 rounded" />
            </td>
            <td className="align-middle" align="center">
              <Skeleton className="h-4 w-2/3 rounded" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BoardBodySkeleton;
