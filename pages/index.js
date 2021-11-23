import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { request } from "../lib/datocms";
import { Image } from "react-datocms";

const HOMEPAGE_QUERY = `
query MyQuery {
  allArticles {
    title
    author {
      name
    }
    content {
      value
    }
    coverImage {
      responsiveImage {
        width
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        bgColor
        base64
        aspectRatio
        alt
      }
    }
    excerpt
    id
    publishDate
    slug
  }
}
`;

export async function getStaticProps(context) {
  const data = await request({
    query: HOMEPAGE_QUERY,
    preview: context.preview,
  });
  return {
    props: { data },
  };
}

export default function Home(props) {
  const { data } = props;
  const posts = data.allArticles;
  console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Cooking with Tuomo</title>
      </Head>
      <div>
        <h1>Cooking w/ Tuomo</h1>
      </div>
      <div>
        {posts.map((p) => (
          <BlogPostPreview key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}

const BlogPostPreview = (props) => {
  const { data } = props;
  return (
    <div style={{ maxWidth: "400px", marginBottom: "50px" }}>
      <Image data={data.coverImage.responsiveImage} />
      <h2>
        <Link href={`/blog/${data.slug}`}>
          <a>{data.title}</a>
        </Link>
      </h2>
      <div>{data.publishDate}</div>
      <p>{data.excerpt}</p>
      <div style={{ fontWeight: "bold" }}>{data.author.name}</div>
    </div>
  );
};
