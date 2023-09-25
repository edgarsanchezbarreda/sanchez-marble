import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import imageLaptop from '@/images/laptop.jpg'

import WhyChooseUsCard from '@/components/WhyChooseUsCard'
import { Button } from '@/components/Button'
import { invert } from 'tailwindcss/defaultTheme'

const locations = [
  'Los Angeles',
  'Orange County',
  'Ventura',
  'Riverside',
  'San Diego',
  'Kern County',
  'Antelope Valley',
  'And More',
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text- text-center font-display font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing clients, servicing the Greater
            Los Angeles area and beyond
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {locations.map((location) => (
              <li key={location}>
                <FadeIn>
                  <p className="font-semibold  text-white">
                    <span className="text-white">•</span> {location}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

const propositions = [
  {
    title: 'Excellence in Every Detail:',
    description:
      'Our craftsmen are not just skilled artisans; they are passionate about their craft. We blend traditional craftsmanship with cutting-edge technology to ensure your granite and marble installations are nothing short of perfection.',
  },
  {
    title: 'Endless Possibilities:',
    description:
      "Whether you're looking to add timeless elegance to your kitchen, a touch of luxury to your bathroom, or a striking statement piece to your commercial space, our vast selection of granite and marble slabs offers endless design possibilities.",
  },
  {
    title: 'Your Vision, Our Mission:',
    description:
      "Your project is unique, and we're here to make your vision a reality. From concept to completion, our expert team works closely with you, offering personalized solutions that align with your style, budget, and timeline.",
  },
]

function WhyChooseUs() {
  return (
    <>
      <SectionIntro
        title="Why Choose Us?"
        className="mt-24 sm:mt-32 lg:mt-40"
      />
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {propositions.map((proposition) => (
            <WhyChooseUsCard
              key={proposition.title}
              title={proposition.title}
              description={proposition.description}
            />
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you elevate your space with timeless elegance."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Whether we are building a new construction or remodeling your current
          project - we tailor each solution exactly to your needs.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Kitchen Countertops and Backsplashes">
              Transform your kitchen into a culinary haven with stunning
              countertops that stand up to the demands of your daily life.
            </ListItem>
            <ListItem title="Bathroom Vanities and Shower Walls">
              Indulge in the timeless allure of marble or the stone of your
              choice with custom-crafted bathroom vanities that exude
              sophistication and luxury.
            </ListItem>
            <ListItem title="Outdoor Barbeque Countertops">
              Indulge in the timeless allure of marble or the stone of your
              choice with custom-crafted bathroom vanities that exude
              sophistication and luxury.
            </ListItem>
            <ListItem title="Commercial Installations">
              Make a lasting impression on your clients and customers with our
              premium granite and marble installations in your business space.
            </ListItem>
            <ListItem title="Custom Designs">
              Unleash your creativity with our custom design services, tailored
              to your unique preferences.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description: "We are Santa Clarita's Premier Granite and Marble Experts.",
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Santa Clarita's
            <br />
            Premier Granite and Marble Experts
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            At <span className="font-semibold">Sanchez Marble</span>, we don't
            just craft countertops and surfaces - we sculpt dreams and redefine
            spaces. As the Santa Clarita Valley's trusted granite and marble
            fabrication and installation company, we bring a world of natural
            beauty to your doorstep.
          </p>
          <Button className="mt-10" href="/contact">
            Free Consultation
          </Button>
          {/* <Button className="mt-10" href="/contact">
            Request a Free Consultation
          </Button> */}
        </FadeIn>
      </Container>

      <Clients />

      <WhyChooseUs />

      <Testimonial className="mt-24 italic sm:mt-32 lg:mt-40">
        Oscar went above and beyond with understanding our vision, and he helped
        bring new life to our home with his craft and expertise.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
