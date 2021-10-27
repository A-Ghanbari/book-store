import {useSelector} from "react-redux";
import {Table, Rate} from "antd";
import authentication from "../../store/actions/actions";
import {AiFillCloseCircle} from "react-icons/ai";
import {useState} from "react";

export default function Cart() {
    const user = useSelector((state) => state.user);
    const cartBooks = useSelector((state) => [...state.cart.values()]);
    const rates = useSelector((state) => state.rate);
    const [flag, setFlag] = useState(false)
    const desc = ['ضعیف', 'متوسط', 'خوب', 'عالی'];
    const columns = [
        {title: "نام کتاب", dataIndex: "name", key: "book"},
        {title: "امتیاز", dataIndex: "score", key: "score"},
        {title: "قیمت", dataIndex: "price", key: "price"},
        {title: "تعداد", dataIndex: "number", key: "number"},
        {title: " جمع قیمت", dataIndex: "total", key: "total"},
        {
            title: "حذف",
            dataIndex: "",
            key: "x",
            render: (record) => (
                <a
                    onClick={(e) => {
                        authentication.removeCart({title: record.key});
                        setFlag(!flag)
                    }}
                >
                    <AiFillCloseCircle style={{fontSize: 25, color: "red"}}/>
                </a>
            ),
        },
    ];
    const data = cartBooks.map((book) => {
        return {
            key: book.title,
            name: book.title,
            score: <Rate style={{backgroundColor: '#36516a', borderRadius: '50%', border: "4px solid #36516a"}}
                         tooltips={desc} value={rates.get(book.title).rate}
                         count={4}/>,
            price: book.price,
            number: book.count,
            total: book.price * book.count,
            description: book.overview.content[0].content[0].value,
        };
    });

    return (
        <>
            {user ? (
                <Table
                    columns={columns}
                    expandable={{
                        expandedRowRender: (record) => (
                            <p style={{margin: 0}}>{record.description}</p>
                        ),
                        rowExpandable: (record) => record.name !== "Not Expandable",
                    }}
                    dataSource={data}
                />
            ) : (
                <h1 style={{textAlign: "center"}}>ابتدا ورود کنید</h1>
            )}
        </>
    );
}
