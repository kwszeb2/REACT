import React, { useEffect, useState } from "react";
import ContactOffice from "../components/ContactOfffice.jsx";
import { supabaseConfig } from "../server/config/db.config";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(supabaseConfig.url, supabaseConfig.key);

export default function ContactPage() {
  const [contactOfficeListData, setContactOfficeListData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const officeListPromise = supabase
      .from("Offices")
      .select("*")
      .then(({ data }) => setContactOfficeListData(data));

    await Promise.all([officeListPromise]);
  }

  return (
    <div>
      <ContactOffice contactList={contactOfficeListData} />
    </div>
  );
}