import { CardBody } from "./CardBody";

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
export const Content = ({ data }: { data: MenuType }) => {

    return (
      <div>
       <div> {data.content.map((a, id) => {
          return <CardBody key={id } data={a}/>
         })}
         </div>
      </div>
    );
  
};
