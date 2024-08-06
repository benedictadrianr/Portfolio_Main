import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Tables } from "../types/supabase";

export const getExperience = () => {
  const [exp, setExp] = useState<Tables<"Experience">[]>([]);

  const fetchExperience = async () => {
    const { error, data } = await supabase
      .from("Experience")
      .select()
      .order("timeStart", { ascending: false });

    if (error) {
      console.error(error.message);
      return;
    } else if (data) {
      setExp(data);
    }
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  return exp;
};
