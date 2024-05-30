export default function createNumArr(length: number) {
  return Array.from({ length }, (_, val) => val + 1);
}
