import Hero from "./component/hero";
import Project from "./component/project";
import About from "./component/about";
import Skills from "./component/skills";
import ContactUs from "./component/contactus";

export default function Home() {
  return(
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <ContactUs/>
    </div>
  )
}
