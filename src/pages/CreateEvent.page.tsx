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

import axios from "axios";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { type FieldValues, useForm, SubmitHandler } from "react-hook-form";

interface IFromInput {
  title: string;
  prefecture: string;
  city: string;
  date: Date;
  description: string;
  tags: string;
  activities: string;
  omiyage: string;
  snsLinks: string;
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

  
  const onSubmit: SubmitHandler<IFromInput> = async (data: FieldValues) => {
    // convert array of url into array of objects
    const uploadImages = ['http://url1.com/image.png', 'http://url2.com/image.png']  
    const uploadedImageUrls = uploadImages.map(url => {
      return { url: url }
    })

    // convert comma seperated string into array
    const tagsArray = data.tags.split(",").map((tag: string) => tag.trim());
    const activitesArray = data.activities
      .split(",")
      .map((activity: string) => activity.trim());
    const omiyageArray = data.omiyage
      .split(",")
      .map((omiyage: string) => omiyage.trim());
    const snsLinksArray = data.snsLinks
      .split(",")
      .map((snsLink: string) => snsLink.trim());

    // send data to server
    const completeData = {
      ...data,
      images: uploadedImageUrls,
      tags: tagsArray,
      activities: activitesArray,
      omiyage: omiyageArray,
      snsLinks: snsLinksArray,
    };

    try {
      const url = "http://localhost:3000/api/events/create-event";

      const response = await axios.post(url, completeData);

      if (response.data) {
        console.log("Event created: ", response.data.event.title);
      } else {
        console.log("Failed to create event: ", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred: ", error);
    }

    // reset();
  };

  const handleTextArea = (newValue: string) => {
    setValue("description", newValue);
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
                marginBottom={"3"}
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
              {/* add remaining feild here */}
              <Flex
                width={"full"}
                maxWidth={"inherit"}
                marginTop={"10px"}
                height={"auto"}
                flexDir={"column"}
                gap={3}
              >
                <Flex width={"full"} flexDir={"column"}>
                  <FormLabel htmlFor="title" fontSize={"xs"} color={"red.700"}>
                    *Tags
                  </FormLabel>
                  <Input
                    {...register("tags", { required: true })}
                    placeholder="tags"
                    type="text"
                  />
                </Flex>
                <Flex width={"full"} flexDir={"column"}>
                  <FormLabel htmlFor="title" fontSize={"xs"} color={"red.700"}>
                    *Activities
                  </FormLabel>
                  <Input
                    {...register("activities", { required: true })}
                    placeholder="activities"
                    type="text"
                  />
                </Flex>
                <Flex width={"full"} flexDir={"column"}>
                  <FormLabel
                    htmlFor="omiyage"
                    fontSize={"xs"}
                    color={"red.700"}
                  >
                    *Omiyage
                  </FormLabel>
                  <Input
                    {...register("omiyage", { required: true })}
                    placeholder="omiyage"
                    type="text"
                  />
                </Flex>
                <Flex width={"full"} flexDir={"column"}>
                  <FormLabel htmlFor="title" fontSize={"xs"} color={"red.700"}>
                    *SnsLinks
                  </FormLabel>
                  <Input
                    {...register("snsLinks", { required: true })}
                    placeholder="snslinks"
                    type="text"
                  />
                </Flex>
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
