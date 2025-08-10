import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <TextAppearAnimation>
            <h2 className="text-appear mt-3">
              Why choose <i className="font-instrument">Ampgate?</i>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear">The Ampgate Advantage — AI That Works Smarter for You</p>
          </TextAppearAnimation>
        </div>
        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2 [&>*]:border-b">
            <RevealWrapper className="py-3.5 pr-[30px] lg:py-[30px]">
              <h5>Agentic by Design</h5>
              <p className="tracking-[ 0.32px] top-3 text-base leading-[1.6]">We work with AI agents that think, adapt, and build alongside us—delivering faster, smarter results.</p>
            </RevealWrapper>
            <RevealWrapper className="py-3.5 pr-[30px] lg:py-[30px]">
              <h5>Tailored, Not Templated</h5>
              <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">
                Every solution is custom-fit to your business—no off-the-shelf shortcuts.
              </p>
            </RevealWrapper>
            <RevealWrapper className="py-3.5 pr-[30px] lg:py-[30px]">
              <h5>Insight-Driven</h5>
              <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">We turn data into clear, actionable insights that drive real decisions.</p>
            </RevealWrapper>
            <RevealWrapper className="py-3.5 pr-[30px] lg:py-[30px]">
              <h5>Seamless Integration</h5>
              <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">
                Plug our systems into your stack—tools, APIs, workflows—no disruption.
              </p>
            </RevealWrapper>
            <RevealWrapper className="py-3.5 pr-[30px] lg:py-[30px]">
              <h5>Enterprise-Ready</h5>
              <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">
                Need NDAs, BAAs, or SoWs? We’ve got the paperwork enterprises expect.
              </p>
            </RevealWrapper>
            {/* <RevealWrapper className="py-3.5 pr-[30px] lg:py-[30px]">
              <h5>ROI-Focused</h5>
              <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">
                We deliver measurable impact—more leads, less overhead, smarter ops.
              </p>
            </RevealWrapper> */}
          </div>
          <RevealWrapper as="figure" className="md:w-1/2">
            <img src="/images/home-5/why-rivor.png" alt="AI Solutions" className="h-full w-full" />
          </RevealWrapper>
        </div>
        <RevealWrapper as="ul" className="mt-14 flex justify-center">
          <li>
            <Link href="/contact" className="rv-button rv-button-sm rv-button-primary">
              <div className="rv-button-top">
                <span>Let’s Talk</span>
              </div>
              <div className="rv-button-bottom">
                <span>Let’s Talk</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default WhyChooseUs
