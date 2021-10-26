import Category from "../../../components/Category";
import { storyBooks } from "../../../helper/filterBooks";

function Story({ story }) {
  return (
    <>
      <Category posts={story} />
    </>
  );
}
export default Story;

export async function getServerSideProps() {
  const story = await storyBooks();
  return {
    props: { story },
  };
}
