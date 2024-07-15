function WorkExperience() {
  return (
    <div className="container px-16 pt-16 mx-auto">
      <div>
        <h3 className="text-xl text-gray-700 font-medium pb-4 ">
          WHAT I HAVE DONE SO FAR
        </h3>
        <h2 className="font-bold text-6xl pb-6 text-gray-800 ">
          Work Experience.
        </h2>
      </div>
      <div className="pt-20 pl-[59px] pr-[60px] ">
        {/* item 1 */}
        <div className="flex gap-14 ">
          <div className="p-6 bg-[#151030] relative w-[450px] mt-6 rounded-md text-white">
            <h3 className="font-bold pb-1.5 text-2xl w-fit">Front End Developer</h3>
            <h4 className=" font-semibold pb-5 w-fit">
              Softvence Agency
            </h4>
            <ul className="space-y-2 text-sm pl-4 font-medium text-gray-300">
              <li className="list-disc  list-item">
                Designing EDM with Photoshop and developing EDM from PSD for
                DELL Technologies.
              </li>
              <li className="list-disc  ">
                Designing and developing campaign based static creative, EDM,
                Landing page, Push notification and Offers for Shell Global.
              </li>
              <li className="list-disc ">
                Implementing responsive design and ensuring cross-browser
                compatibility.
              </li>
              <li className="list-disc ">
                Localizing content in different languages.
              </li>
            </ul>
            <div
              className=" -right-2 h-0 w-0 border-t-[8px]  border-l-[10px] border-b-[8px] 
border-solid border-t-transparent border-b-transparent border-l-[#151030] top-6 absolute "
            ></div>
            <div className="w-[72px] absolute p-2 -right-[95px] border-4 border-white top-0 h-[72px] bg-gray-200 rounded-full">
              <img
                className="object-cover"
                src="https://i.postimg.cc/3xpF464b/bd-calling-logo-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-1 bg-[#6E07F3]"></div>
          <h4 className="pt-12 -ml-4  font-medium text-gray-500">
            June 2024 - Present
          </h4>
        </div>
        {/* item 2 */}
        <div className="flex flex-row-reverse gap-14 ">
          <div className="p-6 bg-[#151030] relative w-[450px] mt-16 rounded-md text-white">
            <h3 className="font-bold pb-1.5 text-2xl w-fit">Web Developer</h3>
            <h4 className=" font-semibold pb-5 w-fit">
              Programming Hero
            </h4>
            <ul className="space-y-2 text-sm pl-4 font-medium text-gray-300">
              <li className="list-disc  list-item">
                Designing EDM with Photoshop and developing EDM from PSD for
                DELL Technologies.
              </li>
              <li className="list-disc  ">
                Designing and developing campaign based static creative, EDM,
                Landing page, Push notification and Offers for Shell Global.
              </li>
              <li className="list-disc ">
                Implementing responsive design and ensuring cross-browser
                compatibility.
              </li>
              <li className="list-disc ">
                Localizing content in different languages.
              </li>
            </ul>
            <div
              className=" -left-2 h-0 w-0 border-t-[8px]  border-r-[10px] border-b-[8px] 
border-solid border-t-transparent border-b-transparent border-r-[#151030] top-6 absolute "
            ></div>
            <div className="w-[72px] absolute p-1.5 -left-[95px] border-4 border-white top-0 h-[72px] bg-gray-200 rounded-full">
              <img
                className="object-cover rounded-full"
                src="https://i.postimg.cc/66vyzw8T/programming-hero-logo.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-1  bg-[#6E07F3]"></div>
          <h4 className="pt-20 -ml-4 font-medium text-gray-500">
            December 2023 - June 2024
          </h4>
        </div>
        {/* item 3 */}
        <div className="flex  gap-14 ">
          <div className="p-6 bg-[#151030] relative w-[450px] mt-16 rounded-md text-white">
            <h3 className="font-bold pb-1.5 text-2xl w-fit">Web Developer</h3>
            <h4 className=" font-semibold pb-5 w-fit">
              Programming Hero 
            </h4>
            <ul className="space-y-2 text-sm pl-4 font-medium text-gray-300">
              <li className="list-disc  list-item">
                Designing EDM with Photoshop and developing EDM from PSD for
                DELL Technologies.
              </li>
              <li className="list-disc  ">
                Designing and developing campaign based static creative, EDM,
                Landing page, Push notification and Offers for Shell Global.
              </li>
              <li className="list-disc ">
                Implementing responsive design and ensuring cross-browser
                compatibility.
              </li>
              <li className="list-disc ">
                Localizing content in different languages.
              </li>
            </ul>
            <div
              className=" -right-2 h-0 w-0 border-t-[8px]  border-l-[10px] border-b-[8px] 
border-solid border-t-transparent border-b-transparent border-l-[#151030] top-6 absolute "
            ></div>
            <div className="w-[72px] absolute p-1.5 -right-[95px] border-4 border-white top-0 h-[72px] bg-gray-200 rounded-full">
              <img
                className="object-cover rounded-full"
                src="https://i.postimg.cc/66vyzw8T/programming-hero-logo.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-1  bg-[#6E07F3]"></div>
          <h4 className="pt-20 -ml-4 font-medium text-gray-500">
            June 2022 - Present
          </h4>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
