import { Card, Col, Rate, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
const ProductCard = ({ products }) => {
  return (
    <Row gutter={[16, 24]} className="mb-8">
      {products?.map((product) => (
        <Col sm={24} md={8} lg={6} key={product.id}>
          <Link href={`/products/${product?._id}`}>
            <Card
              className="h-[450px] w-full p-3 overflow-hidden"
              hoverable
              cover={
                <Image
                  style={{
                    objectFit: "cover",
                  }}
                  className="p-2 rounded-lg"
                  src={product.imageUrl}
                  alt="Tech image"
                  width="273"
                  height="183"
                />
              }
            >
              <div className="space-y-2">
                <h1 className="font-bold text-xl text-center">
                  {product?.name}
                </h1>
                <div className="text-md">
                  Category:
                  <span className="text-md font-medium">
                    {product?.categories}
                  </span>
                </div>
                <div className="text-md">
                  Rating:
                  <Rate disabled defaultValue={product?.individual_rating} />
                </div>
                <div className="flex justify-between gap-2">
                  <p className="rounded-xl border px-2 py-1 bg-gray-200">
                    Price: <span className="font-bold"> {product?.price}</span>
                  </p>
                  <p className="rounded-xl border px-2 py-1 bg-gray-200">
                    Status:
                    <span className="font-bold"> {product?.status}</span>
                  </p>
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
