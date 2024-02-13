import React, { useEffect, useState } from "react";
import "./style.css";

const LoadMoreData = ({ url }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  async function fetchProducts(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(
        `${getUrl}?limit=20&skip=${count === 0 ? 0 : count * 20}`
      );
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      setErrMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchProducts(url);
  }, [count]);

  //   console.log(products);

  useEffect(() => {
    if (products && products.length === 100) setDisable(true);
  }, [products]);

  if (loading) {
    return <div>Loading... Please wait!</div>;
  }

  if (errMsg !== null) {
    return <div>Error occured! {errMsg}</div>;
  }

  return (
    <>
      <div className="product-container">
        {products && products.length
          ? products.map((items, index) => (
              <div key={index} className="product">
                <img
                  src={items.thumbnail}
                  alt={items.title}
                  className="image"
                />
                <p className="title">{items.title}</p>
                <span>Price: ${items.price}</span>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        {disable && (
          <p>You have to reached 100 products!</p>
        )}
          <button className="Load-button" disabled={disable} onClick={() => setCount(count + 1)}>
            Load More
          </button>
      </div>
    </>
  );
};

export default LoadMoreData;
