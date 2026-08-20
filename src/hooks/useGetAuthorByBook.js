import { useEffect } from "react";

export const useGetAuthorByBook = (authors, authorId) => {
  if (!authors || !authorId) return;

  return authors?.find(({ id }) => id === authorId);
};
