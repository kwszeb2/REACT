import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList.jsx";
import { supabaseConfig } from "../server/config/db.config";
import { createClient } from "@supabase/supabase-js";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";

const supabase = createClient(supabaseConfig.url, supabaseConfig.key);

export default function ProductListPage() {
  const { id } = useParams();
  const [productListData, setProductListData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const { data: productListData, error } = await supabase
        .from("Products")
        .select("*")
        .eq("productLine", id)
        .then((response) => response);

      if (error) {
        console.error("Error fetching data: ", error);
        return;
      }

      setProductListData(productListData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  return (
    <div>
      <Box m={3}>
        <h1>{id}</h1>
      </Box>
      <ProductList products={productListData} />
    </div>
  );
}