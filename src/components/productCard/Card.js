import { Card, Col, Rate, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const ProductCard = ({ products }) => {
  return (
    <Row gutter={[16, 24]} className="mb-8">
      {products?.map((product) => (
        <Col sm={24} md={8} lg={6} key={product.id}>
          <Link href={`/products/${product?.id}`}>
            <Card
              className="h-[400px] w-[260px] p-3 overflow-hidden"
              hoverable
              cover={
                <Image
                className="w-full"
                  loading="lazy"
                  src={product.imageUrl}
                  alt="Tech image"
                  width={260}
                  height={200}
                />
              }
            >
              <div>
                <h1 className="font-bold text-xl text-center">
                  {product?.name}
                </h1>
                <Rate disabled defaultValue={product?.individual_rating} />
                <div className="flex justify-around text-xl font-medium mt-3">
                  <p>{product?.price}</p>
                  <p>{product?.status}</p>
                </div>
              </div>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default ProductCard;
