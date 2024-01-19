import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="text-white py-4 fixed bottom-0 w-full">
      <div className="flex items-center justify-center space-x-4">
        <a
          href="https://github.com/Abhijit20112003"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black hover:text-gray-400" // Set icon color to black
        >
          <AiFillGithub />
        </a>
        <a
          href="https://twitter.com/Abhijitroy_dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black hover:text-gray-400" // Set icon color to black
        >
          <AiOutlineTwitter />
        </a>
      </div>
      <p className="text-center text-white"></p>
    </footer>
  );
};

export default Footer;
