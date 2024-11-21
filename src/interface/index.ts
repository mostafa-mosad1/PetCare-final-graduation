export interface IFormRegister {
  name: string;
  type: string;
  id:
    | "email"
    | "password"
    | "firstname"
    | "lastname"
    | "username"
    | "contact_number"
    | "address"
    | "c_password";
  placeholder: string;
  validation: {
    required?: boolean;
    minLength?: number;
    pattern?: RegExp;
  };
}
export interface IRegister {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  username: string;
  contact_number: string;
  address: string;
  c_password: string;
  type: string;
}

export interface IErrorResponse {
  error: {
    // details?: {
    //   errors: {
    //     message: string;
    //   }[];
    // };
    message?: string;
  };
}

export interface IFormLogin {
  name: string;
  type: string;
  id: keyof ILoginInput;
  placeholder: string;
  validation: {
    required?: boolean;
    minLength?: number;
    pattern?: RegExp;
  };
}
export interface ILoginInput {
  email: string;
  password: string;
}
export interface ICategories {
  id: number;
  img: string;
  name: string;
}
export interface ISubCategories {
  id: number;
  category_id: number;
  name: string;
  img: string;
  description: string;
}
export interface IVets {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  contact_number: string;
  address: string;
  email: string;
  email_verified_at: string;
  type: string;
  img: string;
  created_at: string;
  updated_at: string;
}

export interface IFormAppointments {
  label: string;
  type: string;
  id: "pet_name" | "date" | "time";
  placeholder: string;
  validation: {
    required?: boolean;
    minLength?: number;
  };
}
export interface IAppointments {
  doctor_id?: string;
  pet_name: string;
  date: string;
  time: string;
}

export interface IBookingVet {
  id: number;
  user_id: number;
  doctor_id: number;
  pet_name: string;
  date: string;
  time: string;
  status: string;
  created_at: string;
  updated_at: string;
  doctor_name: string;
  doctor: IVets;
}
export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  contact_number: string;
  address: string;
  email: string;
  email_verified_at: string | null;
  type: string;
  img: string;
  created_at: string;
  updated_at: string;
}
export interface IVetBooking {
  id: number;
  user_id: number;
  doctor_id: number;
  pet_name: string;
  date: string;
  time: string;
  status: string;
  created_at: string;
  updated_at: string;
  user_name: string;
  user: IUser;
}

enum IAnswer {
  yes = "1",
  no = "0",
}

export interface IFormInputCheck {
  category_id: "Cats" | "Dogs" | "Bird" | "Hamster" | "Fish";
  temprature: IAnswer;
  voming: IAnswer;
  lack_of_appetite: IAnswer;
  urinating: IAnswer;
}

export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  contact_number: string;
  address: string;
  email: string;
  email_verified_at: string | null;
  type: string;
  img: string;
  created_at: string;
  updated_at: string;
}
export interface IProfile {
  success: boolean;
  token: string;
  user: IUser;
}

export interface Ipet {
  id: number;
  user_id: number;
  name: string;
  img: string;
  vaccines: string;
  created_at: string;
  updated_at: string;
}

export interface IFormAddPet {
  label: string;
  type: string;
  id: "name" | "vaccines";
  placeholder: string;
  validation: {
    required?: boolean;
    minLength?: number;
  };
}
export interface IAddPet {
  name: string;
  vaccines: string;
}
export interface IFormUpdateProfile {
  label: string;
  type: string;
  id: keyof IUpdate;
  placeholder: string;
  validation: {
    required?: boolean;
    minLength?: number;
  };
}

export interface IUpdate {
  firstname: string;
  lastname: string;
  address: string;
}

export interface IRadioGroupPet {
  id: string;
  Label: string;
  value: string;
}

export interface IProudctShop {
  id: number;
  user_id: number;
  category_id: number;
  type: string;
  title: string;
  price: string;
  img: string;
  stock: number;
  created_at: string;
  updated_at: string;
}

export interface IaddProduct {
  label: string;
  type: string;
  id: keyof IProduct;
  placeholder: string;
  validation: {
    required?: boolean;
    minLength?: number;
  };
}

export interface IProduct {
  category_id: "1" | "2" | "3" | "4" | "5";
  type: "pet" | "food" | "Accessories" | "Treatment";
  title: string;
  price: string;
  stock: string;
}
 
export interface INotification  {
  id: number,
  user_id: number,
  notification: string,
  type: string,
  created_at: string,
  updated_at: string
}