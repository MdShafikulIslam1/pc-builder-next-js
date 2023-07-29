import { Col, Rate, Row } from "antd";
import Image from "next/image";

const ProductDetailsPage = ({ product }) => {
  const {
    imageUrl,
    name,
    average_rating,
    status,
    price,
    key_features,
    individual_rating,
    description,
  } = product.data;
  const { Brand, Model, Voltage, Type, Port, Specification } = key_features;
  return (
    <Row className="my-10">
      <Col span={12} className="rounded-xl">
        <Image
          className="rounded-md"
          src={imageUrl}
          width="500"
          height="400"
          alt=""
        />
      </Col>
      <Col span={12} className="p-4">
        <div className="space-y-4">
          <h1 className="text-4xl text-center font-bold">{name}</h1>
          <h2 className="text-3xl font-semibold">{description}</h2>
          <div className="text-lg">
            Rating:
            <Rate disabled defaultValue={individual_rating} />
          </div>
          <div className="text-lg">
            Avg. Rating:
            <Rate disabled defaultValue={average_rating} />
          </div>
          <div className="flex gap-6">
            <p className="rounded-xl border p-2 bg-gray-200">
              Price: <span className="font-bold"> {price}</span>
            </p>
            <p className="rounded-xl border p-2 bg-gray-200">
              Status: <span className="font-bold"> {status}</span>
            </p>
          </div>
          <div className="text-xl">
            <h1 className="font-bold">Quick Overview</h1>
            <li>Brand: {Brand}</li>
            <li>Model: {Model}</li>
            <li>Type: {Type}</li>
            <li>Port: {Port}</li>
            <li>Specification: {Specification}</li>
            <li>Voltage: {Voltage}</li>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsPage;

export const getServerSideProps = async (context) => {
  const { productId } = context.params;
  const res = await fetch(`http://localhost:5001/products/${productId}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      product: data,
    },
  };
};
