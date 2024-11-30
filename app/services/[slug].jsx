import { useRouter } from 'next/router';
import data from '@/data/data.json'; // Updated import path to data.json
import Header from '@/components/services/Header';
import Service from '@/components/services/Service';
import Advantage from '@/components/services/Advantage';
import Flow from '@/components/services/Flow';

// Step 1: Generate dynamic paths for each service
export async function getStaticPaths() {
  const paths = data.map((service) => ({
    params: { slug: service.slug }, // The dynamic part of the URL
  }));

  return {
    paths,
    fallback: false, // If false, a 404 page will be shown for unmatched paths
  };
}

// Step 2: Fetch the specific data for each service at build time
export async function getStaticProps({ params }) {
  const serviceData = data.find((service) => service.slug === params.slug);

  return {
    props: {
      serviceData, // Pass the service data as props
    },
  };
}

function ServicePage({ serviceData }) {
  if (!serviceData) return <p>Service not found!</p>;

  return (
    <div className="min-w-full overflow-hidden">
      {/* Pass serviceData to the components */}
      <Header title={serviceData.title} image={serviceData.image} />
      {/* Pass the dynamic data to Service component */}
      <Service mainheading={serviceData.services[0]?.mainheading} services={serviceData.services.slice(1)} />
      <Advantage advantages={serviceData.advantages || []} />
      <Flow flow={serviceData.flow || ""} />
    </div>
  );
}

export default ServicePage;
