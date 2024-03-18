type ContentType = {
    title: string;
    text: string;
    isVerified: boolean;
  };
  export const Content = ({ content,cont,id}: { content: ContentType , cont: string,id:number}) => {
  if(cont=="0"){
    return (
      <div key={id} >
        <div className="border p-2 bg-red-400"> {content.title} </div>
        <div className="border p-1 bg-red-300">{content.text} </div>
      </div>
    );
  } 
  };