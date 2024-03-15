import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabaseConfig } from "../server/config/db.config";
import { createClient } from "@supabase/supabase-js";
import ProductDetail from "../components/ProductDetail";

const supabase = createClient(supabaseConfig.url, supabaseConfig.key);

export default function ProductDetailsPage() {
  const { id } = useParams();

  const [productDetailData, setProductDetailData] = useState([]);

  useEffect(() => {
    getData();
  }, [id]);

  async function getData() {
    try {
      const { data: productDetailData, error } = await supabase
        .from("Products")
        .select("*")
        .eq("productLine", id)

      if (error) {
        console.error("Error fetching data: ", error);
        return;
      }
      setProductDetailData(productDetailData);
      /*const product = productDetailData.find(
        (product) => product.CategoryProductID === parseInt(id)
      );

      if (product) {
        
      } else {
        console.error("Product not found for id: ", id);
      }*/
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  return (
    <div>
      <h1>Product Detailed Page {id} </h1>
      {<ProductDetail products={productDetailData}/>}
    </div>
  );
}
