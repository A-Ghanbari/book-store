import Category from "../../../components/Category";
import { politicalBooks } from "../../../helper/filterBooks";

function Political({ political }) {
  return (
    <>
      <Category posts={political} />
    </>
  );
}
export default Political;

export async function getServerSideProps() {
  const political = await politicalBooks();
  return {
    props: { political },
  };
}
