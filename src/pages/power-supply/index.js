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
  const res = await fetch("http://localhost:5001/power-supply");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};