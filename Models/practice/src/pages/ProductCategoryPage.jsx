import React, { useEffect, useState } from "react";
import Category from "../components/Category.jsx";
import { supabaseConfig } from "../server/config/db.config";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabase = createClient(supabaseConfig.url, supabaseConfig.key);

export default function ProductCategoryPage() {
  const [categoryData, setCategoryData] = useState([]);
  const navigate = useNavigate();

  const handleCategoryClick = (id) => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data: categoryData, error } = await supabase
      .from("Category")
      .select("*")
      .then((response) => response);

    if (error) {
      console.error("Error fetching data: ", error);
      return;
    }

    setCategoryData(categoryData);
  }
  return (
    <div>
      <h1>Products Category Page</h1>
      <Category categories={categoryData} onClick={handleCategoryClick} />
    </div>
  );
}
