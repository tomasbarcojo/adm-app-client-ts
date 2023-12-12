/* eslint-disable @typescript-eslint/prefer-optional-chain */
import React, { useEffect, useState } from 'react';
import axiosInstance from 'utils/axios';

const ListTest = () => {
  const [products, setProducts] = useState<any>([]);

  const getProducts = async () => {
    const res = await axiosInstance.get('/product');
    return res.data.data;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchData();
    console.log('i fire once');
  }, []);

  return (
    <div>
      <h1>ListTest</h1>
      <ul>
        {products.length > 0 &&
          products.map((product) => {
            return <li key={product.name}>{product.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default ListTest;
