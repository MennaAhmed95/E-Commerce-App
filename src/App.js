import React, { useState, useEffect } from "react";
import "./App.css";
import BoothSec from "./components/Booth Details";
import Navbar from "./components/Navbar";
import Breadcrambs from "./components/Breadcrumbs";
import Cards from "./components/Cards";
import BasicPagination from "./components/Pagination";
import Footer from "./components/Footer";
import axios from "axios";
function App() {
  const [products, setProducts] = useState([]);
  const [booth, setBooth] = useState({
    name: "",
    boothCategories: [],
    seller: {
      name: "",
    },
  });
  useEffect(async () => {
    await axios
      .get(
        "https://ebazarakapi.azurewebsites.net/api/Booth/GetBoothHome?BoothId=3"
      )
      .then((response) => {
        setBooth(response.data);
      });
  }, []);
  useEffect(async () => {
    await axios
      .get(
        "https://ebazarakapi.azurewebsites.net/api/Buyer/GetBoothProducts?BoothId=3&PageSize=10&PageIndex=1"
      )
      .then((response) => {
        setProducts(response.data.data);
      });
  }, []);
  const productsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndexOfProucts = currentPage * productsPerPage;
  const startIndexOfProducts = lastIndexOfProucts - productsPerPage;
  const currentProducts = products.slice(
    startIndexOfProducts,
    lastIndexOfProucts
  );

  const handleButtonPress = (e) => {
    let productCopy;
    if (e.target.innerHTML === "Clothes") {
      productCopy = products.filter((item) => item.categoryName === "Clothes");
    } else if (e.target.innerHTML === "Shoes") {
      productCopy = products.filter((item) => item.categoryName === "Shoes");
    } else {
      productCopy = [...products];
    }
    console.log(productCopy);
    setProducts(productCopy);
  };
  return (
    <div className="App">
      <Navbar />
      {booth && (
        <BoothSec
          boothNam={booth.name}
          sellerNam={booth.seller.name}
          boothCategories={booth.boothCategories}
          handleButtonPress={handleButtonPress}
        />
      )}
      <Breadcrambs />
      {products && <Cards products={currentProducts} name={booth.name} />}
      {productsPerPage < products.length && (
        <BasicPagination
          productsPerPage={productsPerPage}
          countProducts={products.length}
          setCurrentPage={setCurrentPage}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
