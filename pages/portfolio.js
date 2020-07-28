import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
class Portfolio extends React.Component {
  static async getInitialProps({query}) {
    let post = {};
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
      post = res.data;
    } catch (e) {
      console.log(e);
    }
    return { portfolio: post };
  }

  render() {
    const { portfolio } = this.props;
    return (
      <BaseLayout>
        <h1>Portfolio Page</h1>
        <h1>{portfolio.title}</h1>
        <p>{portfolio.body}</p>
        <p>{portfolio.id}</p>
      </BaseLayout>
    );
  }
}

export default Portfolio;
