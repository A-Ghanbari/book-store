import { fetchEntries } from "./contentfull";

export async function politicalBooks() {
  const { items: books } = await fetchEntries("book");
  const political = books.filter((book) => {
    return book.fields.category.fields.cat === "political";
  });
  return political;
}

export async function historyBooks() {
  const { items: books } = await fetchEntries("book");
  const history = books.filter((book) => {
    return book.fields.category.fields.cat === "history";
  });
  return history;
}

export async function storyBooks() {
  const { items: books } = await fetchEntries("book");
  const story = books.filter((book) => {
    return book.fields.category.fields.cat === "story";
  });
  return story;
}
