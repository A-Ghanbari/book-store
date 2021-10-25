import {useSelector} from "react-redux";
import authentication from "../../store/actions/actions";
import {Table} from "antd";

function Favorites() {
    const user = useSelector(state => state.user)
    const bookMark = useSelector(state => [...state.bookMark.values()])


    const columns = [
        {title: 'Book', dataIndex: 'name', key: 'book'},
        {title: 'Price', dataIndex: 'price', key: 'price'},
        {
            title: 'Deleted',
            dataIndex: '',
            key: 'x',
            render: (record) => <a onClick={(e) => {
                authentication.dislike({title: record.key})
                e.target.parentElement.parentElement.remove()
            }}>Delete</a>,
        },
    ];

    const data = bookMark.map(book => {
        return {
            key: book.title,
            name: book.title,
            price: book.price,
            description: book.overview.content[0].content[0].value
        }
    })

    return (
        <>
            {user ? <Table
                columns={columns}
                expandable={{
                    expandedRowRender: record => <p style={{margin: 0}}>{record.description}</p>,
                    rowExpandable: record => record.name !== 'Not Expandable',
                }}
                dataSource={data}
            /> : (
                <h1 style={{textAlign: 'center'}}>ابتدا ورود کنید</h1>
            )}
        </>
    )
}

export default Favorites