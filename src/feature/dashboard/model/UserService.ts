
export interface UserService {
     name:string
     phoneNum:number
     email:string
     address:string
     issue:string
}

export const defaultUserService = {
    name:"",
    phoneNum:"",
    email:"",
    address: "",
    issue:""
}