import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/still-life-casual-man-modern-male-accessories-black_155003-1726.jpg?t=st=1733935275~exp=1733938875~hmac=47fa7a552bbd0993f8df8f95d51cf6afb2a42fbbedcd01872b04a26692b5b31f&w=740)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome our Gadget world!</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-outline text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
