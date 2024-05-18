import React from "react"
import { Carousel } from "@material-tailwind/react"

function CarouselImage({ images, name }) {
  return (
    <Carousel
      className="rounded-xl"
      loop={true}
      autoplay={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="invisible sm:visible absolute bottom-4 left-2/4 z-20 flex -translate-x-2/4 gap-2">
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
          <div className="relative overflow-hidden rounded-xl shadow-lg w-full h-56 lg:h-[520px]">
            <img
              src={image}
              alt={index}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative h-56 lg:h-[520px] bg-gradient-to-t from-black/90 to-black/0">
            </div>
          </div>
        )
      })}
    </Carousel>
  )
}

export default CarouselImage
