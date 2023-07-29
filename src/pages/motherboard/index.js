import ProductCard from "@/components/productCard/Card";

const MotherboardPage = ({data}) => {
  return (
    <div>
      <h1>MotherboardPage</h1>
      <ProductCard products={data?.data} />
    </div>
  );
};

export default MotherboardPage;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5001/motherboards");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};
