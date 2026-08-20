import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/Ivan-Malakhovskyi/react_router_navigation",
});

async function fetchWithErrorHandling(url = "", config = {}) {
  try {
    return (await axiosInstance.get(url, config)).data;
  } catch (error) {
    console.log(error);
  }
}

export function fetchAuthors(controller) {
  return fetchWithErrorHandling(`/authors`, {
    signal: controller?.current?.signal,
  });
}

export function fetchAuthorById(id, controller) {
  return fetchWithErrorHandling(`/authors/${id}`, {
    signal: controller?.current?.signal,
  });
}

export function fetchBooks(controller) {
  return fetchWithErrorHandling(`/books`, {
    signal: controller?.current?.signal,
  });
}

export function fetchBookById(bookId, controller) {
  return fetchWithErrorHandling(`/books/${bookId}`, {
    signal: controller?.current?.signal,
  });
}
