import { Input, InputAdornment } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useState, useEffect } from "react";

export const MessageList = () => {
  const [message, setMessages] = useState([{ text: "Helloy", athor: "Joe" }]);
  const [text, setValue] = useState("");
  const hadlSendClick = ({ code }) => {
    if (code === "Enter") {
      setMessages((state) => [...state, { text, athor: "Joe" }]);
      setValue("");
    }
  };
  useEffect(() => {
    const lastMessage = message[message.length - 1];
    if (lastMessage?.athor === "Joe") {
      setTimeout(() => {
        setMessages((state) => [...state, { text: "GOOD JOB", athor: "BOT" }]);
      }, 500);
    }
  }, [message]);
  return (
    <div>
      <h1> Chat with BOT</h1>
      <Input
        autoFocus
        value={text}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={hadlSendClick}
        fullWidth={true}
        placeholder="Введите сообщение...."
        endAdornment={
          <InputAdornment position="end">
            <Send onClick={hadlSendClick} />
          </InputAdornment>
        }
      />

      <ul>
        {message.map((message, id) => (
          <li className="message" key={id}>
            {message.text} = {message.athor}
          </li>
        ))}
      </ul>
    </div>
  );
};
