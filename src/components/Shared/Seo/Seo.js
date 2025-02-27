import Head from "next/head";

export function Seo(props) {
  const {
    title = "Gaming - Tus juegos favoritos",
    description = "Tus juegos favoritos para Steam, PlayStation, Xbox, Switch al mejor precio.",
  } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* <link rel="icon" href="/favicon.ico" /> */}
      {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      {/* <meta name="theme-color" content="#000000" /> */}
      {/* <meta name="og:title" content={title} /> */}
      {/* <meta name="og:description" content={description} /> */}
      {/* <meta property="og:type" content="website" /> */}
      {/* <meta property="og:url" content={url} /> */}
      {/* <meta property="og:image" content={image} /> */}
    </Head>
  );
}
