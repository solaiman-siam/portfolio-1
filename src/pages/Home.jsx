import Hero from "../components/Hero"
import Introduction from "../components/Introduction"
import Tools from "../components/Tools"
import WorkExperience from "../components/WorkExperience"


function Home() {
  return (
    <div className="bg-[#FAFAFA]">
        <Hero></Hero>
        <Introduction></Introduction>
        <WorkExperience></WorkExperience>
        <Tools></Tools>
    </div>
  )
}

export default Home