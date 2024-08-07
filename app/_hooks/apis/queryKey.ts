export const boardQueryKey = {
  all: ['board'],
  details: () => [...boardQueryKey.all, 'detail'],
  detail: (id: number) => [...boardQueryKey.details(), id],
  lists: () => [...boardQueryKey.all, 'list'],
  list: (filter: object) => [...boardQueryKey.lists(), filter],
};

export const commentQueryKey = {
  all: ['comment'],
  lists: () => [...commentQueryKey.all, 'list'],
  list: (id: number) => [...commentQueryKey.lists(), id],
};

export const memberQueryKey = {
  all: ['member'],
  lists: () => [...memberQueryKey.all, 'list'],
  list: (filter: object) => [...memberQueryKey.lists(), filter],
  details: () => [...memberQueryKey.all, 'detail'],
  detail: (id: string) => [...memberQueryKey.details(), id],
};
