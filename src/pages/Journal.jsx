import { Link } from "react-router"
import { Seo } from "../components/site/Seo"
import { PageHero } from "../components/editorial/PageHero"
import { SectionTitle } from "../components/editorial/SectionTitle"
import { EditorialText } from "../components/editorial/EditorialText"
import { ImageFeature } from "../components/editorial/ImageFeature"
import { Reveal, RevealImage } from "../components/ui/reveal"
import { Photo } from "../components/ui/photo"
import { journalCategories, journalIntro, articles } from "../content/journal"

const fmt = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" })

export const Journal = () => (
  <>
    <Seo title="Journal" description="Writing alongside the work: essays on practice and Punjab, art history and iconography, photography, culture and shorter observations." path="/journal" image="/gallery/opt/1-1600.webp" />
    <PageHero eyebrow="Journal" title="Writing alongside the work." lead="Essays, notes and observations on painting, Punjab, art history and photography." />

    <section className="bg-charcoal">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-start lg:gap-24">
          <div>
            <SectionTitle title={journalIntro.heading} />
            <EditorialText paragraphs={journalIntro.paragraphs} className="mt-10" />
          </div>
          <RevealImage className="aspect-[4/3] w-full lg:mt-16">
            <Photo id={1} alt="Gurpreet Singh reading among stacked books in window light" width={1600} sizes="(max-width: 1024px) 100vw, 520px" className="h-full w-full object-cover" />
          </RevealImage>
        </div>
      </div>
    </section>

    {articles.length > 0 ? (
      <section className="bg-charcoal">
        <div className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
          <SectionTitle title="Latest writing" />
          <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a, i) => (
              <li key={a.slug}>
                <Link to={`/journal/${a.slug}`} className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light">
                  <RevealImage delay={(i % 3) * 0.06} className="aspect-[4/3]">
                    <Photo id={a.cover.id} alt={a.cover.alt} sizes="(max-width: 640px) 100vw, 360px" className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]" />
                  </RevealImage>
                  <Reveal delay={(i % 3) * 0.06 + 0.08}>
                    <p className="mt-5 font-mono text-[12px] text-gold-light">{fmt.format(new Date(a.date))}</p>
                    <h3 className="display mt-2 text-[1.4rem] leading-snug text-ivory">{a.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ivory/55">{a.excerpt}</p>
                  </Reveal>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    ) : null}

    <section className="bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
        <SectionTitle tone="light" title="What the journal will hold" intro="Six threads. Pieces will be filed under one of these as they are published." />
        <ul className="mt-14 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {journalCategories.map((c, i) => (
            <li key={c.key}>
              <Reveal delay={(i % 3) * 0.05} className="border-t border-charcoal/12 py-7">
                <h3 className="display text-[1.4rem] text-charcoal">{c.label}</h3>
                <p className="mt-2 max-w-[36ch] text-[15px] leading-relaxed text-charcoal/60">{c.desc}</p>
                <p className="mt-3 font-mono text-[12px] text-gold">
                  {articles.filter((a) => a.category === c.key).length || "No"} pieces yet
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="bg-charcoal py-8">
      <ImageFeature photo={{ id: "15-studio", alt: "The artist at his drafting table" }} caption="The desk where the writing, like the drawing, begins." aspect="aspect-[16/9] md:aspect-[21/9]" />
    </section>
  </>
)
