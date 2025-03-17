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
import FadeIn from "../../../components/shared/FadeIn";

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
          <FadeIn
            onClick={() => navigate("/Portfolio_Main/")}
            className="absolute top-4 left-4 flex items-center text-zinc-400 hover:text-white transition-all duration-300 ease-in-out cursor-pointer ">
            <ArrowLeft className="w-10 h-10" />
            Home
          </FadeIn>
          <div className="px-10 xl:px-40">
            <FadeIn>
              <Subtitle>{exp.companyName}</Subtitle>
            </FadeIn>
            <FadeIn>
              <Title>{exp.jobDesc}</Title>
            </FadeIn>
          </div>
          <FadeIn className="w-full flex justify-center items-center mb-10">
            <img
              src={exp.previewImg}
              className="w-full max-h-screen object-cover object-center"
            />
          </FadeIn>
          <div className="px-10 xl:px-40 flex flex-col gap-24">
            <div className="w-full flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <FadeIn>
                  <Title className="mb-5">Overview</Title>
                </FadeIn>
                <FadeIn>
                  <Paragraph>{exp.overview}</Paragraph>
                </FadeIn>
              </div>
              {exp.overviewImg && (
                <FadeIn className="md:w-1/2">
                  <img
                    src={exp.overviewImg}
                    alt={`${exp.companyName} overview image`}
                    className="md:pl-6 object-cover object-center"
                  />
                </FadeIn>
              )}
            </div>
            <div className="w-full flex flex-col-reverse md:flex-row justify-end items-center gap-6">
              {exp.highlightImg && (
                <FadeIn className="md:w-1/2">
                  <img
                    src={exp.highlightImg}
                    alt={`${exp.companyName} highlight image`}
                    className="md:pr-6 object-cover object-center"
                  />
                </FadeIn>
              )}
              <div className="md:w-1/2">
                <FadeIn>
                  <Title className="mb-5">Highlight</Title>
                </FadeIn>
                <FadeIn>
                  <ul className="ml-5">
                    {exp.highlight_point.map((point) => (
                      <li className="list-disc">
                        <Paragraph>{point}</Paragraph>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <FadeIn>
                  <Title className="mb-5">What I Learned the Most</Title>
                </FadeIn>
                <FadeIn>
                  <ul className="ml-5">
                    {exp.learnt_points.map((point) => (
                      <li className="list-disc">
                        <Paragraph>{point}</Paragraph>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
              {exp.learntImg && (
                <FadeIn className="md:w-1/2">
                  <img
                    src={exp.learntImg}
                    alt={`${exp.companyName} overview image`}
                    className="md:pl-6 object-cover object-center"
                  />
                </FadeIn>
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
