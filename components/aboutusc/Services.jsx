import Image from 'next/image';

const services = [
  {
    title: 'Mobile App Development',
    category: 'iOS & Android',
    image: '/ImageAbout/Mobile.jpg',
    span: 'col-span-2 row-span-2',
    width: 'w-full',
    height: 'h-full', // Different height for mobile and desktop
  },
  {
    title: 'Web Design & Development',
    category: 'Web',
    image: '/ImageAbout/Web.jpg',
    span: 'col-span-1 row-span-1',
    width: 'w-full',
    height: 'h-[200px] md:h-full',
  },
  {
    title: 'Software Development',
    category: 'Software',
    image: '/ImageAbout/Software.jpg',
    span: 'col-span-1 row-span-1',
    width: 'w-full',
    height: 'h-[200px] md:h-full',
  },
  {
    title: 'Cross Platform App Development',
    category: 'React Native & Flutter',
    image: '/ImageAbout/Cross.jpg',
    span: 'col-span-1 row-span-1',
    width: 'w-full',
    height: 'h-[200px] md:h-[300px]', // Example of different height for mobile and desktop
  },
  {
    title: 'Game Development',
    category: '2D, 2.5D & 3D',
    image: '/ImageAbout/Game.jpg',
    span: 'col-span-1 row-span-2',
    width: 'w-full',
    height: 'h-[200px] md:h-[300px]',
  },
  {
    title: 'Managed Cloud Hosting',
    category: 'Hosting',
    image: '/ImageAbout/Managed.jpg',
    span: 'col-span-1 row-span-1',
    width: 'w-full',
    height: 'h-[200px] md:h-[300px]',
  },
  {
    title: 'White Label Applications',
    category: 'White Label',
    image: '/ImageAbout/White.jpg',
    span: 'col-span-2 row-span-1',
    width: 'w-full',
    height: 'h-[200px] md:h-[350px]',
  },
  {
    title: 'Software & Mobile App Maintenance',
    category: 'App Maintenance',
    image: '/ImageAbout/Software1.jpg',
    span: 'col-span-1 row-span-1',
    width: 'w-full',
    height: 'h-[200px] md:h-full',
  },
  {
    title: 'Blockchain Development',
    category: 'Blockchain',
    image: '/ImageAbout/blockchain.jpg',
    span: 'col-span-3 row-span-1',
    width: 'w-full',
    height: 'h-[200px] md:h-[350px]',
  },
];

export default function ServicesGrid() {
  return (
    <section className='flex justify-center items-center xs:p-3 sm:p-5 md:p-10 lg:p-20 xl:p-44'>
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto xs:gap-1 sm:gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative bg-gray-100 rounded-lg overflow-hidden shadow-md ${service.span} ${service.width} ${service.height}`}
          >
            <Image
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-full"
              width={500}
              height={300}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-4">
              <span className="text-sm text-pink-400">{service.category}</span>
              <h3 className="text-lg text-white font-semibold">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
