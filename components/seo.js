import Head from "next/head";

export default function Seo({ title }) {
  const message = `${title} | Next Movies`;
  return (
    <Head>
      <title>{message}</title>
    </Head>
  )
}