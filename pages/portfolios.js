import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
import BasePage from '../components/BasePage'
// import Link from "next/link";
import {Link} from '../routes'
import Portfolio from "./portfolio";
const Portfolios= ({posts}) =>  {
  Portfolios.getInitialProps = async () => {
    let posts = [];
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      posts = res.data;
    } catch (e) {
      console.log(e);
    }
    return { posts: posts.slice(0, 10) };
  }

  const renderPosts = (posts) => {
    return posts.map((p) => (
      <li key={p.id} style={{ fontSize: "20px"}}>
        <Link route={`/portfolios/${p.id}`}>
          <a style={{color: "black"}}>
            {p.id} : {p.title}
          </a>
        </Link>
      </li>
    ));
  }

    return (
      <BaseLayout>
        <BasePage>
        <h1 className="customClass">Portfolio เว้ย</h1>
        <ul>{renderPosts(posts)}</ul>
        </BasePage>
      </BaseLayout>
    );
}

export default Portfolios;
