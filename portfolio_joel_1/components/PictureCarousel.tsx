"use client"

import { useState } from "react"
import type React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface PictureCarouselProps {
    images: {
        src: string
        alt: string
    }[]
}

const PictureCarousel: React.FC<PictureCarouselProps> = ({ images }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <>
            <Carousel className="w-full">
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="justify-center">
                            <div className="relative w-full cursor-pointer" onClick={() => setOpenIndex(index)}>
                                <Image
                                    src={image.src || "/placeholder.svg"}
                                    alt={image.alt}
                                    width={500}
                                    height={100}
                                    className="rounded-lg shadow-lg w-full"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-secondary/50 text-center p-2 rounded-b-lg">
                                    <p className="text-sm">{image.alt}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <Dialog open={openIndex !== null} onOpenChange={() => setOpenIndex(null)}>
                <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
                    <div className="hidden"><DialogTitle></DialogTitle></div>

                    {openIndex !== null && (
                        <div className="relative w-full cursor-pointer">

                            <Image
                                src={images[openIndex].src || "/placeholder.svg"}
                                alt={images[openIndex].alt}
                                width={1000}
                                height={1000}
                                className="object-contain rounded-lg"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-secondary/50 text-center p-2 rounded-b-lg">
                                <p className="text-sm">{images[openIndex].alt}</p>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}

export default PictureCarousel

