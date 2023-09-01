import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { RiCellphoneFill } from 'react-icons/ri';

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin size={38} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub size={38} />
      </a>
      <div
        className="flex justify-center items-center gap-1 hover:opacity-50 transition duration-500"
      >
        <RiCellphoneFill size={38} />
        <span>+34 717714423</span>
      </div>

      {/*
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a> */}
    </div>
  );
};

export default SocialMediaIcons;
