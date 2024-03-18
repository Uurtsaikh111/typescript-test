
import { Card } from "@/components/Card";
import { Content } from "@/components/Content";
import { useState } from "react";
export default function Home() {

  
  const [cont, setCont] = useState("1");
  let sideMenus = [
    {
      title: "Card1",
      buttonText: "Card1 open content",
      content: [
        {
          title: "card1 title 1",
          text: "card1 text 1",
          isVerified: false,
        },
        {
          title: "card1 title 2",
          text: "card1 text 2",
          isVerified: false,
        },
        {
          title: "card1 title 3",
          text: "card1 text 3",
          isVerified: false,
        },
      ],
    },
    {
      title: "Card2",
      buttonText: "Card2 open content",
      content: [
        {
          title: "card2 title 1",
          text: "card2 text-1",
          isVerified: true,
        },
        {
          title: "card2 title 2",
          text: "catd2 text-2",
          isVerified: true,
        },
        {
          title: "card2 title 3",
          text: "card2 text-3",
          isVerified: true,
        },
      ],
    },
    {
      title: "Card3",
      buttonText: "Card3 open content",
      content: [
        {
          title: "card3 title 1",
          text: "card3  text-1",
          isVerified: false,
        },
        {
          title: "card3  title 2",
          text: "card3  text-2",
          isVerified: false,
        },
        {
          title: "card3  title 3",
          text: "card3  text-3",
          isVerified: false,
        },
      ],
    },
  ];
  return (
    <main>
      {sideMenus.map((menu,id) => (
        <div className="flex">
          <div className="w-1/2">
            <Card menu={menu} id={id} setCont={setCont} />
          </div>
          <div >
            <div className="border p-1 bg-slate-400 rounded">{menu.title}</div>
            {menu.content.map((content,id) => (
              <Content content={content} id={id} cont={cont}/>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}