import { motion } from "motion/react";
const Services = () => {
  return (
    <div
      id="services"
      className=" flex flex-col gap-11 lg:rounded-[100px] p-4   "
    >
      <div className=" shadow-lg bg-[url('/images/services.jpg')] bg-cover bg-center bg-fixed h-[400px] rounded-[100px] flex flex-col items-center justify-center gap-5">
        <h1 className=" lg:text-7xl text-5xl font-bold">SERVICES</h1>
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

      <p className=" text-center">
        We provide best services for the website development like creating
        responsive website and better UI/UX services. we also provide services
        like.
      </p>

      <div className=" grid lg:grid-cols-3 lg:grid-rows-2 gap-3 lg:p-4 ">
        <div className="  w-full shadow-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  h-[400px] rounded-3xl flex flex-col items-center justify-center">
          <img
            src="/images/web_development-removebg-preview.png"
            className=" h-[250px]"
          />
          <h1 className=" text-xl font-bold">Web development</h1>
        </div>
        <div className="  w-full shadow-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  h-[400px] rounded-3xl flex flex-col items-center justify-center">
          <img
            src="/images/responsive_design-removebg-preview.png"
            className=" h-[250px]"
          />
          <h1 className=" text-xl font-bold">Responsive Designt</h1>
        </div>
        <div className="  w-full shadow-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  h-[400px] rounded-3xl flex flex-col items-center justify-center">
          <img
            src="/images/figma_design-removebg-preview.png"
            className=" h-[250px]"
          />
          <h1 className=" text-xl font-bold">Web Design</h1>
        </div>
        <div className="  w-full shadow-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  h-[400px] rounded-3xl flex flex-col items-center justify-center">
          <img
            src="/images/Web-Hosting-removebg-preview.png"
            className=" h-[250px]"
          />
          <h1 className=" text-xl font-bold">Web Hosting</h1>
        </div>
        <div className="  w-full shadow-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  h-[400px] rounded-3xl flex flex-col items-center justify-center">
          <img
            src="/images/Content-Management-Systems-removebg-preview.png"
            className=" h-[250px]"
          />
          <h1 className=" text-xl font-bold">CMS System</h1>
        </div>
        <div className="  w-full shadow-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  h-[400px] rounded-3xl flex flex-col items-center justify-center">
          <img
            src="/images/backend-removebg-preview.png"
            className=" h-[250px]"
          />
          <h1 className=" text-xl font-bold">Backend development</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
