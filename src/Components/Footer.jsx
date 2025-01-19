import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "motion/react";
const Footer = () => {
  return (
    <footer className=" h-[100px] flex flex-col lg:flex-row items-center justify-between ">
      <div>
        {" "}
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
      <div className=" flex items-center justify-center gap-10 ">
        <motion.a
          initial={{
            scale: 1,
          }}
          whileHover={{
            scale: 1.3,
          }}
          href="mailto:sujithkarthikaiselvan@gmail.com"
        >
          {" "}
          <EmailIcon className="h-[40px] w-[40px] " />
        </motion.a>
        <motion.a
          initial={{
            scale: 1,
          }}
          whileHover={{
            scale: 1.3,
          }}
          href="https://www.linkedin.com/in/sujith-karthikaiselvan-182450208/"
        >
          {" "}
          <LinkedInIcon className="h-[40px] w-[40px] " />
        </motion.a>
        <motion.a
          initial={{
            scale: 1,
          }}
          whileHover={{
            scale: 1.3,
          }}
          href="whatsapp://send?text=Hello There!&phone=+918838295978"
        >
          {" "}
          <WhatsAppIcon className="h-[40px] w-[40px] " />
        </motion.a>
        <motion.a
          initial={{
            scale: 1,
          }}
          whileHover={{
            scale: 1.3,
          }}
          href="tel:8838295978"
        >
          {" "}
          <CallIcon className="h-[40px] w-[40px] " />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
