export interface Pagination<T> {
  currentPage: number;
  items: T[];
  totalItems: number;
  totalPages: number;
}
