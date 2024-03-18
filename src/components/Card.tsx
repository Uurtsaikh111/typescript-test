

type ContentArray = {
    title: string;
    text: string;
    isVerified: boolean;
  };
  
  type MenuType = {
    title: string;
    buttonText: string;
    content: Array<ContentArray>;
  };


  
  export const Card = ({
    menu,
    setCont,
    id,
  }: {
    menu: MenuType;
    setCont: any;
    id:number
  }) => {
    return (
      <div 
    
      className="flex">
        <button
          className="w-[250px] h-10 bg-red-300 flex justify-center items-center border rounded-[15px]"
          onClick={()=>setCont("0")}
          key={id}

        >
          {menu.buttonText} 
        </button>
        <button
          className="w-[50px] h-10 bg-blue-300 flex justify-center items-center border rounded-[15px]"
          onClick={()=>setCont("1")}
        >
            Exit
        </button>
       
      </div>
    );
  };