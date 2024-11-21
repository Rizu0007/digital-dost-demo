import Image from 'next/image';

const services = [
  {
    title: 'Digital Marketing',
    category: 'Digital Marketing',
    image: '/ImageAbout/Mobile.jpg',
    span: 'col-span-2 row-span-2',
    width: 'w-full',
    height: 'h-full', // Different height for mobile and desktop
  },
  {
    title: 'UI/UX design',
    category: 'UI/UX design',
    image: '/ImageAbout/Web.jpg',
    span: 'col-span-1 row-span-1',
    width: 'w-full',
    height: 'h-[200px] md:h-full',
  },
  {
    title: 'Email Marketing ',
    category: 'Email Marketing',
    image: '/ImageAbout/Software.jpg',
    span: 'col-span-1 row-span-1',
    width: 'w-full',
    height: 'h-[200px] md:h-full',
  },
  {
    title: 'Web Development ',
    category: 'Full Stack Development',
    image: '/ImageAbout/Cross.jpg',
    span: 'col-span-1 row-span-1',
    width: 'w-full',
    height: 'h-[200px] md:h-[300px]', // Example of different height for mobile and desktop
  },
  {
    title: 'Landing Pages',
    category: 'Landing Pages',
    image: '/ImageAbout/Game.jpg',
    span: 'col-span-1 row-span-2',
    width: 'w-full',
    height: 'h-[200px] md:h-[300px]',
  },
  {
    title: 'App Development',
    category: 'IOS & Andriod ',
    image: '/ImageAbout/Managed.jpg',
    span: 'col-span-1 row-span-1',
    width: 'w-full',
    height: 'h-[200px] md:h-[300px]',
  },

  {
    title: 'CRM Solutions',
    category: 'CRM  Solutions',
    image: '/ImageAbout/blockchain.jpg',
    span: 'col-span-3 row-span-1',
    width: 'w-full',
    height: 'h-[200px] md:h-[350px]',
  },
];

export default function ServicesGrid() {
  return (
    <section className='flex justify-center items-center xs:p-3 sm:p-5 md:p-10 lg:p-20 xl:p-44'>
      <div>

        Services We Offer
      </div>
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
