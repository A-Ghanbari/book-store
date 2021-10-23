import Category from "../../../components/Category";
import { historyBooks } from "../../../helper/filterBooks";

function History({ history }) {
  console.log(history);
  return (
    <>
      <Category posts={history} />
    </>
  );
}

export default History;

export async function getServerSideProps() {
  const history = await historyBooks();
  return {
    props: { history },
  };
}
