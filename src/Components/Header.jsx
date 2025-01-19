import AnchorLink from "react-anchor-link-smooth-scroll";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import InfoIcon from "@mui/icons-material/Info";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";

const Header = () => {
  return (
    <nav className=" flex items-center  justify-center md:h-[100px] h-[60px] p-4 bg-transparent z-50 bg-black bg-opacity-40 backdrop-blur-lg sticky top-0 ">
      <ul className=" flex items-center justify-center lg:gap-11 gap-10 text-xl font-bold">
        <li>
          <AnchorLink className=" hidden lg:flex" href="#about">
            About
          </AnchorLink>
          <AnchorLink className=" lg:hidden flex" href="#about">
            <InfoIcon />
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className=" hidden lg:flex" href="#skills">
            Skills
          </AnchorLink>
          <AnchorLink className=" lg:hidden flex" href="#skills">
            <DownhillSkiingIcon />
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className=" hidden lg:flex" href="#services">
            Service
          </AnchorLink>
          <AnchorLink className=" lg:hidden flex" href="#services">
            <DesignServicesIcon />
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className=" hidden lg:flex" href="#projects">
            Projects
          </AnchorLink>
          <AnchorLink className=" lg:hidden flex" href="#projects">
            <AccountTreeIcon />
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
