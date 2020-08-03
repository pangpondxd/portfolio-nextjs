import BaseLayout from "@/components/layouts/BaseLayout";
import axios from "axios";
import BasePage from '@/components/BasePage'
const Portfolio = ( { portfolio }) => {
    return (
      <BaseLayout>
      <BasePage>
        <h1>Portfolio Page</h1>
        <h1>{portfolio.title}</h1>
        <p>{portfolio.body}</p>
        <p>{portfolio.id}</p>
        </BasePage>
      </BaseLayout>
    );
  }
  Portfolio.getInitialProps = async ({query}) => {
    let post = {};
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
      post = res.data;
    } catch (e) {
      console.log(e);
    }
    return { portfolio: post };
  }
export default Portfolio;
