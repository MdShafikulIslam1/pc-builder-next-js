import ProductCard from '@/components/productCard/Card';
import React from 'react'

const MousePage = ({data}) => {
  return (
    <div>
      <h1>This is Mouses page.</h1>
      <ProductCard products={data?.data}/>
    </div>
  )
}

export default MousePage
export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5001/mouses");
    const data = await res.json();
    console.log(data);
    return {
      props: {
        data,
      },
    };
  };