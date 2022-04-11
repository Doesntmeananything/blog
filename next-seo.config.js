const title = "Doesn't Mean Anything";
const description = "Welcome to my thoughts, ideas, and work.";

const SEO = {
  titleTemplate: `%s - ${title}`,
  title,
  description,
  canonical: "https://doesntmeananything.com/",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://doesntmeananything.com/",
    title,
    description,
    images: [
      {
        url: "https://pbs.twimg.com/profile_banners/1211220473725407232/1578950445/1500x500",
        alt: title,
        width: 1500,
        height: 500,
      },
    ],
  },
  twitter: {
    handle: "@andrey_krasnoff",
    site: "@andrey_krasnoff",
    cardType: "summary_large_image",
  },
};

export default SEO;
