import { Dispatch } from "react";


type ContentArray = {
    title: string;
    text: string;
    isVerified: boolean;
  };
  
  type MenuType = {
    id:number
    title: string;
    buttonText: string;
    content: Array<ContentArray>;
  };
export const Card = ({
    menu,
    setCont,
   
  }: {
    menu: MenuType;
    setCont:
    // Dispatch<React.SetStateAction<string>>;
 (value:number) => void;
    //(arg0:string) =>void;
   }) => {
    return (
      <div 
      onClick={()=>
        setCont(menu.id)}
      className="flex">
        <button
          className="w-[250px] h-10 bg-red-300 flex justify-center items-center border rounded-[15px]"
         
        >
          {menu.buttonText} 
        </button>
       
      </div>
    );
  };