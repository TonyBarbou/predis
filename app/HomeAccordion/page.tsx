"use client"
import React from "react";

import {Accordion, AccordionItem} from "@nextui-org/accordion";

export default function App() {
    const content1 = "Link your data to Predis for automatic daily/weekly retrival or upload your own data manually";
    const content2 = "Run experiments to try to optimize your model and get the best predictions possible. Predis helps you along the way by already optimizing most of the process.";
    const content3 = "Explore your data via our integrated data analytics platform or retrieve your data to your favorite external tools.";
  return (
    <Accordion itemClasses={{content: "mb-5"}}>
      <AccordionItem startContent={<div className="w-10 h-10 flex flex-wrap justify-center content-center bg-blue-700 rounded-md mr-2" color="primary"><a className="font-bold text-white">1</a></div>} key="1" aria-label="Accordion 1" title="Upload your data">
        {content1}
      </AccordionItem>
      <AccordionItem startContent={<div className="w-10 h-10 flex flex-wrap justify-center content-center bg-blue-700 rounded-md mr-2" color="primary"><a className="font-bold text-white">2</a></div>} key="2" aria-label="Accordion 2" title="Run experiments to optimize your model">
        {content2}
      </AccordionItem>
      <AccordionItem startContent={<div className="w-10 h-10 flex flex-wrap justify-center content-center bg-blue-700 rounded-md mr-2" color="primary"><a className="font-bold text-white">3</a></div>} key="3" aria-label="Accordion 3" title="Export the results of your predictions">
        {content3}
      </AccordionItem>
    </Accordion>
  );
}
