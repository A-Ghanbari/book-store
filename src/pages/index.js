import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { fetchEntries } from "../helper/contentfull";

export default function Home({ items }) {
  console.log(items);
  return (
    <div className={styles.container}>
      <Head>
        <title>کتاب فروشی |صفحه اصلی</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          {items.map(book => <div>{book.fields.title}</div>)}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { items } = await fetchEntries("book");
  return {
    props: { items },
  };
}
