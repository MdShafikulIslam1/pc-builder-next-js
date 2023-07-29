import ProductCard from "@/components/productCard/Card";

const StorageDevicePage = ({data}) => {
  return (
    <div>
      <h1>This is storages page</h1>
      <ProductCard products={data?.data}/>
    </div>
  )
}

export default StorageDevicePage

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5001/storages");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};