import SinglePage from "../../components/SinglePage";
import { fetchEntry } from "../../helper/contentfull";

function Book({ book }) {
  return (
    <>
      <SinglePage post={book} />
    </>
  );
}
export default Book;

export async function getServerSideProps({ params }) {
  const { bookId } = params;
  const { fields: book } = await fetchEntry(bookId);
  return {
    props: { book },
  };
}
