import { useNavigate, useParams } from "react-router";
import Section from "../../../shared/components/Section";
import Title from "../../../shared/components/Text/Title";
import Subtitle from "../../../shared/components/Text/Subtitle";
import Paragraph from "../../../shared/components/Text/Paragraph";
import { MdKeyboardArrowLeft as ArrowLeft } from "react-icons/md";
import FadeIn from "../../../shared/components/FadeIn";
import { useEffect } from "react";
import { useData } from "../../../shared/provider";

const DetailedExperience = () => {
  const { singleExp, fetchSingleExp } = useData();
  const navigate = useNavigate();
  const { expId } = useParams();

  useEffect(() => {
    fetchSingleExp(expId);
  }, [expId]);

  return (
    <Section className="!py-0 overflow-hidden">
      {singleExp ? (
        <div className="flex flex-col items-center gap-8 py-24 relative w-full">
          <FadeIn
            onClick={() => navigate("/Portfolio_Main/")}
            className="absolute top-4 left-4 flex items-center text-zinc-400 hover:text-white transition-all duration-300 ease-in-out cursor-pointer ">
            <ArrowLeft className="w-10 h-10" />
            Home
          </FadeIn>
          <div className="px-10 xl:px-40 self-start">
            <FadeIn>
              <Subtitle>{singleExp.companyName}</Subtitle>
            </FadeIn>
            <FadeIn>
              <Title>{singleExp.jobDesc}</Title>
            </FadeIn>
          </div>
          <FadeIn className="w-full flex justify-center items-center mb-10">
            <img
              src={singleExp.previewImg}
              className="w-full max-h-screen object-cover object-center"
            />
          </FadeIn>
          <div className="flex flex-col gap-24 max-w-[900px] px-10">
            <div className="w-full flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <FadeIn>
                  <Title className="mb-5">Overview</Title>
                </FadeIn>
                <FadeIn>
                  <Paragraph>{singleExp.overview}</Paragraph>
                </FadeIn>
              </div>
              {singleExp.overviewImg && (
                <FadeIn className="md:w-1/2">
                  <img
                    src={singleExp.overviewImg}
                    alt={`${singleExp.companyName} overview image`}
                    className="md:pl-6 object-cover object-center"
                  />
                </FadeIn>
              )}
            </div>
            <div className="w-full flex flex-col-reverse md:flex-row justify-end items-center gap-6">
              {singleExp.highlightImg && (
                <FadeIn className="md:w-1/2">
                  <img
                    src={singleExp.highlightImg}
                    alt={`${singleExp.companyName} highlight image`}
                    className="md:pr-6 object-cover object-center"
                  />
                </FadeIn>
              )}
              <div className="w-full md:w-1/2">
                <FadeIn>
                  <Title className="mb-5">Highlight</Title>
                </FadeIn>
                <FadeIn>
                  <ul className="ml-5">
                    {singleExp.highlightPoint.map((point) => (
                      <li className="list-disc">
                        <Paragraph>{point}</Paragraph>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/2">
                <FadeIn>
                  <Title className="mb-5">What I Learned the Most</Title>
                </FadeIn>
                <FadeIn>
                  <ul className="ml-5">
                    {singleExp.learntPoint.map((point) => (
                      <li className="list-disc">
                        <Paragraph>{point}</Paragraph>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
              {singleExp.learntImg && (
                <FadeIn className="md:w-1/2">
                  <img
                    src={singleExp.learntImg}
                    alt={`${singleExp.companyName} overview image`}
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
