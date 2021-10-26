import { useSelector } from "react-redux";
import authentication from "../../store/actions/actions";
import { Table } from "antd";
import { AiFillCloseCircle } from "react-icons/ai";
import {useEffect, useState} from "react";

function Favorites() {
  const user = useSelector((state) => state.user);
  const bookMark = useSelector((state) => [...state.bookMark.values()]);
  const [flag, setFlag] = useState(false)
  const columns = [
    { title: "کتاب", dataIndex: "name", key: "book" },
    { title: "قیمت", dataIndex: "price", key: "price" },
    {
      title: "حذف",
      dataIndex: "",
      key: "x",
      render: (record) => (
        <a
          onClick={(e) => {
            authentication.dislike({ title: record.key });
            setFlag(!flag)
          }}
        >
          <AiFillCloseCircle style={{ fontSize: 25, color: "red" }} />
        </a>
      ),
    },
  ];

  const data = bookMark.map((book) => {
    return {
      key: book.title,
      name: book.title,
      price: book.price,
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
              <p style={{ margin: 0 }}>{record.description}</p>
            ),
            rowExpandable: (record) => record.name !== "Not Expandable",
          }}
          dataSource={data}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>ابتدا ورود کنید</h1>
      )}
    </>
  );
}

export default Favorites;
