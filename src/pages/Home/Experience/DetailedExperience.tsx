import { useNavigate, useParams } from "react-router";
import Section from "../../../components/shared/Section";
import { useEffect, useState } from "react";
import { LuLoader2 as Loader } from "react-icons/lu";
import { Tables } from "../../../types/supabase";
import { supabase } from "../../../supabaseClient";
import Title from "../../../components/shared/Text/Title";
import Subtitle from "../../../components/shared/Text/Subtitle";
import Paragraph from "../../../components/shared/Text/Paragraph";
import { MdKeyboardArrowLeft as ArrowLeft } from "react-icons/md";

const DetailedExperience = () => {
  const [loading, setLoading] = useState(true);
  const [exp, setExp] = useState<Tables<"Experience">>();
  const { expId } = useParams();
  const navigate = useNavigate();

  const fetchExperience = async () => {
    const { error, data } = await supabase
      .from("Experience")
      .select()
      .eq("id", Number(expId))
      .single();

    if (error) {
      console.error(error.message);
      return;
    } else if (data) {
      setExp(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperience();
  }, [expId]);

  return (
    <Section className="!py-0 overflow-hidden">
      {loading ? (
        <div className="animate-spin text-primary w-[50px]">
          <Loader size={"max"} />
        </div>
      ) : exp ? (
        <div className="flex flex-col gap-8 py-24 relative">
          <div
            onClick={() => navigate("/Portfolio_Main/")}
            className="absolute top-4 left-4 flex items-center text-zinc-400 hover:text-white transition-all duration-300 ease-in-out cursor-pointer ">
            <ArrowLeft className="w-10 h-10" />
            Home
          </div>
          <div className="px-10 xl:px-40">
            <Subtitle>{exp.companyName}</Subtitle>
            <Title>{exp.jobDesc}</Title>
          </div>
          <div className="w-full flex justify-center items-center mb-10">
            <img
              src={exp.previewImg}
              className="w-full max-h-screen object-cover object-center"
            />
          </div>
          <div className="px-10 xl:px-40 flex flex-col gap-24">
            <div className="w-full flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <Title className="mb-5">Overview</Title>
                <Paragraph>{exp.overview}</Paragraph>
              </div>
              {exp.overviewImg && (
                <img
                  src={exp.overviewImg}
                  alt={`${exp.companyName} overview image`}
                  className="md:w-1/2 md:pl-6 object-cover object-center"
                />
              )}
            </div>
            <div className="w-full flex flex-col-reverse md:flex-row justify-end items-center gap-6">
              {exp.highlightImg && (
                <img
                  src={exp.highlightImg}
                  alt={`${exp.companyName} highlight image`}
                  className="md:w-1/2 md:pr-6 object-cover object-center"
                />
              )}
              <div className="md:w-1/2">
                <Title className="mb-5 md:text-end">Highlight</Title>
                <Paragraph className="md:text-end">{exp.highlight}</Paragraph>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <Title className="mb-5">What I Learned the Most</Title>
                <Paragraph>{exp.learnt}</Paragraph>
              </div>
              {exp.learntImg && (
                <img
                  src={exp.learntImg}
                  alt={`${exp.companyName} overview image`}
                  className="md:w-1/2 md:pl-6 object-cover object-center"
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>Data Unavailable</div>
      )}
    </Section>
  );
};

export default DetailedExperience;
