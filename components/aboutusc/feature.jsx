import React from 'react';

const ModernFeatures = () => {
    const features = [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-hanger"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16 16a4 4 0 1 0 -8 0"></path>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <path d="M10 8a2 2 0 1 1 4 0"></path>
            </svg>
          ),
          title: "Fashion",
          description: "Strategic brand positioning and marketing solutions for fashion industry clients."
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-home"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 9l9 -7l9 7v11a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 22v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
            </svg>
          ),
          title: "Real Estate",
          description: "Digital marketing strategies and social media management for real estate professionals."
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-flask"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 3l6 0"></path>
              <path d="M5 6l14 0"></path>
              <path d="M10 10a5 5 0 0 0 4 0"></path>
              <path d="M6 6l2 12a2 2 0 0 0 2 1.73h4a2 2 0 0 0 2 -1.73l2 -12"></path>
            </svg>
          ),
          title: "Skin Care",
          description: "Influencer marketing and social media campaigns for beauty and skincare brands."
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-run"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="13" cy="4" r="1"></circle>
              <path d="M4 17l1 0.5l3 -3.5"></path>
              <path d="M9 15l2 1l2 -2"></path>
              <path d="M12 7l2 1"></path>
            </svg>
          ),
          title: "Sports & Fitness",
          description: "Content creation and community management for fitness brands and wellness programs."
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-heartbeat"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 7h5a2 2 0 0 1 2 2v6"></path>
              <path d="M14 17h7v-10h-7z"></path>
              <line x1="7" y1="12" x2="10" y2="12"></line>
            </svg>
          ),
          title: "Health Care",
          description: "Healthcare marketing solutions and patient engagement strategies through social media."
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-briefcase"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="3" y="7" width="18" height="13" rx="2"></rect>
              <path d="M6 7v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2"></path>
            </svg>
          ),
          title: "Local Business & Service",
          description: "Local SEO and social media marketing solutions for small businesses and service providers."
        },
      ];

  return (
    <div className="bg-white">
      <section className="relative px-6 py-16 md:py-24">
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-4 inline-block rounded-full bg-[#00729f] px-3 py-1.5 text-sm font-bold uppercase tracking-[0.2rem] text-white">
            Our Categories
          </div>
          <h2 className="mb-8 text-4xl font-medium text-gray-900 md:text-5xl">
            Transform your brand with our marketing solutions
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-gray-600">
            We specialize in creating impactful digital marketing strategies and social media campaigns that drive engagement and growth across various industries.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white p-8 transition-all hover:bg-orange-50 shadow-xl"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#00729F]/10 transition-transform group-hover:scale-150" />
              <div className="absolute -left-4 -bottom-4 h-32 w-32 rounded-full bg-[#00729F]/5 transition-transform group-hover:scale-150" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00729f] text-white shadow-lg /20 transition-transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <div className="h-px flex-1 bg-[#00729f]/20 mx-4" />
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ModernFeatures;