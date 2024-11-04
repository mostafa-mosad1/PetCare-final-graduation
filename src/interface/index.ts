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
  type:string;
  img: string;
  created_at: string;
  updated_at: string;
}
