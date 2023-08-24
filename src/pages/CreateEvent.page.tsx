import {
  Flex,
  HStack,
  Input,
  Button,
  Textarea,
  Box,
  FormControl,
  Text,
  FormLabel,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { type FieldValues, useForm, SubmitHandler } from "react-hook-form";

interface IFromInput {
  title: string;
  prefecture: string;
  city: string;
  date: Date;
  description: string;
}

const CreateEvent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    setValue,
  } = useForm<IFromInput>();
  const quillRef = useRef<ReactQuill | null>(null);

  const onSubmit: SubmitHandler<IFromInput> = async (data: FieldValues) => {
    // TODO: submit to server
    console.log("data: ", { ...data });
    console.log("errors: ",  { ...errors });
    // ...

    // kanryou dekitara
    //reset();
  };

  const handleTextArea = (newValue: string) => {
    setValue("description", newValue);
  };

  const handleQuillRef = (ref: ReactQuill | null) => {
    if (ref) {
      quillRef.current = ref;
    }
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
        width={"100wh"}
        height={"100vh"}
        p={10}
      >
        <Flex
          bg={"white"}
          borderRadius={"20px"}
          width={{ base: "50%", sm: "70%", md: "100%" }}
          height={"800px"}
          maxHeight={"800px"}
          opacity={"0.9"}
          p={5}
          justifyContent={{ base: "center", sm: "center", md: "start" }}
        >
          <FormControl>
            <form onSubmit={handleSubmit(onSubmit)}>
              <HStack
                width={"full"}
                flexDirection={{ base: "column", sm: "column", md: "row" }}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Flex flexDirection={"column"} width={"full"}>
                  <FormLabel htmlFor="title" fontSize={"xs"} color={"red.700"}>
                    *Title
                  </FormLabel>
                  <Input
                    {...register("title", { required: true })}
                    placeholder="Title"
                    type="text"
                  />
                </Flex>

                <Flex width={"full"} flexDir={"column"}>
                  <FormLabel htmlFor="title" fontSize={"xs"} color={"red.700"}>
                    *Prefecture
                  </FormLabel>
                  <Input
                    {...register("prefecture", { required: true })}
                    placeholder="prefecture"
                    type="text"
                  />
                </Flex>

                <Flex width={"full"} flexDirection={"column"}>
                  <FormLabel htmlFor="title" fontSize={"xs"} color={"red.700"}>
                    *City
                  </FormLabel>
                  <Input
                    {...register("city", { required: true })}
                    placeholder="city"
                    type="text"
                  />
                </Flex>

                <Flex width={"full"} flexDirection={"column"}>
                  <FormLabel htmlFor="title" fontSize={"xs"} color={"red.700"}>
                    *Date
                  </FormLabel>
                  <Input
                    {...register("date", { required: true })}
                    type="date"
                  />
                </Flex>
              </HStack>
              {/* <HStack marginTop={"10px"} width={"full"}>
                <Textarea
                  {...register("description", { required: true })}
                  size={"sm"}
                  placeholder="Write information about event."
                  resize={"none"}
                  cols={10}
                  rows={10}
                ></Textarea>
                {errors.description && (
                  <p role="alert">{errors.description.message}</p>
                )}
              </HStack> */}
              <ReactQuill
                theme="snow"
                onChange={handleTextArea}
                // ref={(el) => {
                //   handleQuillRef(el);
                //   register(el);
                // }}
              />
              <Flex
                width={"full"}
                maxWidth={"inherit"}
                bg={"green.500"}
                height={"200px"}
                marginTop={"10px"}
                overflowX={"scroll"}
                overflowY={"hidden"}
                whiteSpace={"nowrap"}
                gap={5}
              >
                <div>hello world</div>
                <div>hello world</div>
                <div>hello world</div>
                <div>hello world</div>
                <div>hello world</div>
                <div>hello world</div>
                <div>hello world</div>
                <div>hello world</div>
                <div>hello world</div>
                <div>hello world</div>
                <div>hello world</div>
              </Flex>
              <Button
                marginTop={"10px"}
                bg={"green.200"}
                color={"gray.800"}
                _hover={{ bg: "green.300" }}
                width={"150px"}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </form>
          </FormControl>
        </Flex>
      </Flex>
    </>
  );
};

export default CreateEvent;
