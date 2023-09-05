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

type InputField = {
  name: InputName;
  label: string;
  placeholder: string;
  required: boolean;
}; 

export const inputFields: InputField[] = [
  { label: "Tags", placeholder: "tags", name: "tags", required: true },
  {
    label: "Activities",
    placeholder: "activities",
    name: "activities",
    required: true,
  },
  { label: "Omiyage", placeholder: "omiyage", name: "omiyage", required: true },
  {
    label: "SnsLinks",
    placeholder: "snslinks",
    name: "snsLinks",
    required: true,
  },
  {
    label: "Food Options",
    placeholder: "food options",
    name: "foodOptions",
    required: true,
  },
  {
    label: "Train / Station",
    placeholder: "trains / stations",
    name: "trains",
    required: true,
  },
];
