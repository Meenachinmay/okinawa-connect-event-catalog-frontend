import React from "react";
import { Image } from "@chakra-ui/react";

type EventImageProps = {
  url: string;
  handleDelete: (url: string) => void
};

const EventImage: React.FC<EventImageProps> = ({ url, handleDelete }: EventImageProps) => {
  return (
    <>
      <Image
        width={"auto"}
        src={url}
        alt="EventImage"
        objectFit={"cover"}
        borderRadius={"10px"}
        onClick={() => {
            console.log('clicked url: ', url);
            handleDelete(url)
        }}
      />
    </>
  );
};

export default EventImage;
