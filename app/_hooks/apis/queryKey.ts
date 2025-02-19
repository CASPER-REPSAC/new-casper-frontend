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

export const assignmentQueryKey = {
  all: ['assignment'],
  details: () => [...assignmentQueryKey.all, 'detail'],
  detail: (id: number) => [...assignmentQueryKey.details(), id],
  lists: () => [...assignmentQueryKey.all, 'list'],
  list: (id: number) => [...assignmentQueryKey.lists(), id],
};

export const submitQueryKey = {
  all: ['submit'],
  details: () => [...submitQueryKey.all, 'detail'],
  detail: ({
    assignmentId,
    submitId,
  }: {
    assignmentId: number;
    submitId: number;
  }) => [...submitQueryKey.details(), assignmentId, submitId],
  lists: () => [...submitQueryKey.all, 'list'],
  list: ({
    assignmentId,
    submitId,
  }: {
    assignmentId: number;
    submitId: number;
  }) => [...submitQueryKey.lists(), assignmentId, submitId],
};
