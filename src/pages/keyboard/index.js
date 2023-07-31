import ProductCard from "@/components/productCard/Card";

const KeyboardPage = ({data}) => {
  return (
    <div>
      <h1>Key board page</h1>
      <ProductCard products={data?.data} />
    </div>
  );
};

export default KeyboardPage;
export const getStaticProps = async () => {
  const res = await fetch(`${process.env.URL}/keyboards`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
