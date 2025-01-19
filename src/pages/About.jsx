import { motion } from "motion/react";
const About = () => {
  return (
    <div id="about" className=" p-4">
      <div className="shadow-lg bg-[url('/images/About-1.jpg')]  bg-cover bg-center bg-fixed  h-[400px] rounded-[100px] flex flex-col items-center justify-center gap-5">
        <h1 className=" text-7xl font-bold ">ABOUT</h1>
        <motion.img
          initial={{
            y: 0,
          }}
          whileHover={{
            y: 30,
          }}
          src="/images/down-arrow.png"
          className=" h-[50px] "
        />
      </div>
      <div className="">
        <div className=" flex flex-col items-start gap-8 p-4">
          <h1 className=" text-2xl lg:text-5xl font-bold">Education</h1>

          <div className=" flex gap-11 items-center lg:justify-center lg:gap-5 flex-col lg:flex-row w-full ">
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
            <div className=" flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 h-[200px] w-[200px] rounded-3xl">
              <img
                src="/images/school-removebg-preview.png"
                className=" h-[60px]"
              />
              <h2>School-2017</h2>
            </div>
            <img
              src="/images/arrows.png"
              className=" w-[40px] lg:flex hidden"
            />

            <div className="shadow-lg flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 h-[200px] w-[200px]  rounded-3xl">
              <img
                src="/images/Uni-removebg-preview.png"
                className=" h-[60px]"
              />
              <h2>University-2021</h2>
            </div>
            <img
              src="/images/arrows.png"
              className=" w-[40px] lg:flex hidden"
            />
            <div className="shadow-lg flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 h-[200px] w-[200px]  rounded-3xl">
              <img
                src="/images/masters-removebg-preview.png"
                className=" h-[60px]"
              />
              <h2>Masters-2023</h2>
            </div>
            <img
              src="/images/arrows.png"
              className=" w-[40px] lg:flex hidden"
            />
            <div className="shadow-lg flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 h-[200px] w-[200px]  rounded-3xl">
              <img
                src="/images/company-removebg-preview.png"
                className=" h-[60px]"
              />
              <h2>Start-Up-2024</h2>
            </div>
          </div>

          <h2 className="shadow-lg lg:text-5xl text-md font-bold flex items-center justify-center gap-2 p-4 rounded-3xl">
            <img
              src="/images/visiting_card_logo-removebg-preview.png"
              className=" h-[100px]"
            />{" "}
            Accurate Software Integrators
          </h2>
          <a
            href="https://accuratesoftwareandintegrators.com/"
            className=" flex items-center justify-center"
          >
            <img src="/images/arrows.png" className=" h-[40px] " />
            ASI
          </a>
          <p className="text-start ">
            Hi, I'm Sujith Karthikaiselvan, I am the founder and CEO of a
            Accurate Software Integrators web development company dedicated to
            crafting innovative digital solutions. With a deep passion for
            technology and design, I have spent over a decade honing my skills
            in the ever-evolving world of web development.
          </p>
          <h1 className=" lg:text-5xl text-3xl  font-bold">My Journey</h1>
          <p className="text-start">
            {" "}
            I began my career as a freelance developer, where I quickly realized
            my love for creating user-friendly websites that not only meet
            client needs but also enhance user experience. Over the years, I
            have had the privilege of working with a diverse range of clients,
            from startups to established enterprises, helping them bring their
            visions to life through tailored web solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
