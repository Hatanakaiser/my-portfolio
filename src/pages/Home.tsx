import Hero from "../components/sections/Hero";
import News from "../components/sections/News";
import Books from "../components/sections/Books";
import Gallery from "../components/sections/Gallery";
import Work from "../components/sections/Work";
import Profile from "../components/sections/Profile";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <News />
      <Books />
      <Gallery />
      <Work />
      <Profile />
      <Contact />
    </>
  );
}
