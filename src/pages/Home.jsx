import { Seo } from "../components/site/Seo"
import { Hero } from "../components/home/Hero"
import { ArchiveStrip } from "../components/home/ArchiveStrip"
import { Stats } from "../components/home/Stats"
import { Intro } from "../components/home/Intro"
import { FeaturedWork } from "../components/home/FeaturedWork"
import { Essay } from "../components/home/Essay"
import { Manifesto } from "../components/home/Manifesto"
import { Practice } from "../components/home/Practice"
import { Record } from "../components/home/Record"
import { Invitation } from "../components/home/Invitation"

/** The approved home page. Its visual direction is the benchmark for every other page. */
export const Home = () => (
  <>
    <Seo
      description="Gurpreet Singh, Gurpreet Artist Bathinda: painter, art educator and researcher. Portraiture, historical and cultural painting, photography and Punjab’s visual memory."
      path="/"
    />
    <Hero />
    <ArchiveStrip />
    <Stats />
    <Intro />
    <FeaturedWork />
    <Essay />
    <Manifesto />
    <Practice />
    <Record />
    <Invitation />
  </>
)
