
export default function Post({ post }) {
  return (
    <article>
      <h1>{post.Title}</h1>
    </article>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/api/blogs`);
  const posts = await res.json();

  const paths = posts.data.map((post) => ({
    params: { slug: post.attributes.Slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`http://localhost:1337/api/blogs?filters[slug][$eq]=${slug}`);
  const data = await res.json();
  console.log(data)
  const post = data[0];

  return {
    props: { post },
  };
}


