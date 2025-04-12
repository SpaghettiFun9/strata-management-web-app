
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
  imageHeight?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images, 
  className = "max-w-4xl mx-auto", 
  imageHeight = "h-64 md:h-80" 
}) => {
  if (!images || images.length === 0) return null;
  
  return (
    <div className={`relative ${className}`}>
      <Card className="border-none shadow-lg overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className={`relative ${imageHeight} w-full overflow-hidden rounded-md`}>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-medium">{image.alt}</h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </Card>
    </div>
  );
};

export default ImageGallery;
