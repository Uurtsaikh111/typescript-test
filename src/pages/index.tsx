import { Card } from "@/components/Card";
import { Content } from "@/components/Content";
import { useState } from "react";

export default function Home() {
  const [cont, setCont] = useState<number>(0);
  let sideMenus = [
    { id:0,
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
    { id:1,
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
    { id:2,
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
    <div>
      {sideMenus.map((menu, id) => {
        return (
          <div className="flex">
            <div className="w-1/2">
              <Card menu={menu} key={id} setCont={setCont} />
            </div>
          
              <Content data={sideMenus[cont]} />
            
          </div>
        );
      })}
    </div>
  );
}
