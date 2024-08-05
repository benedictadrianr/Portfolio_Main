import {
  FaGithub as GithubIcon,
  FaInstagram as InstagramIcon,
  FaLinkedin as LinkedInIcon,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-wrapper animate-in w-screen h-screen flex justify-center items-center flex-col gap-2">
      <h1 className="font-mono text-white">Here&apos;s my Contacts!</h1>
      <ul className="flex flex-row gap-2">
        <li>
          <a
            href="https://github.com/rianrich123"
            rel="noreferrer"
            target="_blank">
            <GithubIcon
              className="hover:text-[#00F7FF] transition-colors ease-in-out duration-200"
              size={50}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/benedictadrianr?igsh=bG9ua3NsNHE1MDFp"
            rel="noreferrer"
            target="_blank">
            <InstagramIcon
              className="hover:text-[#00F7FF] transition-colors ease-in-out duration-200"
              size={50}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/benedictadrianr/"
            rel="noreferrer"
            target="_blank">
            <LinkedInIcon
              className="hover:text-[#00F7FF] transition-colors ease-in-out duration-200"
              size={50}
            />
          </a>
        </li>
      </ul>
    </section>
  );
}
