import React from "react";
import Nav_section from "./Nav_section";
import Ban from "./Ban";
import Explore from "./explore";
import Pr from "./Pr";
import Product from "./product_Com";
// const fadeInAnimation = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

const Home1 = () => {
  return (
    <article className="article">

      

      <Nav_section />
      <Explore/>
      <Ban />
      <Pr/>
    <Product/>
   
    </article>
  );
};

export default Home1;
