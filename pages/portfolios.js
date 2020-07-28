import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
// import Link from "next/link";
import {Link} from '../routes'
class Portfolios extends React.Component {
  static async getInitialProps() {
    let posts = {};
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      posts = res.data;
    } catch (e) {
      console.log(e);
    }
    return { posts: posts.slice(0, 10) };
  }

  renderPosts(posts) {
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

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <h1 className="customClass">Portfolio เว้ย</h1>
        <ul>{this.renderPosts(posts)}</ul>
      </BaseLayout>
    );
  }
}

export default Portfolios;
