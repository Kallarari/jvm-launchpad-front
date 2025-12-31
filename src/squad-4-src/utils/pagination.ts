export const paginate = <T>(items: T[], page: number, perPage: number): T[] => {
  const start = (page - 1) * perPage;
  return items.slice(start, start + perPage);
};

export const getTotalPages = (totalItems: number, perPage: number): number =>
  Math.max(1, Math.ceil(totalItems / perPage));
