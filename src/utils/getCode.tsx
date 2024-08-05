import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Tables } from "../types/supabase";

export const getCodes = () => {
  const [codes, setCodes] = useState<Tables<"code">[]>([]);

  const fetchCode = async () => {
    const { error, data } = await supabase.from("code").select();
    if (error) {
      console.error(error.message);
      return;
    } else if (data) {
      setCodes(data);
    }
  };

  useEffect(() => {
    fetchCode();
  }, []);

  return codes;
};
