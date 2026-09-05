import { Seo } from "../components/site/Seo"
import { PageHero } from "../components/editorial/PageHero"
import { CategoryGrid } from "../components/editorial/CategoryGrid"
import { Reveal } from "../components/ui/reveal"
import { workCategories, artworks } from "../content/work"

export const Work = () => {
  // Counts shown only where real records exist.
  const counts = Object.fromEntries(
    workCategories.map((c) => [c.slug, artworks.filter((a) => a.category === c.slug).length || null]),
  )
  return (
    <>
      <Seo title="Work" description="Portraiture, historical and cultural painting, landscape, drawing, photography, hyperrealism and neo-surrealism by Gurpreet Singh." path="/work" image="/gallery/opt/8-1600.webp" />
      <PageHero eyebrow="The work" title="A practice shaped by people, place and memory." lead="Eight bodies of work. Each begins with something seen: a face, a place, an event from the past." />
      <section className="bg-charcoal">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
          <CategoryGrid categories={workCategories} linkBase="/work" counts={counts} />
          <Reveal className="mt-20 border-t border-ivory/12 pt-8">
            <p className="max-w-[60ch] text-[15px] leading-relaxed text-ivory/50">
              Individual artworks are being catalogued. Each category page is ready to hold titles, years, media, dimensions and the story behind the work as that information is added.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
