import { RESPONSES } from "../constants";

export const checkResponse = (res) =>{
   if(res.ok) return;
   else if(RESPONSES[res.status]){
    throw new Error(RESPONSES[res.status]);
   }else{
    throw new Error("Some Error occured");
   }
}