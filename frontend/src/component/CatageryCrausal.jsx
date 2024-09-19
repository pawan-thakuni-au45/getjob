import { Button } from '@/components/ui/button'
import { Carousel, CarouselItem,CarouselContent, CarouselPrevious, CarouselNext} from '@/components/ui/carousel'
import React from 'react'


const category=[
    "frontend developer",
    "backend developer",
    "data science",
    "AI developer"
]
export const CatageryCrausal = () => {
  return (
    <div>
     <Carousel className="w-full max-w-xl mx-auto my-20">
     <CarouselContent>
     {
        category.map((cat,index)=>(
              <CarouselItem className="md:basis-1/2 lg-basis-1/3">
              <Button variant="outline" className="rounded-full">{cat}</Button>
              </CarouselItem>
        ))
     }
     
     </CarouselContent>
     <CarouselPrevious></CarouselPrevious>
     <CarouselNext></CarouselNext>
     
     </Carousel>
    </div>
  )
}