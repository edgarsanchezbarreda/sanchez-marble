import { FC } from 'react'
import { FadeIn } from './FadeIn'

interface WhyChooseUsCardProps {
  title: string
  description: string
}

const WhyChooseUsCard: FC<WhyChooseUsCardProps> = ({ title, description }) => {
  return (
    <FadeIn className="flex">
      <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
        <h3>
          <div>
            <span className="absolute inset-0 rounded-3xl" />
          </div>
        </h3>

        <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
          {title}
        </p>
        <p className="mt-4 text-base text-neutral-600">{description}</p>
      </article>
    </FadeIn>
  )
}

export default WhyChooseUsCard
