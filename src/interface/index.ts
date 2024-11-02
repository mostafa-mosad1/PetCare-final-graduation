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
  id: keyof ILoginInput ;
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