import {useSelector} from "react-redux";
import { Table } from 'antd';
import authentication from "../../store/actions/actions";

export default function Cart() {
  const cartBooks = useSelector(state => [...state.cart.values()])
  const bookMark = useSelector(state => [...state.bookMark.values()])

    const columns = [
        { title: 'Book', dataIndex: 'name', key: 'book' },
        { title: 'Price', dataIndex: 'price', key: 'price' },
        { title: 'Total', dataIndex: 'total', key: 'total' },
        {
            title: 'Deleted',
            dataIndex: '',
            key: 'x',
            render: (record) => <a onClick={(e) => {
                authentication.removeCart({title: record.key})
                e.target.parentElement.parentElement.remove()
            }}>Delete</a>,
        },
    ];
    const data = cartBooks.map(book => {
        return {
            key: book.title,
            name: book.title,
            price: book.price,
            total: book.price * book.count,
            description: book.overview.content[0].content[0].value
        }
    })
    return (
      <>
          <Table
              columns={columns}
              expandable={{
                  expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                  rowExpandable: record => record.name !== 'Not Expandable',
              }}
              dataSource={data}
          />
      </>
  );
}
