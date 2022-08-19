import Link from "next/link";

export default function Home({ posts }) {
    return (
      <div className="body">    
        {posts && posts.data.map((post) => (
            <div key={post.attributes.id}>
              <p>{post.attributes.updatedAt}</p>
              <Link href={`${post.attributes.Slug}`}>
              <a>{post.attributes.Title}</a>
            </Link>
              <p>{post.attributes.Body}</p>
              <p>{post.attributes.Intro}</p>

            </div>
          ))}
      </div>
    );
  }
  
  export async function getStaticProps() {
    const res = await fetch("http://localhost:1337/api/blogs");
    const posts = await res.json();
  
    return {
      props: { posts },
    };
  }