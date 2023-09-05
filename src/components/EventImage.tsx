import React from "react";
import { Button } from "@chakra-ui/react";

type EventImageProps = {
  url: string;
  handleDelete: (url: string) => void;
};

const EventImage: React.FC<EventImageProps> = ({
  url,
  handleDelete,
}: EventImageProps) => {
  return (
    <div
      key={url}
      style={{
        width: "auto",
        height: "100%",
        display: "inline-block",
        position: "relative", // Make this container relative so that the close button can be absolutely positioned within it
      }}
    >
      <img
        src={url}
        alt="EventImage"
        style={{
          width: "auto",
          height: "100%",
          objectFit: "cover",
          marginLeft: "10px",
        }}
      />
      {/* Close button */}
      <Button
        borderRadius={"0px"}
        size={"xs"}
        bg={"orange.500"}
        color={"white"}
        style={{
          position: "absolute", // Absolute position within the relative container
          top: "5px",
          right: "5px",
        }}
        onClick={() => {
          handleDelete(url);
        }}
      >
        X
      </Button>
    </div>
  );
};

export default EventImage;
