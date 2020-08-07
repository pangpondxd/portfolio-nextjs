import axios from 'axios'

const handlePosts = (req, res) => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      posts = res.data;
    } catch (e) {
      console.log(e);
    }
    return { posts: posts.slice(0, 10) };
}

export default handlePosts