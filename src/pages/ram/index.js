import ProductCard from "@/components/productCard/Card";

const RAMPage = ({data}) => {
  return (
    <div>
      <h1>This is Rampage</h1>
      <ProductCard products={data?.data}/>
    </div>
  )
}

export default RAMPage
export const getStaticProps = async () => {
  const res = await fetch(`${process.env.URL}/rams`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};