import { useState } from "react";
import Button from "@material-ui/core/Button";

export const ChatList = () => {
  const [chatList, setChatList] = useState([
    { name: "Joe", id: "1" },
    { name: "Anna", id: "2" },
    { name: "Bot", id: "3" },
    { name: "Nik", id: "4" },
    { name: "Sj", id: "5" },
  ]);
  const chatClick = () => {
    setChatList((state) => [...state, { name: "Joe", id: "" }]);
  };

  return (
    <div>
      <ul>
        {chatList.map((chatList, id) => (
          <li className="message" key={id}>
            <Button
              color="primary"
              variant="contained"
              aria-label="vertical contained primary button group"
            >
              {chatList.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
