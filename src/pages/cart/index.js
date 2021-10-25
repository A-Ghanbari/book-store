import { useSelector } from "react-redux";

export default function Cart() {
  const cartBooks = useSelector((state) => state.cart);
  console.log(cartBooks);
  console.log(cartBooks.values());
  const cartBooksAarray = [...cartBooks.values()];
  console.log(cartBooksAarray);
  return (
    <>
      {cartBooksAarray.map((book) => (
        <div
          key={book.author}
        >{`${book.title} ${book.count} ====> ${book.price}$`}</div>
      ))}
    </>
  );
}
