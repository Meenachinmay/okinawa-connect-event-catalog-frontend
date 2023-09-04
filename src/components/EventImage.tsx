import React from "react";
import { Image } from "@chakra-ui/react";

type EventImageProps = {
  url: string;
};

const EventImage: React.FC<EventImageProps> = ({ url }: EventImageProps) => {
  return (
    <>
      <Image
        width={"auto"}
        src={url}
        alt="EventImage"
        objectFit={"cover"}
        borderRadius={"10px"}
      />
    </>
  );
};

export default EventImage;
