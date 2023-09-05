import { Flex, FormLabel, Input } from "@chakra-ui/react";
import { type UseFormRegister } from "react-hook-form";
import { IFromInput } from "../../pages/CreateEvent.page";

type InputName =
  | "foodOptions"
  | "title"
  | "prefecture"
  | "city"
  | "date"
  | "description"
  | "tags"
  | "activities"
  | "omiyage"
  | "snsLinks"
  | "trains";


type CustomInputProps = {
    label: string;
    placeholder: string;
    register: UseFormRegister<IFromInput>;
    name: InputName;
    required: boolean;
}

export const CustomInput:React.FC<CustomInputProps> = ({ label, placeholder, register, name, required }: CustomInputProps) => {
  return (
    <Flex width={"full"} flexDir={"column"}>
      <FormLabel htmlFor={name} fontSize={"xs"} color={"red.700"}>
        {required && "*"}
        {label}
      </FormLabel>
      <Input
        {...register(name, { required })}
        placeholder={placeholder}
        type="text"
        borderRadius={"0px"}
      />
    </Flex>
  );
};
