import { VscGithubAlt } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="bg-background h-[10rem] text-white w-full  flex flex-col items-center justify-center gap-8 py-11 px-4">
      <p>
        Built by{" "}
        <a href="https://github.com/Archil-Milorava" target="blank">
          Archil Milorava
        </a>
      </p>

      <a href="https://github.com/Archil-Milorava/real-estate" target="blank">
        <VscGithubAlt className="text-black" size={20} />
      </a>
    </div>
  );
};

export default Footer;
