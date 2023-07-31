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
    const res = await fetch(`${process.env.URL}/mouses`);
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  };