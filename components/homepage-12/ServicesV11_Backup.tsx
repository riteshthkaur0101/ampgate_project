import { MarkdownData } from '@/interface'
import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const businessSolutionServices: MarkdownData[] = getMarkDownData('data/ai-solutions/services').sort(
  //@ts-ignore
  (a, b) => a.serialNumber - b.serialNumber,
)

const sliceOne = businessSolutionServices.slice(0, 3)
const sliceTwo = businessSolutionServices.slice(3, 6)
const sliceThree = businessSolutionServices.slice(6, 9)

const ServicesV11 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <TextAppearAnimation>
              <h2 className="text-appear lg:leading-[1.1]">
                Ampgate Labs 
                <i className="font-instrument">— AI Services That Deliver Impact </i>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full md:max-w-72 md:self-end lg:max-w-[470px]">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:place-self-end md:text-right">
                We build AI solutions that streamline operations and drive revenue growth.
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/services" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Explore AI Services</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Explore AI Services</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center px-5 max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark">
        {/* Service Card1 */}
        {sliceOne.map((service) => (
          <RevealWrapper
            key={service.slug}
            className="group relative min-h-[410px] w-full overflow-hidden md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]">
            <div>
              {/* Front Side */}
              <div className="absolute h-full w-full flex-1 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
                <span>
                  {/* Icon 1 (Star) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 60 60" fill="none">
                    <rect width={40} height={40} className="fill-backgroundBody dark:fill-secondary" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.6422 28.5873L26.8523 21.4072L23.0599 28.5873C22.7916 29.1124 22.4037 29.5671 21.9274 29.9148C21.4483 30.2643 20.8946 30.498 20.31 30.5973L12.5001 32.1224L17.9525 38.6224C18.3203 39.0237 18.5974 39.4995 18.765 40.0174C18.9312 40.5343 18.9833 41.081 18.9175 41.62L17.88 50.0001L25.0724 46.535C25.6282 46.2696 26.2364 46.132 26.8523 46.1325C27.4307 46.132 28.0007 46.2701 28.5148 46.535L35.8696 49.7851L34.8297 41.5C34.7639 40.961 34.8159 40.4143 34.9822 39.8974C35.1497 39.3795 35.4268 38.9037 35.7946 38.5024L41.202 32.1124L33.3922 30.5873C32.8075 30.488 32.2539 30.2543 31.7747 29.9048C31.2997 29.5599 30.9119 29.1088 30.6422 28.5873Z"
                      className="stroke-secondary dark:stroke-backgroundBody"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h5 className="mb-4 mt-9 text-4xl leading-[1.2] -tracking-[1.08px]">{service.title}</h5>
                <p>{service.description}</p>
              </div>
              {/* Hover Back Side */}
              <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-secondary px-[30px] py-12 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
                <span>
                  {/* Icon 1 (Star) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 60 60" fill="none">
                    <rect width={40} height={40} className="fill-backgroundBody dark:fill-secondary" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.6422 28.5873L26.8523 21.4072L23.0599 28.5873C22.7916 29.1124 22.4037 29.5671 21.9274 29.9148C21.4483 30.2643 20.8946 30.498 20.31 30.5973L12.5001 32.1224L17.9525 38.6224C18.3203 39.0237 18.5974 39.4995 18.765 40.0174C18.9312 40.5343 18.9833 41.081 18.9175 41.62L17.88 50.0001L25.0724 46.535C25.6282 46.2696 26.2364 46.132 26.8523 46.1325C27.4307 46.132 28.0007 46.2701 28.5148 46.535L35.8696 49.7851L34.8297 41.5C34.7639 40.961 34.8159 40.4143 34.9822 39.8974C35.1497 39.3795 35.4268 38.9037 35.7946 38.5024L41.202 32.1124L33.3922 30.5873C32.8075 30.488 32.2539 30.2543 31.7747 29.9048C31.2997 29.5599 30.9119 29.1088 30.6422 28.5873Z"
                      className="stroke-secondary dark:stroke-backgroundBody"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h5 className="mb-3 mt-6 text-4xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary">
                  {service.title}
                </h5>
                <p className="mb-8 text-backgroundBody dark:text-secondary">{service.description}</p>
                <Link
                  href={`/ai-solutions/services/${service.slug}`}
                  className="rv-button rv-button-sm-v2 rv-button-secondary-v2">
                  <div className="rv-button-top flex items-center gap-2">
                    <span className="text-nowrap">Learn More</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                        <path
                          d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                          className="stroke-backgroundBody dark:stroke-secondary"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="rv-button-bottom flex items-center">
                    <span className="text-nowrap">Learn More</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                        <path
                          d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                          className="stroke-secondary dark:stroke-backgroundBody"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
      {/* second Card Container */}
      <div className="flex flex-wrap justify-center px-5 max-lg:mt-5 max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark max-lg:[&>*]:border-y max-lg:dark:[&>*]:border-y-dark lg:[&>*]:border-b lg:dark:[&>*]:border-b-dark">
        {/* Service Card v2 */}
        {sliceTwo.map((service) => (
          <RevealWrapper
            key={service.slug}
            className="group relative min-h-[410px] w-full overflow-hidden md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]">
            <div>
              {/* Front Side */}
              <div className="absolute h-full w-full flex-1 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
                <span>
                  {/* Icon 2 (Grid) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 61 60" fill="none">
                    <rect width={40} height={40} className="fill-backgroundBody dark:fill-secondary" />
                    <path
                      d="M31.0833 12.5C31.0833 12.0858 30.7475 11.75 30.3333 11.75C29.919 11.75 29.5833 12.0858 29.5833 12.5H31.0833ZM29.5833 47.5C29.5833 47.9142 29.919 48.25 30.3333 48.25C30.7475 48.25 31.0833 47.9142 31.0833 47.5H29.5833ZM37.7532 16.875C37.7532 16.4608 37.4174 16.125 37.0032 16.125C36.589 16.125 36.2532 16.4608 36.2532 16.875H37.7532ZM36.2532 43.125C36.2532 43.5392 36.589 43.875 37.0032 43.875C37.4174 43.875 37.7532 43.5392 37.7532 43.125H36.2532ZM44.4133 21.25C44.4133 20.8358 44.0775 20.5 43.6633 20.5C43.2491 20.5 42.9133 20.8358 42.9133 21.25H44.4133ZM42.9133 38.75C42.9133 39.1642 43.2491 39.5 43.6633 39.5C44.0775 39.5 44.4133 39.1642 44.4133 38.75H42.9133ZM51.0833 25.625C51.0833 25.2108 50.7475 24.875 50.3333 24.875C49.919 24.875 49.5833 25.2108 49.5833 25.625H51.0833ZM49.5833 34.375C49.5833 34.7892 49.919 35.125 50.3333 35.125C50.7475 35.125 51.0833 34.7892 51.0833 34.375H49.5833ZM22.9133 43.125C22.9133 43.5392 23.2491 43.875 23.6633 43.875C24.0775 43.875 24.4133 43.5392 24.4133 43.125H22.9133ZM24.4133 16.875C24.4133 16.4608 24.0775 16.125 23.6633 16.125C23.2491 16.125 22.9133 16.4608 22.9133 16.875H24.4133ZM16.2532 38.75C16.2532 39.1642 16.589 39.5 17.0032 39.5C17.4174 39.5 17.7532 39.1642 17.7532 38.75H16.2532ZM17.7532 21.25C17.7532 20.8358 17.4174 20.5 17.0032 20.5C16.589 20.5 16.2532 20.8358 16.2532 21.25H17.7532ZM9.58325 34.375C9.58325 34.7892 9.91904 35.125 10.3333 35.125C10.7475 35.125 11.0833 34.7892 11.0833 34.375H9.58325ZM11.0833 25.625C11.0833 25.2108 10.7475 24.875 10.3333 24.875C9.91904 24.875 9.58325 25.2108 9.58325 25.625H11.0833ZM29.5833 12.5V47.5H31.0833V12.5H29.5833ZM36.2532 16.875V43.125H37.7532V16.875H36.2532ZM42.9133 21.25V38.75H44.4133V21.25H42.9133ZM49.5833 25.625V34.375H51.0833V25.625H49.5833ZM24.4133 43.125V16.875H22.9133V43.125H24.4133ZM17.7532 38.75V21.25H16.2532V38.75H17.7532ZM11.0833 34.375V25.625H9.58325V34.375H11.0833Z"
                      className="fill-secondary dark:fill-backgroundBody"
                    />
                  </svg>
                </span>
                <h5 className="mb-4 mt-9 text-4xl leading-[1.2] -tracking-[1.08px]">{service.title}</h5>
                <p>{service.description}</p>
              </div>
              {/* Hover Back Side */}
              <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-secondary px-[30px] py-12 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
                <span>
                  {/* Icon 2 (Grid) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 61 60" fill="none">
                    <rect width={40} height={40} className="fill-backgroundBody dark:fill-secondary" />
                    <path
                      d="M31.0833 12.5C31.0833 12.0858 30.7475 11.75 30.3333 11.75C29.919 11.75 29.5833 12.0858 29.5833 12.5H31.0833ZM29.5833 47.5C29.5833 47.9142 29.919 48.25 30.3333 48.25C30.7475 48.25 31.0833 47.9142 31.0833 47.5H29.5833ZM37.7532 16.875C37.7532 16.4608 37.4174 16.125 37.0032 16.125C36.589 16.125 36.2532 16.4608 36.2532 16.875H37.7532ZM36.2532 43.125C36.2532 43.5392 36.589 43.875 37.0032 43.875C37.4174 43.875 37.7532 43.5392 37.7532 43.125H36.2532ZM44.4133 21.25C44.4133 20.8358 44.0775 20.5 43.6633 20.5C43.2491 20.5 42.9133 20.8358 42.9133 21.25H44.4133ZM42.9133 38.75C42.9133 39.1642 43.2491 39.5 43.6633 39.5C44.0775 39.5 44.4133 39.1642 44.4133 38.75H42.9133ZM51.0833 25.625C51.0833 25.2108 50.7475 24.875 50.3333 24.875C49.919 24.875 49.5833 25.2108 49.5833 25.625H51.0833ZM49.5833 34.375C49.5833 34.7892 49.919 35.125 50.3333 35.125C50.7475 35.125 51.0833 34.7892 51.0833 34.375H49.5833ZM22.9133 43.125C22.9133 43.5392 23.2491 43.875 23.6633 43.875C24.0775 43.875 24.4133 43.5392 24.4133 43.125H22.9133ZM24.4133 16.875C24.4133 16.4608 24.0775 16.125 23.6633 16.125C23.2491 16.125 22.9133 16.4608 22.9133 16.875H24.4133ZM16.2532 38.75C16.2532 39.1642 16.589 39.5 17.0032 39.5C17.4174 39.5 17.7532 39.1642 17.7532 38.75H16.2532ZM17.7532 21.25C17.7532 20.8358 17.4174 20.5 17.0032 20.5C16.589 20.5 16.2532 20.8358 16.2532 21.25H17.7532ZM9.58325 34.375C9.58325 34.7892 9.91904 35.125 10.3333 35.125C10.7475 35.125 11.0833 34.7892 11.0833 34.375H9.58325ZM11.0833 25.625C11.0833 25.2108 10.7475 24.875 10.3333 24.875C9.91904 24.875 9.58325 25.2108 9.58325 25.625H11.0833ZM29.5833 12.5V47.5H31.0833V12.5H29.5833ZM36.2532 16.875V43.125H37.7532V16.875H36.2532ZM42.9133 21.25V38.75H44.4133V21.25H42.9133ZM49.5833 25.625V34.375H51.0833V25.625H49.5833ZM24.4133 43.125V16.875H22.9133V43.125H24.4133ZM17.7532 38.75V21.25H16.2532V38.75H17.7532ZM11.0833 34.375V25.625H9.58325V34.375H11.0833Z"
                      className="fill-secondary dark:fill-backgroundBody"
                    />
                  </svg>
                </span>
                <h5 className="mb-3 mt-6 text-4xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary">
                  {service.title}
                </h5>
                <p className="mb-8 text-backgroundBody dark:text-secondary">{service.description}</p>
                <Link
                  href={`/ai-solutions/services/${service.slug}`}
                  className="rv-button rv-button-sm-v2 rv-button-secondary-v2">
                  <div className="rv-button-top flex items-center gap-2">
                    <span className="text-nowrap">Learn More</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                        <path
                          d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                          className="stroke-backgroundBody dark:stroke-secondary"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="rv-button-bottom flex items-center">
                    <span className="text-nowrap">Learn More</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                        <path
                          d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                          className="stroke-secondary dark:stroke-backgroundBody"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>

      {/* third Card Container */}
      <div className="flex flex-wrap justify-center px-5 mt-5 gap-5 xl:px-5 [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark [&>*]:border-y dark:[&>*]:border-y-dark">
        {/* Service Card v3 */}
        {sliceThree.map((service) => (
          <RevealWrapper
            key={service.slug}
            className="group relative min-h-[410px] w-full overflow-hidden md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]">
            <div>
              {/* Front Side */}
              <div className="absolute h-full w-full flex-1 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
                <span>
                  {/* Icon 3 (Lightning) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 61 60" fill="none">
                    <rect width={40} height={40} className="fill-backgroundBody dark:fill-secondary" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.2636 10L14.9521 27.7771H24.2636L17.2807 50L46.3807 27.7771H33.5779L40.5607 10H24.2636Z"
                      className="stroke-secondary dark:stroke-backgroundBody"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h5 className="mb-4 mt-9 text-4xl leading-[1.2] -tracking-[1.08px]">{service.title}</h5>
                <p>{service.description}</p>
              </div>
              {/* Hover Back Side */}
              <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-secondary px-[30px] py-12 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
                <span>
                  {/* Icon 3 (Lightning) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 61 60" fill="none">
                    <rect width={40} height={40} className="fill-backgroundBody dark:fill-secondary" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.2636 10L14.9521 27.7771H24.2636L17.2807 50L46.3807 27.7771H33.5779L40.5607 10H24.2636Z"
                      className="stroke-secondary dark:stroke-backgroundBody"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h5 className="mb-3 mt-6 text-3xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary">
                  {service.title}
                </h5>
                <p className="mb-8 text-backgroundBody dark:text-secondary">{service.description}</p>
                <Link
                  href={`/ai-solutions/services/${service.slug}`}
                  className="rv-button rv-button-sm-v2 rv-button-secondary-v2">
                  <div className="rv-button-top flex items-center gap-2">
                    <span className="text-nowrap">Learn More</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                        <path
                          d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                          className="stroke-backgroundBody dark:stroke-secondary"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="rv-button-bottom flex items-center">
                    <span className="text-nowrap">Learn More</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                        <path
                          d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                          className="stroke-secondary dark:stroke-backgroundBody"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default ServicesV11
