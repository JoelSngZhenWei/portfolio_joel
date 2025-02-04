"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import { sendEmail } from "@/utils/send-email";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
export type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
};
import { useState } from "react";



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
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FaCheck, FaCopy } from "react-icons/fa6";

export default function Contact() {
  const [copiedId, setCopiedId] = useState<string | null>(null); // Track copied item

  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogSubtitle, setDialogSubtitle] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  async function onSubmit(data: FormData) {
    console.log("Begin");
    setIsLoading(true); // Start loading
    try {
      const response = await sendEmail(data); // Now properly returns a response
      setDialogTitle("Success");
      console.log(response)
      setDialogMessage("Your email has been sent successfully!");
      setDialogSubtitle("You'll hear back from me soon!");
      reset();
    } catch (error: unknown) {
      // Narrow down the error type
      if (error instanceof Error) {
        setDialogTitle("Error");
        setDialogMessage(error.message || "Something went wrong. Please try again later.");
      } else {
        setDialogTitle("Error");
        setDialogMessage("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false); // Stop loading
      setIsDialogOpen(true); // Open the modal in all cases
      console.log(isLoading);
      console.log("End");
    }
  }



  return (
    <>
      {/* Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>
              {dialogMessage}<br />
              {dialogSubtitle}
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" }
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-1 lg:gap-[30px]">
            {/* form */}
            <div className="xl:h-[54%] order-2 xl:order-none ">
              <form className="flex flex-col p-4 lg:p-10 lg:gap-2 bg-secondary rounded-xl shadow-md" onSubmit={(event) => handleSubmit(onSubmit)(event)}>
                <h3 className="text-lg lg:text-4xl text-accent font-semibold">
                  Let&apos;s work together
                </h3>
                <p className="text-primary-foreground/60 text-sm lg:text-base">
                  Whether you&apos;re an employer seeking a passionate developer, a collaborator with an exciting project, or simply looking to connect, I would love to hear from you! Feel free to send me an email, give me a call, or use the contact form below, and I&apos;ll get back to you as soon as possible.
                </p>
                {/* input */}
                <div className="grid grid-cols-1 pt-4 md:grid-cols-2 gap-4">
                  <Input type="text" placeholder="First name" {...register('firstname', { required: true })} />
                  <Input type="text" placeholder="Last name" {...register('lastname', { required: true })} />
                  <Input type="email" placeholder="Email address" className="lg:col-span-2" {...register('email', { required: true })} />
                </div>
                {/* textarea */}
                <Textarea
                  className="h-[200px] mt-4"
                  placeholder="Type your message here."
                  {...register('message', { required: true })}
                />
                {/* Submit Button with Spinner */}
                <Button className="max-w-40 mt-4 flex items-center justify-center" disabled={isLoading}>
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-primary-foreground"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 2.042.64 3.924 1.709 5.291l2.291-2.291z"
                      ></path>
                    </svg>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>

            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-4 xl:mb-0">
              <ul className="flex flex-row lg:flex-col gap-2 border lg:gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="border flex items-center gap-3 xl:gap-6">
                      <div className="w-[30px] h-[30px] lg:w-[72px] lg:h-[72px] bg-secondary text-accent rounded-md flex items-center justify-center shadow-md">
                        <div className="text-xs lg:text-2xl">{item.icon}</div>
                      </div>
                      <div className="flex-1 flex items-center">
                        <div>
                          <p className="text-primary-foreground/60 hidden lg:block text-xs lg:text-base tracking-wide">{item.title}</p>
                          <h3 className="text-xs xl:text-xl tracking-wide">{item.description}</h3>
                        </div>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                className="ml-1 lg:ml-2 transition-all bg-transparent text-primary-foreground/80 hover:bg-transparent lg:hover:bg-secondary/80
                                "
                                onClick={async () => {
                                  try {
                                    await navigator.clipboard.writeText(item.description);
                                    setCopiedId(item.title); // Track copied item

                                    // Reset the copied state after 5 seconds
                                    setTimeout(() => {
                                      setCopiedId(null);
                                    }, 2000);
                                  } catch (error) {
                                    console.error("Failed to copy:", error);
                                  }
                                }}
                              >
                                {copiedId === item.title ? <FaCheck className="text-accent" /> : <FaCopy />}
                              </Button>

                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>

      </motion.section>
    </>
  );
}
