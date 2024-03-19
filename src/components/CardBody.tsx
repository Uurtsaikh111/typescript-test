
type ContentArray = {
    title: string;
    text: string;
    isVerified: boolean;
  };

export const CardBody = ({ data }: { data: ContentArray }) => {

    return (
      <div className="border">
        <h2>{data.title}</h2>
        <p>{data.text}</p>
      </div>
        
    );
  
};