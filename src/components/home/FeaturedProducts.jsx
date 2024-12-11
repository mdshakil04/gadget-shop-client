import ProductsCard from "./ProductsCard";

const FeaturedProducts = () => {
  return (
    <div className=" grid lg:grid-cols-4 container mx-auto justify-between gap-4">
      <ProductsCard/>
      <ProductsCard/>
      <ProductsCard/>
      <ProductsCard/>
    </div>
  );
};

export default FeaturedProducts;
