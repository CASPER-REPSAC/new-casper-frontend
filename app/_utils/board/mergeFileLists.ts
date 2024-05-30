/**
 * 중복 file을 제거하여 합치기
 */
function mergeFileArray(orgFileArray: File[], newFileArray: File[]) {
  const filteredNewFileArray = newFileArray.filter(({ name: newFileName }) => {
    const orgNameArray = orgFileArray.map(
      ({ name: orgFileName }) => orgFileName,
    );
    return !orgNameArray.includes(newFileName);
  });

  return [...orgFileArray, ...filteredNewFileArray];
}

export default mergeFileArray;
