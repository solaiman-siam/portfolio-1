import { MdOutlineLightMode } from "react-icons/md"


function Navbar() {
  return (
  <div className="bg-[#FAFAFA]">
      <div className="w-full  container mx-auto px-16">
        <div className="flex justify-between items-center py-4 text-gray-800">
            <div>
                <h3 className="text-4xl font-bold text-gray-600  cursor-pointer">S<span className="-ml-1">M</span></h3>
            </div>
            <div>
                <ul className="flex gap-8 items-center  ">
                    <li className="font-medium text-gray-800 hover:text-purple-500 cursor-pointer transition-colors">Home</li>
                    <li className="font-medium text-gray-800 hover:text-purple-500 cursor-pointer transition-colors">Experience</li>
                    <li className="font-medium text-gray-800 hover:text-purple-500 cursor-pointer transition-colors">Work</li>
                    <li className="font-medium text-gray-800 hover:text-purple-500 cursor-pointer transition-colors">Contact</li>
                    <li className="cursor-pointer text-gray-800 hover:text-purple-500 transition-colors">
                    <MdOutlineLightMode size={24} />
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Navbar