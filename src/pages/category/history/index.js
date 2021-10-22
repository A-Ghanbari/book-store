import {historyBooks} from "../../../helper/filterBooks";


function History({history}) {

    console.log(history)
    return (
        <>

        </>
    )
}

export default History

export async function getServerSideProps() {
    const history = await historyBooks()
    return {
        props: {history}
    }
}
