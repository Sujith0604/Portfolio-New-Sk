import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "motion/react";

const Herosection = () => {
  return (
    <div
      id="hero"
      className=" shadow-lg lg:rounded-[100px] rounded-3xl lg:h-[600px] flex flex-col gap-11 p-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100  "
    >
      <motion.h1 className=" lg:text-8xl text-5xl font-bold  text-start lg:text-center  ">
        WEB DEVELOPER
      </motion.h1>

      <div className=" grid lg:grid-cols-3 gap-4">
        <div className=" flex lg:items-start  gap-2  flex-col ">
          <h1 className=" lg:text-4xl text-3xl  ">
            Hey, I'm {""} <br />
          </h1>
          <motion.h1
            initial={{
              scale: 1,
            }}
            whileHover={{
              scale: 1.1,
            }}
            className=" text-4xl lg:text-3xl font-bold"
          >
            {" "}
            Sujith Karthikaiselvan
          </motion.h1>
          <p className=" text-sm lg:text-[17px] text-start">
            I am a 25-year-old Web developer. What makes my website unique is
            the combination of better UI/UX and some personal touch.
          </p>
          <div className=" w-full flex lg:justify-end items-center justify-center">
            <img
              src="/images/down-arrow.png"
              className=" h-[100px] lg:hidden flex"
            />
            <motion.img
              initial={{
                rotate: 0,
              }}
              whileHover={{
                rotate: 360,
              }}
              src="/images/right-down.png "
              className=" h-[200px] hidden lg:flex"
            />
          </div>
        </div>
        <div className="place-items-center">
          <a href="https://www.instagram.com/_sujith_k_/">
            <motion.img
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              src="/images/Insta Pic.png"
              className=" rounded-3xl lg:h-[400px] "
            />
          </a>
        </div>
        <div className=" flex lg:justify-between items-start  flex-col gap-4 ">
          <div className=" flex items-center justify-center gap-10 p-4 border rounded-full  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-gray-300">
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
          <p className=" text-sm lg:text-[17px]">
            I stand out among other web developers because I not only possess a
            deep understanding of the latest technologies and frameworks, but I
            also prioritize user experience and performance, ensuring that my
            projects are not only functional but also intuitive and engaging for
            users.
          </p>
          <div className=" flex gap-2 items-center justify-center">
            <a href="/images/Sujith-K-CV-2025.pdf" download>
              {" "}
              <button className=" px-10 py-3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-gray-300 rounded-full">
                Download CV
              </button>
            </a>

            <motion.a
              initial={{
                y: 0,
              }}
              whileHover={{
                y: 30,
              }}
              href="#about"
            >
              {" "}
              <img src="/images/down-arrow.png" className=" h-[50px] " />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
