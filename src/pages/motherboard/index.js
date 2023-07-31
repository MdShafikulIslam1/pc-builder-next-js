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
  const res = await fetch(`${process.env.URL}/motherboards`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
