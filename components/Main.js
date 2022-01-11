import { ImGoogle3 } from "react-icons/im";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { MdOutlineDataExploration } from "react-icons/md";
import { BsMicrosoft } from "react-icons/bs";
import { SiOracle, SiBandrautomation } from "react-icons/si";
import { IoStatsChartOutline } from "react-icons/io5";
import { RiTwitterLine, RiMicrosoftLine } from "react-icons/ri";

function Profile() {
  return (
    <div className="min-w-scren">
      <div className="md:flex lg:h-[42rem] bg-[#f3f9fe] justify-center pl-5 md:pl-none pb-10 lg:pb-0">
        <div className="space-y-2 md:space-y-4 ml-1 mr-10 lg:mr-20 items-center lg:mt-36">
          <h2 className="pt-3 text-2xl font-semibold">Andrea Rodriguez</h2>
          <p className="text-gray-500">
            Sample text to tell everyone how awesome you are.
          </p>
          <div className="py-4 lg:py-2">
            <button className="border bg-gradient-to-r from-blue-500 to-blue-400 shadow-md px-3 xs:px-8 lg:px-12 py-2 border-none text-white hover:shadow-xl transition transform duration-300 ease-in-out">
              MY PROJECTS
            </button>
          </div>
        </div>
        <img
          src="/profile_pic.jpeg"
          className="w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem]"
          alt=""
        />
      </div>
      <div className="lg:h-[33rem] bg-white border-t-1 border-gray-300">
        <div className="px-5 lg:px-52 py-10 mt-20 justify-center w-full ">
          <h1 className="text-[35px] font-semibold">PERSONAL DETAILS</h1>
          <div className="flex space-x-5 ">
            <div className="border-l-2 border-blue-500 lg:h-[12rem]" />
            <p className="items-center pt-5 text-gray-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
          <div className="mt-2">
            <button className="bg-gradient-to-r from-blue-500 to-blue-400 shadow-md mt-5 border bg-blue-400 px-12 py-2 border-none text-white hover:shadow-xl transition transform duration-300 ease-in-out">
              ABOUT ME
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-white border-t border-gray-300 text-center w-full pt-10 mx-auto justify-center">
        <h1 className="text-2xl font-bold pt-20">Areas of Expertiece</h1>
        <p>Take a look at my main areas of expertiece</p>
        <div className=" mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 pb-40 justify-center px-20 lg:px-40 xl:px-64">
            <div className="mx-auto justify-center w-52 pt-10">
              <ImGoogle3 className="w-full mx-auto h-10" />
              <h4 className="pt-5 font-semibold">Google Tools</h4>

              <p className="pt-2 text-gray-400">
                Google Analytics, Google Tag Manager, Google Ads
              </p>
            </div>
            <div className="mx-auto justify-center w-52 pt-10">
              <FaAssistiveListeningSystems className="w-full mx-auto h-10" />
              <h4 className="pt-5 font-semibold">Social Listening Tools</h4>
              <p className="pt-1 text-gray-400">
                Nuvi, Hootsuite, and Meltwater
              </p>
            </div>
            <div className="mx-auto justify-center w-52 pt-10">
              <RiTwitterLine className="w-full mx-auto h-10" />
              <h4 className="pt-5 font-semibold">Social Media</h4>
              <p className="pt-1 text-gray-400">
                Facebook, Twitter, LinkedIn, Facebook Business Manager
              </p>
            </div>
            <div className="mx-auto justify-center w-52 pt-10">
              <SiBandrautomation className="w-full mx-auto h-10" />
              <h4 className="pt-5 font-semibold">Marketing Automation</h4>
              <p className="pt-2 text-gray-400">Pardot, Eloqua</p>
            </div>
            <div className="mx-auto justify-center w-52 pt-10">
              <IoStatsChartOutline className="w-full mx-auto h-10" />
              <h4 className="pt-5 font-semibold">Statistical Analysis</h4>
              <p className="pt-2 text-gray-400">R, Data Studio, Tableau</p>
            </div>
            <div className="mx-auto justify-center w-52 pt-10">
              <RiMicrosoftLine className="w-full mx-auto h-10" />
              <h4 className="pt-5 font-semibold">Microsoft Office</h4>
              <p className="pt-2 text-gray-400 pb-5">Word, PowerPoint, Excel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
