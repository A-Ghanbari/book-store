import {fetchEntry} from "../../../helper/contentfull";

function Book({book}) {
    return (
        <>

        </>
    )
}
export default Book

export async function getServerSideProps() {
    const { fields: book } = await fetchEntry('5QQ4DSGWIqwX7wB4t57Z0D');
    return {
        props: { book },
    };
}