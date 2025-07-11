import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { FaX } from "react-icons/fa6";

const links = [

  { href: 'https://x.com/Ansh_Gajbhiye_', icon: <FaX /> },
  { href: 'https://github.com/Ansh-gajbhiye', icon: <FaGithub /> },


]

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ¬©Ansh 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};


export default Footer