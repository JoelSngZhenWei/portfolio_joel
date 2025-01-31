"use client"

import { useState, useEffect } from "react"
import type React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"

interface PictureCarouselProps {
  images: {
    src: string
    alt: string
  }[]
}

const PictureCarousel: React.FC<PictureCarouselProps> = ({ images }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(images.length).fill(false))
  const [dialogImageLoaded, setDialogImageLoaded] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024) // 1024px is the 'lg' breakpoint in Tailwind
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const handleImageClick = (index: number) => {
    if (isLargeScreen) {
      setOpenIndex(index)
      setDialogImageLoaded(false)
    }
  }

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => {
      const newState = [...prev]
      newState[index] = true
      return newState
    })
  }

  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="justify-center">
              <div
                className={`relative w-full ${isLargeScreen ? "cursor-pointer" : ""}`}
                onClick={() => handleImageClick(index)}
              >
                {!imagesLoaded[index] && <Skeleton className="w-full h-32 rounded-lg" />}
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={500}
                  height={100}
                  className={`rounded-lg shadow-lg w-full ${imagesLoaded[index] ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => handleImageLoad(index)}
                />
                {imagesLoaded[index] && (
                  <div className="absolute bottom-0 left-0 w-full bg-secondary/50 text-center p-2 rounded-b-lg">
                    <p className="text-sm">{image.alt}</p>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {isLargeScreen && (
        <Dialog open={openIndex !== null} onOpenChange={() => setOpenIndex(null)}>
          <DialogContent className="flex max-w-[2000px] max-h-[1000px] p-8">
            <div className="hidden">
              <DialogTitle></DialogTitle>
            </div>

            {openIndex !== null && (
              <div className="relative w-full cursor-pointer">
                {!dialogImageLoaded && <Skeleton className="w-full h-[80vh] rounded-lg" />}
                <Image
                  src={images[openIndex].src || "/placeholder.svg"}
                  alt={images[openIndex].alt}
                  width={2000}
                  height={2000}
                  className={`object-contain rounded-lg ${dialogImageLoaded ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => setDialogImageLoaded(true)}
                />
                {dialogImageLoaded && (
                  <div className="absolute bottom-0 left-0 w-full bg-secondary/50 text-center p-2 rounded-b-lg">
                    <p className="text-sm">{images[openIndex].alt}</p>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export default PictureCarousel

