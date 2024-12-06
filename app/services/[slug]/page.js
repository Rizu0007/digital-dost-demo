"use client";
import React from "react";
import { servicedata } from "@/servicedata/data";
import Header from "@/components/services/Header";
import Service from "@/components/services/Service";
import Advantage from "@/components/services/Advantage";
import Flow from "@/components/services/Flow";
import Booking from "@/components/callenderly/Booking";

const page = ({ params }) => {
  console.log(params);
  const slug = params.slug;
  const service = servicedata.find((service) => service.slug === slug);
  console.log(service);
  console.log(service.services);
  if (!service) return null;
  return (
    <div className="min-w-full overflow-hidden">
      <Header title={service.header.title} image={service.header.image}   description={service.header.description}/>
      <Service services={service.services} />
      <Advantage advantages={service.advantages} />
      <Flow flow={service.flow}/>
      <Booking/>

    </div>
  );
};

export default page;
