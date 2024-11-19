import {
  IaddProduct,
  IFormAddPet,
  IFormAppointments,
  IFormLogin,
  IFormRegister,
  IFormUpdateProfile,
  IRadioGroupPet,
} from "@/interface";

export const formRegister: IFormRegister[] = [
  {
    name: "Firstname",
    type: "text",
    id: "firstname",
    placeholder: "Enter Your Firstname",
    validation: {
      required: true,
      minLength: 2,
    },
  },
  {
    name: "Lastname",
    type: "text",
    id: "lastname",
    placeholder: "Enter Your lastname",
    validation: {
      required: true,
      minLength: 2,
    },
  },
  {
    name: "Email",
    type: "email",
    id: "email",
    placeholder: "Enter Your Email",
    validation: {
      required: true,
      pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
  },
  {
    name: "Username",
    type: "text",
    id: "username",
    placeholder: "Enter Your Username",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    name: "Address",
    type: "text",
    id: "address",
    placeholder: "Enter Your Address",
    validation: {
      required: true,
      minLength: 5,
    },
  },
  {
    name: "Number",
    type: "text",
    id: "contact_number",
    placeholder: "Enter Your Number",
    validation: {
      required: true,
      minLength: 5,
    },
  },
  {
    name: "Password",
    type: "password",
    id: "password",
    placeholder: "Enter Your Password",
    validation: {
      required: true,
      minLength: 5,
    },
  },
  {
    name: "Confirm Password",
    type: "password",
    id: "c_password",
    placeholder: "Confirm Password",
    validation: {
      required: true,
      minLength: 5,
    },
  },
];

export const FormLogin: IFormLogin[] = [
  {
    name: "Email",
    type: "email",
    id: "email",
    placeholder: "User Name",
    validation: {
      required: true,
      pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
  },
  {
    name: "Password",
    type: "password",
    id: "password",
    placeholder: "Password",
    validation: {
      required: true,
      minLength: 5,
    },
  },
];

export const CheckInputs: {
  label: string;
  type: "temprature" | "voming" | "lack_of_appetite" | "urinating";
}[] = [
  {
    label: "High temperatue?",
    type: "temprature",
  },
  {
    label: "Voming?",
    type: "voming",
  },
  {
    label: "Lack of appetite?",
    type: "lack_of_appetite",
  },
  {
    label: "Urinating?",
    type: "urinating",
  },
];

export const FormAppointments: IFormAppointments[] = [
  {
    label: "Pet Name",
    type: "text",
    id: "pet_name",
    placeholder: "Enter Pet Name",
    validation: {
      required: true,
      minLength: 2,
    },
  },
  {
    label: "Expected Appointment Date",
    type: "date",
    id: "date",
    placeholder: "",
    validation: {
      required: true,
    },
  },
  {
    label: " Expected Appointment Time",
    type: "time",
    id: "time",
    placeholder: "",
    validation: {
      required: true,
    },
  },
];

export const AddFormPet: IFormAddPet[] = [
  {
    label: "Firs Name",
    type: "text",
    id: "name",
    placeholder: "Enter Pet Name",
    validation: {
      required: true,
      minLength: 2,
    },
  },
  {
    label: "Vaccines",
    type: "date",
    id: "vaccines",
    placeholder: "",
    validation: {
      required: true,
    },
  },
];
export const UpdateFormProfile: IFormUpdateProfile[] = [
  {
    label: "First Name",
    type: "text",
    id: "firstname",
    placeholder: "Enter Pet Name",
    validation: {
      required: true,
      minLength: 2,
    },
  },
  {
    label: "Last Name",
    type: "text",
    id: "lastname",
    placeholder: "LastName",
    validation: {
      required: true,
    },
  },
  {
    label: "Address",
    type: "text",
    id: "address",
    placeholder: "Address",
    validation: {
      required: true,
    },
  },
];

export const RadioGroupPet: IRadioGroupPet[] = [
  {
    id: "r1",
    Label: "Pet",
    value: "pet",
  },
  {
    id: "r2",
    Label: "Food",
    value: "food",
  },
  {
    id: "r3",
    Label: "Accessories",
    value: "accessories",
  },
  {
    id: "r4",
    Label: "Treatment",
    value: "treatment",
  },
];


export const addProductInputs: IaddProduct[] = [
  {
    label: "Title",
    type: "text",
    id: "title",
    placeholder: "Title",
    validation: {
      required: true,
    },
  },
  {
    label: "Price",
    type: "number",
    id: "price",
    placeholder: "Price",
    validation: {
      required: true,
    },
  },
  {
    label: "Stock",
    type: "number",
    id: "stock",
    placeholder: "Stock",
    validation: {
      required: true,
    },
  },
];