'use client'
import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
const page = () => {

  const who = "Hello I am Nikhil Mishra and i am pursuing my gradutation from CMCS college, I'm in my 2nd year";
  const what = "This is a Authentication Website page which is used to login an account on Google."

  return (
    <Accordion className='border border-gray-300 bg-gray-200 text-gray-700 p-3 gap-3'>
      <AccordionItem key="1" aria-label="Accordion 1" title="Who am I ?" className='border pb-3 rounded-lg border-gray-800 bg-gray-900 text-gray-200 p-3'>
        {who}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="What is this Website ?"  className='border rounded-lg border-gray-800 bg-gray-900 text-gray-200 p-3'>
        {what}
      </AccordionItem>
    </Accordion>
  )
}

export default page
