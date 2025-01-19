import { motion } from "motion/react";
const Skills = () => {
  return (
    <div id="skills">
      <div className=" flex flex-col gap-11">
        <div className=" shadow-lg bg-[url('/images/Skills-2.jpg')] bg-fixed  dark:bg-black bg-cover bg-center h-[400px] rounded-[100px] flex flex-col items-center justify-center gap-5">
          <h1 className=" lg:text-7xl text-4xl font-bold text-center">
            EXPERIENCE & SKILLS
          </h1>
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

        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
            Skills
          </h2>
          <p className="mb-12 text-lg text-gray-500">
            Thses are the few awesome skills I have.
          </p>
          <div className="w-full">
            <div className="flex flex-col w-full mb-10 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-gray-600 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        HTML & CSS
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-grey-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Proficient in HTML and CSS, which serve as the
                      foundational elements of web development, I embarked on a
                      new career path driven by my passion for these
                      technologies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Javascript
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-gray-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      A website lacking functionality is akin to a lifeless
                      plant deprived of water; therefore, I mastered JavaScript
                      to infuse vitality into the website by developing
                      interactive components.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-gray-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        ReactJs
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-gray-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      While my knowledge of the foundation was not particularly
                      inspiring and lacked significant value, understanding a
                      library or framework greatly simplified the process of
                      creating my website.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-gray-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        NextJs
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-gray-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      ReactJS initially presented itself as a JavaScript
                      library, which often necessitated the selection of
                      specific libraries for particular functionalities; this
                      realization prompted me to transition to a framework,
                      ultimately facilitating the seamless execution of my
                      ideas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Nodejs
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-gray-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Node.js has significantly enhanced my understanding of
                      backend development by serving as a robust runtime
                      environment for JavaScript, thereby deepening my knowledge
                      in this area.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mb-10 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        MongoDB
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-gray-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      MongoDB was my preferred choice for learning about
                      databases, as it provided me with valuable insights into
                      backend development while maintaining a user-friendly
                      interface.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        TailwindCss
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-gray-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Initially, I found styling with basic CSS to be
                      challenging, which led me to explore Tailwind CSS, and I
                      quickly developed a strong appreciation for its simple and
                      clean structure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-gray-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Framer-Motion
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-gray-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      To enhance the visual appeal and attractiveness of my
                      website, I began studying Framer Motion and developing
                      animated components.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-gray-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Figma
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-gray-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Recognizing the challenges of initiating development
                      without a design framework, I took the initiative to learn
                      new tools, ultimately mastering Figma to enhance my design
                      capabilities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        TypeScript
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-gray-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      TypeScript serves as a valuable security enhancement in
                      web development, prompting me to deepen my understanding
                      and incorporate it into the websites that necessitate its
                      use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
