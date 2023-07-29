import ProductCard from '@/components/productCard/Card';
import React from 'react';

const ProcessorPage = ({data}) => {
    return (
        <div>
           <h1>This is ProcessorPage</h1> 
           <ProductCard products={data?.data}/>
        </div>
    );
};

export default ProcessorPage;
export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5001/processors");
    const data = await res.json();
    console.log(data);
    return {
      props: {
        data,
      },
    };
  };