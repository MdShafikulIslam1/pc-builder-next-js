import ProductCard from "@/components/productCard/Card";
import React from "react";

const MonitorPage = ({ data }) => {
  // console.log(data)
  return (
    <div>
      <h1>Monitors</h1>
      <ProductCard products={data?.data} />
    </div>
  );
};

export default MonitorPage;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5001/monitors");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};
