import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import { useGetPosts } from "@/actions";

const Portfolios = () => {
  const { posts, error, loading } = useGetPosts();

  const renderPosts = (posts) => {
    return posts.map((p) => (
      <li key={p.id} style={{ fontSize: "20px" }}>
        <Link as={`/portfolios/${p.id}`} href="/portfolios/[id]">
          <a style={{color: 'black'}}>
            {p.id} : {p.title}
          </a>
        </Link>
      </li>
    ));
  };

  return (
    <BaseLayout>
      <BasePage>
        <h1 className="customClass">Portfolio เว้ย</h1>
        { loading &&
         <div class="loader">Loading...</div>
        }
        { posts &&
          <ul>
            {renderPosts(posts)}
          </ul>
        }
        { error && 
          <div className="alert alert-danger">{error.message}</div>
          // <h1>Hello</h1>
        }
      </BasePage>
    </BaseLayout>
  );
};
export default Portfolios;
