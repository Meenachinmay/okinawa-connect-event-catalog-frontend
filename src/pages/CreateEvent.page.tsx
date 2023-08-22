import { Flex, HStack, Input, Button } from "@chakra-ui/react";
import React from "react";

import { type FieldValues, useForm, SubmitHandler } from "react-hook-form";

interface IFromInput {
    title: string;
    prefecture: string;
    city: string;
    date: Date;
}

const CreateEvent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmutting },
    reset,
    getValues,
  } = useForm<IFromInput>();

  const onSubmit: SubmitHandler<IFromInput> = async (data: FieldValues) => {
    // TODO: submit to server
    console.log(data);
    // ...

    // kanryou dekitara
    reset();
  };

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
          width={{base: "90%", sm: "90%", md: "80%"}}
          height={"800px"}
          maxHeight={"800px"}
          opacity={"0.9"}
          p={5}
          justifyContent={{ base: "center", sm: "center", md: "start" }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <HStack
              width={{ base: "300px", sm: "300px", md: "full"}}
              flexDirection={{ base: "column", sm: "column", md: "row" }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Input {...register("title")} placeholder="Title" type="text" />
              <Input
                {...register("prefecture")}
                placeholder="prefecture"
                type="text"
              />
              <Input {...register("city")} placeholder="city" type="text" />
              <Input {...register("date")} type="date" />
            </HStack>
            <Button type="submit">Submit</Button>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default CreateEvent;
