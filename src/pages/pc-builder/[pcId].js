import React from "react";

const PcBuilderProduct = ({ data }) => {
  console.log("pc build dynamic page", data);
  return (
    <div>
      <h>This is pc builder product page.</h>
    </div>
  );
};

export default PcBuilderProduct;
export const getServerSideProps = async (context) => {
  const { pcId } = context.params;
  const res = await fetch(`http://localhost:5001/products/${pcId}`);
  const data = await res.json();
  return {
    props: {
      data: data?.data,
    },
  };
};
