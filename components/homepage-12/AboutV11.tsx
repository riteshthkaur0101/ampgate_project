'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'

const AboutV11 = () => {
  const { revealRef } = useReveal()
  return (
    <section className="relative overflow-hidden pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <RevealWrapper className="container">
        <h3
          ref={revealRef}
          className="text-left text-2xl font-normal text-secondary/90 dark:text-backgroundBody/70 lg:text-3xl lg:leading-[1.2] lg:tracking-[0.72px] xl:text-4xl">
          We combine strategic thinking, domain expertise, and the power of AI to automate operations, extract insights, and unlock new possibilities for our clients. <br />
          What makes us different? Our solutions are crafted not just by people—but by a hybrid team of humans and AI agents working in unison. <br />
Whether you're optimizing operations, building intelligent apps, or redefining customer experiences, Ampgate is where agentic AI meets strategy—delivering results that are smart, scalable, and built for impact.
        </h3>
      </RevealWrapper>
    </section>
  )
}

export default AboutV11
