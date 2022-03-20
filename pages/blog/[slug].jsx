import { Image, StructuredText, useQuerySubscription } from "react-datocms";
import Link from "next/link";
import styles from "../../styles/BlogPost.module.css";
import { request } from "../../lib/datocms";

export default function BlogPost(props) {
  // const { postData } = props;
  const { data, error, status } = useQuerySubscription(props.subscription);
  const postData = data.article;

  return (
    <div className={styles.container}>
      <div style={{ maxWidth: "600px", marginTop: "20px" }}>
        <Image data={postData.coverImage.responsiveImage} />
        <h1>{postData.title}</h1>
        <p>
          {postData.author.name} / {postData.publishDate}
        </p>
        <StructuredText
          data={postData.content}
          renderBlock={({ record }) => {
            switch (record.__typename) {
              case "ImageRecord":
                return <Image data={record.image.responsiveImage} />;
              default:
                return null;
            }
          }}
        />
        <div style={{ marginTop: "50px" }}>
          <Link href="/">
            <a>⬅️&nbsp;&nbsp;Back to the frontpage</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

const PATHS_QUERY = `
query MyQuery {
  allArticles {
    slug
  }
}
`;
export const getStaticPaths = async (context) => {
  const slugQuery = await request({
    query: PATHS_QUERY,
    preview: context.preview,
  });

  let paths = [];
  slugQuery.allArticles.map((p) => paths.push(`/blog/${p.slug}`));

  return {
    paths,
    fallback: "blocking",
  };
};

const ARTICLE_QUERY = `
query MyQuery($slug: String) {
  article(filter: {slug: {eq: $slug}}) {
    author {
      name
    }
    content {
      value
      blocks {
        __typename
        ... on ImageRecord {
          id
          image { 
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
        }
      }
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
    id
    publishDate
    slug
    title
  }
}
`;
export const getStaticProps = async ({ params, preview }) => {
  const graphqlRequest = {
    query: ARTICLE_QUERY,
    variables: { slug: params.slug },
    // If true, the Content Delivery API with draft content will be used
    preview,
  };
  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
    revalidate: 120,
  };
};
