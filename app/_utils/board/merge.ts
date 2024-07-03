/**
 * 중복 file을 제거하여 합치기
 */
export function mergeFileArray(orgFileArray: File[], newFileArray: File[]) {
  const filteredNewFileArray = newFileArray.filter(({ name: newFileName }) => {
    const orgNameArray = orgFileArray.map(
      ({ name: orgFileName }) => orgFileName,
    );
    return !orgNameArray.includes(newFileName);
  });

  return [...orgFileArray, ...filteredNewFileArray];
}

export const mergeArraysByKey = <T>(
  array1: T[],
  array2: T[],
  keyFn: (item: T) => string,
): T[] => {
  const map = new Map<string, T>();

  array1.forEach((item) => {
    map.set(keyFn(item), item);
  });

  array2.forEach((item) => {
    map.set(keyFn(item), item);
  });

  return Array.from(map.values());
};
