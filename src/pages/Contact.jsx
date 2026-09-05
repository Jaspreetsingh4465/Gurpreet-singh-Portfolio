import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react"
import { Seo } from "../components/site/Seo"
import { PageHero } from "../components/editorial/PageHero"
import { SectionTitle } from "../components/editorial/SectionTitle"
import { Gap } from "../components/editorial/Gap"
import { SocialLinks } from "../components/editorial/SocialLinks"
import { ContactForm } from "../components/contact/ContactForm"
import { Reveal, RevealImage } from "../components/ui/reveal"
import { Photo } from "../components/ui/photo"
import { contactHero, directContact, location, institutional, closingCta, socials } from "../content/contact"

const scrollToForm = () => document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth", block: "start" })

export const Contact = () => {
  const hasSocials = socials.some((s) => s.href)
  return (
    <>
      <Seo title="Contact" description="Start a conversation with Gurpreet Singh about exhibitions, collaborations, workshops, cultural projects, art education, commissions or research." path="/contact" image="/gallery/opt/17-1600.webp" />
      <PageHero eyebrow={contactHero.eyebrow} title={contactHero.title} lead={contactHero.body} />

      {/* The form, with the enquiry-type selector as its first field */}
      <section id="enquiry-form" className="bg-charcoal">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.5fr] lg:gap-24">
            <ContactForm />
            <aside className="space-y-14 lg:pt-2">
              <Reveal>
                <h2 className="text-[12px] tracking-[0.24em] text-gold-light uppercase">Direct contact</h2>
                <dl className="mt-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <EnvelopeSimple size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-ivory/50" />
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd className="text-[16px] text-ivory/80">
                        {directContact.email ? <a href={`mailto:${directContact.email}`} className="hover:text-gold-light">{directContact.email}</a> : <Gap>Email address to be added</Gap>}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-ivory/50" />
                    <div>
                      <dt className="sr-only">Phone</dt>
                      <dd className="text-[16px] text-ivory/80">
                        {directContact.phone ? <a href={`tel:${directContact.phone}`} className="hover:text-gold-light">{directContact.phone}</a> : <Gap>Phone number to be added</Gap>}
                      </dd>
                    </div>
                  </div>
                </dl>
              </Reveal>

              <Reveal delay={0.06}>
                <h2 className="text-[12px] tracking-[0.24em] text-gold-light uppercase">Location</h2>
                <div className="mt-6 flex items-start gap-3">
                  <MapPin size={18} aria-hidden="true" className="mt-1 shrink-0 text-ivory/50" />
                  <div>
                    <p className="display text-[1.6rem] leading-tight text-ivory">{location.city}</p>
                    <p className="mt-1 text-[16px] text-ivory/60">{location.region}</p>
                    <p className="mt-3 text-[14px] text-ivory/45">{location.note}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <h2 className="text-[12px] tracking-[0.24em] text-gold-light uppercase">Stay connected</h2>
                {hasSocials ? <SocialLinks className="mt-6" /> : <p className="mt-6"><Gap>Social profiles to be added</Gap></p>}
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* Institutional enquiries beside a photograph of the artist in conversation */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
            <RevealImage className="aspect-[4/5] w-full max-w-md">
              <Photo id={17} alt="Gurpreet Singh in a shawl, listening to an elder in conversation" width={1600} sizes="(max-width: 1024px) 100vw, 440px" className="h-full w-full object-cover" />
            </RevealImage>
            <div>
              <SectionTitle tone="light" title={institutional.heading} />
              <Reveal delay={0.08} className="mt-8 max-w-[56ch] text-[17px] leading-[1.8] text-charcoal/70">{institutional.body}</Reveal>
              <button type="button" onClick={scrollToForm} className="mt-10 text-[12px] tracking-[0.18em] text-gold uppercase transition-colors hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Closing visual CTA */}
      <section className="border-t border-gold/15 bg-charcoal">
        <Reveal className="mx-auto max-w-3xl px-6 py-28 text-center md:py-40">
          <h2 className="display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.08] text-balance text-ivory">{closingCta.title}</h2>
          <button type="button" onClick={scrollToForm} className="mt-12 inline-flex items-center gap-3 bg-gold px-9 py-4 text-[12px] font-medium tracking-[0.16em] text-charcoal uppercase transition-transform hover:-translate-y-px active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light">
            {closingCta.label}
          </button>
        </Reveal>
      </section>
    </>
  )
}
