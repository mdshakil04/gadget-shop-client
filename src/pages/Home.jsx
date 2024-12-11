
import Banner from "../components/home/Banner";
import FeaturedProducts from "../components/home/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-12">
        <h1 className=" mb-12 text-3xl font-semibold text-center">Featured Products</h1>
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default Home;
