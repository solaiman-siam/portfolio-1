import Hero from "../components/Hero"
import Introduction from "../components/Introduction"
import WorkExperience from "../components/WorkExperience"


function Home() {
  return (
    <div className="bg-[#FAFAFA]">
        <Hero></Hero>
        <Introduction></Introduction>
        <WorkExperience></WorkExperience>
    </div>
  )
}

export default Home