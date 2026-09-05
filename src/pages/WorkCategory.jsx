import { Link, useParams } from "react-router"
import { ArrowLeft } from "@phosphor-icons/react"
import { Seo } from "../components/site/Seo"
import { PageHero } from "../components/editorial/PageHero"
import { ImageFeature } from "../components/editorial/ImageFeature"
import { ArtworkCard } from "../components/editorial/ArtworkCard"
import { Reveal } from "../components/ui/reveal"
import { workCategories, artworks } from "../content/work"
import { NotFound } from "./NotFound"

export const WorkCategory = () => {
  const { category } = useParams()
  const cat = workCategories.find((c) => c.slug === category)
  if (!cat) return <NotFound />
  const works = artworks.filter((a) => a.category === cat.slug)
  const others = workCategories.filter((c) => c.slug !== cat.slug)

  return (
    <>
      <Seo title={cat.title} description={`${cat.title} by Gurpreet Singh. ${cat.desc}`} path={`/work/${cat.slug}`} image={`/gallery/opt/${cat.photo.id}-1600.webp`} />
      <PageHero eyebrow="The work" title={cat.title} lead={cat.desc} />

      <section className="bg-charcoal pb-8 pt-4">
        <ImageFeature photo={cat.photo} caption={cat.title} />
      </section>

      <section className="bg-charcoal">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          {works.length ? (
            <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {works.map((w, i) => <ArtworkCard key={w.slug} work={w} index={i} />)}
            </ul>
          ) : (
            <Reveal className="border border-dashed border-ivory/20 p-10 md:p-14">
              <h2 className="display text-[1.8rem] text-ivory">Catalogue in preparation</h2>
              <p className="mt-4 max-w-[56ch] text-[16px] leading-relaxed text-ivory/60">
                Works in this category will appear here with title, year, medium, dimensions and the story behind each piece as the artist supplies them. Nothing is listed until it is confirmed.
              </p>
              <Link to="/archive" className="mt-8 inline-block text-[12px] tracking-[0.18em] text-gold-light uppercase hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light">
                Browse the archive in the meantime
              </Link>
            </Reveal>
          )}

          <nav aria-label="Other categories" className="mt-24 border-t border-ivory/12 pt-10">
            <Link to="/work" className="inline-flex items-center gap-2 text-[12px] tracking-[0.18em] text-ivory/55 uppercase hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light">
              <ArrowLeft size={13} weight="bold" aria-hidden="true" /> All work
            </Link>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {others.map((c) => (
                <li key={c.slug}>
                  <Link to={`/work/${c.slug}`} className="display text-[1.25rem] text-ivory/70 hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light">{c.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}
