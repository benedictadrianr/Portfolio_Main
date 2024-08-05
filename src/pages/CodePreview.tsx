import { CodeBeams } from "../components/CodeBeams";

const CodePreview = () => {
  return (
    <div>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="text-xl font-mono">
          Here is some of my self made reusable components
        </div>
      </div>
      <CodeBeams />
    </div>
  );
};

export default CodePreview;
