import Link from 'next/link'

function PostList({ posts }) {
    return (
        <>
        <h1>List of posts</h1>
        {posts &&
          posts.map((post) => {
            return(
                <div key={post.id}>
                    <Link href={'posts/${post.id}'} passHref>
                        <h2>
                            {post.id} {post.title}
                        </h2>
                    </Link>
                </div>
            )
        })}
        </>
    )
}
export default PostList

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
  
    return {
      props: { posts },
    };
  }

