import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Tables } from "../types/supabase";

export const getExpById = (id: number) => {
  const [exp, setExp] = useState<Tables<"Experience">>();

  const fetchExperience = async () => {
    const { error, data } = await supabase
      .from("Experience")
      .select()
      .eq("id", id)
      .single();

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
