import React from "react"
import { Carousel } from "@material-tailwind/react"

function CarouselImage({ images, name }) {
  return (
    <Carousel
      className="rounded-xl"
      loop={true}
      autoplay={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images.map((image, index) => {
        return (
          <div className="relative overflow-hidden rounded-lg shadow-lg w-full h-[520px]">
            <img
              src={image}
              alt={index}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative h-[520px] bg-gradient-to-t from-gray-900/80 to-gray-900/10">
            </div>
          </div>
        )
      })}
    </Carousel>
  )
}

export default CarouselImage
