"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

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
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Singapore, 556185'
  },
]

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{opacity:0}}
      animate = {{
        opacity:1,
        transition:{delay:2.4, duration:0.4, ease:"easeIn"}
      }}
    >


    </motion.section>
  );
}
