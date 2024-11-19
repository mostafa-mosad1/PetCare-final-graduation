import * as yup from "yup";

export const schemaRegister = yup.object({
  email: yup
    .string()
    .required("Email is Required")
    .matches(
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Enter Vaild Mail extext@test.com"
    ),
  firstname: yup
    .string()
    .required("FirstName is Required")
    .min(2, "FirstName Should be at least 2 Character"),
  lastname: yup
    .string()
    .required("Lastname is Required")
    .min(2, "Lastname Should be at least 2 Character"),
  username: yup
    .string()
    .required("Username is Required")
    .min(3, "Username Should be at least 3 Character"),
  address: yup
    .string()
    .required("address is Required")
    .min(5, "Address Should be at least 5 Character"),
  contact_number: yup
    .string()
    .required("Number is Required")
    .min(5, "Enter Number Vaild"),
  password: yup
    .string()
    .required("password is Required")
    .min(5, "Pass Should be at least 5 Character or Num"),
  c_password: yup
    .string()
    .oneOf([yup.ref("password")], "Password and Repassword Must be Match")
    .required("Repassword is Required"),
  type: yup.string().required("Type Is Required"),
});

export const LoginSchema = yup
  .object({
    email: yup.string().required("Email is a required field"),
    password: yup.string().required().min(6, "min character is 6"),
  })
  .required();

export const AppointmentsSchema = yup.object({
  pet_name: yup
    .string()
    .required("Name Of Pet is Required")
    .min(2, "Name Should be at least 2 Character"),
  date: yup.string().required("Date is Required"),
  time: yup.string().required("Time is Required"),
});
export const AddPetSchema = yup.object({
  name: yup
    .string()
    .required("Name Of Pet is Required")
    .min(2, "Name Should be at least 2 Character"),
  vaccines: yup.string().required("Time is Required"),
});
export const updateProfileSchema = yup.object({
  firstname: yup
    .string()
    .required("firstName is Required")
    .min(2, "Name Should be at least 2 Character"),
  lastname: yup
    .string()
    .required("lastName is Required")
    .min(2, "Name Should be at least 2 Character"),
  address: yup
    .string()
    .required("address is Required")
    .min(2, "address Should be at least 2 Character"),
});

export const addProudctSchema = yup.object({
  title: yup
    .string()
    .required("Name is Required")
    .min(2, "Name Should be at least 2 Character"),
  price: yup
    .string()
    .required("Price is Required")
    .min(1, "Price Should be at least 1 Character"),
  stock: yup.string().required("Stock is Required"),
  category_id: yup
    .string()
    .oneOf(["1", "2", "3", "4", "5"], "Invalid Category")
    .required("Category is Required"),
  type: yup
    .string()
    .oneOf(["pet", "food", "Accessories", "Treatment"], "Invalid Type")
    .required("Type is Required"),
});
