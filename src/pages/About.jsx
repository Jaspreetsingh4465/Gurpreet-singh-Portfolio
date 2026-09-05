import { Link } from "react-router"
import { ArrowRight } from "@phosphor-icons/react"
import { Seo } from "../components/site/Seo"
import { PageHero } from "../components/editorial/PageHero"
import { SectionTitle } from "../components/editorial/SectionTitle"
import { EditorialText } from "../components/editorial/EditorialText"
import { ImageFeature } from "../components/editorial/ImageFeature"
import { QuoteBlock } from "../components/editorial/QuoteBlock"
import { CategoryGrid } from "../components/editorial/CategoryGrid"
import { Timeline } from "../components/editorial/Timeline"
import { TypeGrid } from "../components/editorial/TypeGrid"
import { Reveal, RevealImage } from "../components/ui/reveal"
import { Photo } from "../components/ui/photo"
import {
  profile, chapters, pullQuote, practiceCategories, education, experience,
  specialisations, researchInterests, summary,
} from "../content/artist"

const Wrap = ({ tone = "dark", children, className = "" }) => (
  <section className={`${tone === "light" ? "bg-ivory" : "bg-charcoal"} ${className}`}>
    <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">{children}</div>
  </section>
)

export const About = () => (
  <>
    <Seo
      title="About the artist"
      description="Gurpreet Singh, painter, visual artist, art educator and researcher from Bathinda, Punjab: practice, teaching, education, specialisations and research."
      path="/about"
      image="/gallery/opt/15-studio-1600.webp"
    />

    <PageHero
      eyebrow="About the artist"
      title={profile.name}
      sub={profile.roles.join("  •  ")}
      lead="An ongoing relationship between people, place, history, observation and memory."
    />

    {/* 1. The artist: prose beside a studio photograph */}
    <Wrap>
      <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-start lg:gap-24">
        <div>
          <SectionTitle title={chapters.artist.heading} />
          <EditorialText paragraphs={chapters.artist.paragraphs} className="mt-10" />
        </div>
        <RevealImage className="aspect-[3/4] w-full lg:mt-20">
          <Photo id="15-studio" alt="Gurpreet Singh drawing at his drafting table, black and white" width={1600} sizes="(max-width: 1024px) 100vw, 520px" className="h-full w-full object-cover" />
        </RevealImage>
      </div>
    </Wrap>

    {/* 2. Artistic practice: six categories */}
    <Wrap tone="light">
      <SectionTitle tone="light" title="Artistic practice" intro="Oil first, with watercolour and acrylic beside it; portraiture, landscape and history as recurring subjects; drawing and photography running through all of it." />
      <div className="mt-16">
        <CategoryGrid categories={practiceCategories} linkBase="/work" tone="light" lead={false} />
      </div>
    </Wrap>

    {/* 3. The idea of observation: an editorial statement */}
    <section className="bg-charcoal-800">
      <Reveal className="mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
        <div className="mx-auto h-px w-16 rule-gold" aria-hidden="true" />
        <h2 className="mt-8 text-[12px] tracking-[0.3em] text-gold-light uppercase">{chapters.observation.heading}</h2>
        <p className="display mt-8 text-[clamp(1.8rem,3.8vw,2.9rem)] leading-[1.28] text-balance text-ivory">
          {chapters.observation.statement}
        </p>
        <p className="mx-auto mt-8 max-w-[52ch] text-[17px] leading-[1.75] text-ivory/60">{chapters.observation.body}</p>
      </Reveal>
    </section>

    {/* 4. Punjab, memory and history: text, then the historical painting full width */}
    <section className="bg-ivory">
      <div className="mx-auto max-w-6xl px-6 pt-24 md:pt-32 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionTitle tone="light" title={chapters.punjab.heading} />
          <EditorialText tone="light" paragraphs={chapters.punjab.paragraphs} />
        </div>
      </div>
      <div className="mt-16 pb-24 md:mt-20 md:pb-32">
        <ImageFeature
          photo={{ id: "12-paint", alt: "Oil painting of Maharaja Ranjit Singh seated beside a lion" }}
          caption="Maharaja Ranjit Singh, oil on canvas. Historical narrative brought into a human context."
          tone="light"
        />
      </div>
    </section>

    {/* 5. The educator */}
    <Wrap>
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1fr] lg:items-center lg:gap-24">
        <RevealImage className="aspect-[4/3] w-full">
          <Photo id={19} alt="Visitors, many of them students, queuing along a wall of framed photographs at an exhibition" width={1600} sizes="(max-width: 1024px) 100vw, 520px" className="h-full w-full object-cover" />
        </RevealImage>
        <div>
          <SectionTitle title={chapters.educator.heading} />
          <EditorialText paragraphs={chapters.educator.paragraphs} className="mt-10" />
        </div>
      </div>
    </Wrap>

    {/* 6. Beyond painting: dimensions of a wider cultural life */}
    <Wrap tone="light">
      <SectionTitle tone="light" title={chapters.beyond.heading} intro={chapters.beyond.intro} />
      <ul className="mt-14 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
        {chapters.beyond.interests.map((it, i) => (
          <li key={it.title}>
            <Reveal delay={(i % 3) * 0.05} className="border-t border-charcoal/12 py-6">
              <h3 className="display text-[1.35rem] text-charcoal">{it.title}</h3>
              <p className="mt-1.5 text-[14.5px] text-charcoal/55">{it.note}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Wrap>

    {/* Pull quote as a visual pause */}
    <QuoteBlock text={pullQuote.text} attribution={pullQuote.attribution} tone="dark" />

    {/* 7 + 8. Education and professional experience */}
    <Wrap>
      <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionTitle title="Education" />
          <div className="mt-12">
            <Timeline dated={false} items={education.map((e) => ({ when: null, title: e.degree, detail: e.institution }))} />
          </div>
        </div>
        <div>
          <SectionTitle title="Professional experience" />
          <div className="mt-12">
            <Timeline items={experience.map((x) => ({ when: `${x.from} to ${x.to}`, title: x.role, detail: x.institution, body: x.body }))} />
          </div>
        </div>
      </div>
    </Wrap>

    {/* 9 + 10. Specialisations and research interests */}
    <Wrap tone="light">
      <SectionTitle tone="light" title="Areas of specialisation" />
      <div className="mt-12"><TypeGrid items={specialisations} tone="light" columns={4} /></div>
      <div className="mt-24">
        <SectionTitle tone="light" title="Research interests" />
        <div className="mt-12"><TypeGrid items={researchInterests} tone="light" columns={2} /></div>
      </div>
    </Wrap>

    {/* 11. Professional summary */}
    <Wrap className="border-t border-gold/15">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <SectionTitle title="Professional summary" />
          <p className="mt-8 text-[15px] leading-relaxed text-ivory/55">{profile.professionalName}</p>
          <p className="mt-1 text-[13px] tracking-[0.12em] text-ivory/45 uppercase">{profile.roles.join(" • ")}</p>
          <Link to="/contact" className="group mt-10 inline-flex items-center gap-3 text-[12px] tracking-[0.18em] text-gold-light uppercase transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light">
            Enquire
            <ArrowRight size={14} weight="bold" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <ol className="grid gap-x-12 sm:grid-cols-2">
          {summary.map((s, i) => (
            <li key={s}>
              <Reveal delay={(i % 2) * 0.04} className="border-t border-ivory/12 py-5">
                <span className="text-[16px] leading-snug text-ivory/85">{s}</span>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Wrap>
  </>
)
