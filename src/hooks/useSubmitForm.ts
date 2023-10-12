import { useState } from "react";
import axios from "axios";
import { FieldValues, FieldErrors } from "react-hook-form";
import { IFromInput } from "../pages/CreateEvent.page";

import * as dayjs from 'dayjs';

const useSubmitForm = () => {
  const [loading, setLoading] = useState(false);

  const arrayFromString = (input: string) =>
    input.split(",").map((item: string) => item.trim());

  const onSubmit = async (
    data: FieldValues,
    reset: () => void,
    errors: FieldErrors<IFromInput>,
    downloadAbleImageURLs: string[],
  ) => {
    
    const uploadedImageUrls = downloadAbleImageURLs.map((url) => {
      return { url };
    });

    setLoading(true);

    const completeData = {
      ...data,
      date: dayjs(data.date).format('YYYY-MM-DD'),
      images: uploadedImageUrls,
      tags: arrayFromString(data.tags),
      activities: arrayFromString(data.activities),
      omiyage: arrayFromString(data.omiyage),
      snsLinks: arrayFromString(data.snsLinks),
      foodOptions: arrayFromString(data.foodOptions),
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

    setLoading(false);
    reset();
    data.description = "";
  };

  return { onSubmit, loading };
};

export default useSubmitForm;
