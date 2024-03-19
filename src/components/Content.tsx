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

export const Content = ({ menu, cont }: { menu: MenuType; cont: string }) => {
  if (cont == "0") {
    return (
      <div>
        {menu.content.map((a, id) => {
         
          return (
            <div key={id + a.title} className="flex gap-1">
              <div>{a.title}</div>
              <div>
                {a.text}
                {a.title}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
