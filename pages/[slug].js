export default function Post ({ post }){
    return <div> {post.Title}</div>;
}

export async function getStaticPaths (){
    const res = await fetch ("http://localhost:1337/api/blogs");
    const posts = await res.json();

    const paths = posts.data.map(( posts)=> ({
        params :{slug: posts.attributes.Slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params}){
    const { slug } = params;
    const res = await fetch ('http://localhost:1337/api/blogs?filters[slug]=${slug}');

    const data = await res.json();
    const post = data[0];

    return {
        props: { post },
    }
}



