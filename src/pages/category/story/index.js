import {storyBooks} from "../../../helper/filterBooks";

function Story({story}) {
    console.log(story)
    return (
        <>

        </>
    )
}
export default Story

export async function getServerSideProps() {
    const story = await storyBooks()
    return {
        props: {story}
    }
}
