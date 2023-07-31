import ProductCard from "@/components/productCard/Card";
import React from "react";

const MonitorPage = ({ data }) => {
  return (
    <div>
      <h1>Monitors</h1>
      <ProductCard products={data?.data} />
    </div>
  );
};

export default MonitorPage;

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.URL}/monitors`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
