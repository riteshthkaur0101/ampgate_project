import WhyChooseUsV6 from '@/components/homepage-17/WhyChooseUsV6'
import ServiceContent from '@/components/services-page/ServiceContent'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FaqV2 from '@/components/shared/FaqV2'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import { ServicesType } from '@/components/shared/ServicesV8'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'

export async function generateStaticParams() {
  const services: ServicesType[] = getMarkDownData('data/ai-solutions/services')
  return services.map((service) => ({
    slug: service.slug,
  }))
}

const aiSolutionServiceDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const service = getMarkDownContent('data/ai-solutions/services/', slug)
  const singleService = service.data


  // Determine serviceType for WhyChooseUsV6 (expanded for all services)
  let serviceType:
    | 'chatbots'
    | 'workflow'
    | 'ai-marketing'
    | 'voice-ai'
    | 'custom-ai'
    | 'data-analytics'
    | 'app-dev'
    | 'process-automation'
    | undefined = undefined;

  if (slug === 'ai-chatbots-and-virtual-assistants') serviceType = 'chatbots';
  else if (slug === 'workflow-automation') serviceType = 'workflow';
  else if (slug === 'ai-powered-marketing') serviceType = 'ai-marketing';
  else if (slug === 'voice-ai-solutions') serviceType = 'voice-ai';
  else if (slug === 'custom-ai-development') serviceType = 'custom-ai';
  else if (slug === 'key-insights-from-complex-data') serviceType = 'data-analytics';
  else if (slug === 'application-development-and-architecture') serviceType = 'app-dev';
  else if (slug === 'business-process-automation-and-optimization') serviceType = 'process-automation';

  return (
    <LayoutOne>
      <PageHero
        badgeTitle="Service Details"
        title={singleService?.title}
        description={singleService?.description}
        scale
      />
      <ServiceContent service={service} />
      <WhyChooseUsV6 serviceType={serviceType} />
      <FaqV2 titleChange />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/08.png' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default aiSolutionServiceDetails
