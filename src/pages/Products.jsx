import React, { useEffect, useRef } from 'react';
import { Footer, Navbar, Product } from "../components";

const Products = () => {
  const componentMounted = useRef(true);

  useEffect(() => {
    return () => {
      componentMounted.current = false;
    };
  }, []);

  return (
    <>
      <Navbar />
      <Product />
      <Footer />
    </>
  );
};

export default Products;