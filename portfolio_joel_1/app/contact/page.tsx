"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+65 8499 2823'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'joelsngzw@gmail.com'
  }
]

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col p-10 lg:gap-2 bg-[#27272c] rounded-xl" action="">
              <h3 className="text-lg lg:text-4xl text-accent font-semibold">
                Let&apos;s work together
              </h3>
              <p className="text-white/60 text-sm lg:text-base">
                Whether you&apos;re an employer seeking a passionate data scientist or developer, a collaborator with an exciting project, or simply looking to connect, I would love to hear from you! Feel free to send me an email or leave a message, and I&apos;ll get back to you as soon as possible.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 pt-4 md:grid-cols-2 gap-4">
                <Input type="firstname" placeholder="First name" />
                <Input type="lastname" placeholder="Last name" />
                <Input type="email" placeholder="Email address" className="lg:col-span-2"/>
              </div>
              {/* textarea */}
              <Textarea
                className="h-[200px] mt-4"
                placeholder="Type your message here."
              />
              {/* button */}
              <Button className="max-w-40 mt-4">
                Send Message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-4 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-3 xl:gap-6">
                    <div className="w-[40px] h-[40px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[20px] lg:text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-sm lg:text-base tracking-wide">{item.title}</p>
                      <h3 className="text-base xl:text-xl tracking-wide">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

    </motion.section>
  );
}
