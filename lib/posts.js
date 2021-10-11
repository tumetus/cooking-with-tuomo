const posts = [
  {
    id: 1,
    title: "Smashed potatoes and meetballs",
    publishDate: "2021-09-05",
    author: "Tuomo Kankaanpää",
    coverImage: "/images/meetballs-cover.jpg",
    excerpt:
      "Today we will create smashed potatoes with some delicious meetballs",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis odio facilisis tellus porta ornare. Sed quis dui erat. Ut scelerisque diam ac nibh imperdiet sollicitudin. Ut sit amet ante a nulla aliquet aliquet sit amet in eros. Morbi ultricies imperdiet erat sit amet tincidunt. Nullam eget sollicitudin justo. Donec elementum diam id odio finibus, rhoncus aliquam ante consequat. Integer at blandit dui, non tempus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut purus eu nibh bibendum ultrices in nec nisl. Praesent blandit lorem nec tempus faucibus. Cras convallis nisl at faucibus condimentum. Vivamus massa ipsum, viverra vitae molestie quis, tincidunt id tortor. Suspendisse accumsan mollis sapien, vel egestas ante. Aenean non consequat eros. In fringilla commodo laoreet.",
    slug: "smashed-potatoes-and-meetballs",
  },
  {
    id: 2,
    title: "Tuna salad",
    publishDate: "2021-08-25",
    author: "Tuomo Kankaanpää",
    coverImage: "/images/tuna-salad-cover.jpg",
    excerpt: "Tuna salad is easy and fast to make plus it is delicious.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis odio facilisis tellus porta ornare. Sed quis dui erat. Ut scelerisque diam ac nibh imperdiet sollicitudin. Ut sit amet ante a nulla aliquet aliquet sit amet in eros. Morbi ultricies imperdiet erat sit amet tincidunt. Nullam eget sollicitudin justo. Donec elementum diam id odio finibus, rhoncus aliquam ante consequat. Integer at blandit dui, non tempus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut purus eu nibh bibendum ultrices in nec nisl. Praesent blandit lorem nec tempus faucibus. Cras convallis nisl at faucibus condimentum. Vivamus massa ipsum, viverra vitae molestie quis, tincidunt id tortor. Suspendisse accumsan mollis sapien, vel egestas ante. Aenean non consequat eros. In fringilla commodo laoreet.",
    slug: "tuna-salad",
  },
  {
    id: 3,
    title: "Chicken soup",
    publishDate: "2021-08-11",
    author: "Tuomo Kankaanpää",
    coverImage: "/images/chicken-soup-cover.jpg",
    excerpt:
      "Chicken soup is one of my favourite foods. It is easy and cheap to make.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis odio facilisis tellus porta ornare. Sed quis dui erat. Ut scelerisque diam ac nibh imperdiet sollicitudin. Ut sit amet ante a nulla aliquet aliquet sit amet in eros. Morbi ultricies imperdiet erat sit amet tincidunt. Nullam eget sollicitudin justo. Donec elementum diam id odio finibus, rhoncus aliquam ante consequat. Integer at blandit dui, non tempus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut purus eu nibh bibendum ultrices in nec nisl. Praesent blandit lorem nec tempus faucibus. Cras convallis nisl at faucibus condimentum. Vivamus massa ipsum, viverra vitae molestie quis, tincidunt id tortor. Suspendisse accumsan mollis sapien, vel egestas ante. Aenean non consequat eros. In fringilla commodo laoreet.",
    slug: "chicken-soup",
  },
];

export function getAllPosts() {
  return posts;
}

export function getAllSlugs() {
  let slugs = [];
  getAllPosts().map((p) => slugs.push(`/blog/${p.slug}`));
  return slugs;
}

export function getPostData(slug) {
  let post = null;
  getAllPosts().map((p) => {
    if (p.slug === slug) {
      post = p;
      return;
    }
  });
  return post;
}
