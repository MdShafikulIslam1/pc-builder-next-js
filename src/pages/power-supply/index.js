import ProductCard from "@/components/productCard/Card";

const PowerSupplyPage = ({data}) => {
  return (
    <div>
      <h1>This is Power supply</h1>
      <ProductCard products={data?.data}/>
    </div>
  )
}

export default PowerSupplyPage

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.URL}/power-supply`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};