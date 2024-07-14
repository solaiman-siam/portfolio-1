import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

function Hero() {
  return (
    <div className="">
      <div className="container px-16 mx-auto items-center  flex gap-8">
        <div>
          <div className="w-1 relative   bg-gradient-to-b from-purple-500 to-[#fff] h-[295px] mt-8 ">
                <div className="absolute bg-purple-500 w-5 h-5 rounded-full -top-4 -left-2">

                </div>
          </div>
        </div>
        <div className="items-center  flex gap-20">
        <div className="h-[600px] w-[60%]  justify-center flex flex-col  text-gray-800">
          <div>
          <h3 className="text-gray-700 text-lg font-semibold pb-4">Hello, 👋 I am</h3>
          <h1 className="text-5xl font-bold pb-4 ">Md Solaiman</h1>
          <p className="w-11/12 text-slate-700">I’ve always been passionate about pixels and design projects and haven’t stopped working and learning about new technologies. My main focus is coding the website mobile-friendly, SEO friendly, browser compatible and maximum optimized way so that it performs well. I’m grateful that my job allows me to work from anywhere.</p>
          <ul className="pt-4 flex gap-3 ">
            <li><FaLinkedin size={22} className="hover:text-gray-400 transition-colors" /></li>
            <li><FaGithub size={22} className="hover:text-gray-400 transition-colors" /></li>
            <li><FaSquareFacebook size={22} className="hover:text-gray-400 transition-colors" /></li>
            <li><FaTwitter size={22} className="hover:text-gray-400 transition-colors" /></li>
          </ul>
          </div>
        </div>
        <div className="w-[40%] rouded-full">
          <div className="w-[280px] overflow-hidden h-[280px] rounded-full bg-green-400">
              <img className="w-full scale-150 bg-bottom  h-full object-cover" src="https://i.ibb.co/CsDtLf8/Professional-photo.jpg" alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
