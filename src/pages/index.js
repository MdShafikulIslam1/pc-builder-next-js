import ProductCard from "@/components/productCard/Card";
import { useSession } from "next-auth/react";
import Head from "next/head";

export default function Home({data}) {
  const {data:session} = useSession()
  console.log("logged in user",session)
  return (
    <div>
      <Head>
        <title>PC Builder</title>
      </Head>
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold mb-2 tracking-wide">
          Featured Products
        </h1>
        <p className="font-medium text-base">
          Check and Select your need Products !
        </p>
      </div>
      <ProductCard products={data?.data}  />
    </div>
  );
}

// Home.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5001/products");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
