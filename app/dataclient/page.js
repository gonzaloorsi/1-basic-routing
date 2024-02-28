"use client";
import { Card } from "@/components/card";
import { useState, useEffect } from "react";

export default function Data() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      data = await data.json();
      setProduct(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <Card />
      <h1>Data Page</h1>

      {product.map((item) => (
        <div className="border p-12">
          <Card key={item.id} title={item.title} body={item.body} />
        </div>
      ))}
    </div>
  );
}
