import React from 'react'
import BaseLayout from '../../components/layouts/BaseLayout'
import {withRouter} from 'next/router'
class Portfolio extends React.Component {
    static async getInitialProps() {
        let posts = [];
        try {
          const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
          posts = res.data;
        } catch (e) {
          console.log(e);
        }
        return { posts: posts.slice(0, 10) };
      }
    

    render() {
        return (
            <BaseLayout>
                <h1>Portfolio Page</h1>
        <h2>{this.props.router.query.id}</h2>
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio)