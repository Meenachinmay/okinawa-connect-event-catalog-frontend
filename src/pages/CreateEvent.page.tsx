import { Flex, HStack, Input } from "@chakra-ui/react";
import React from "react";

interface CreateEventProps {}

const CreateEvent: React.FC<CreateEventProps> = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
    }
  return (
    <>
      <Flex
        style={{
          backgroundImage: "url(./bg.jpg)",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        height={"100vh"}
      >
        <Flex
          bg={"white"}
          borderRadius={"20px"}
          width={"80%"}
          height={"800px"}
          maxHeight={"800px"}
          opacity={"0.9"}
          p={5}
        >
          <form onSubmit={(event) => handleSubmit(event)}>
            <HStack alignItems={'center'} justifyContent={'space-between'}>
                <Input placeholder="Title" name="title" />
                <Input placeholder="prefecture" name="prefecture" />
                <Input placeholder="city" name="city" />
                <Input type="date" name="date" />
            </HStack>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default CreateEvent;
