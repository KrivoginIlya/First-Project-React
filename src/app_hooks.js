import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useReducer,
  useLayoutEffect,
} from "react";
import { styles } from "./style.css";

export const AppHooks = () => {
  const [message, setMessages] = useState([{ text: "Helloy", athor: "Joe" }]);
  const [text, setValue] = useState("");
  // const [countSend, setCountSend] = useState(0);
  const hadlSendClick = () => {
    // setCountSend(countSend + 1);
    setMessages((state) => [...state, { text, athor: "Joe" }]);
    setValue("");
  };
  useEffect(() => {
    console.log(message.length);
    const lastMessage = message[message.length - 1];
    if (lastMessage?.athor === "Joe") {
      setTimeout(() => {
        setMessages((state) => [...state, { text: "GOOD JOB", athor: "BOT" }]);
      }, 500);
    }
    // setTimeout(() => {
    //   setMessages((state) => [...state, {text: "GOOD JOB", athor: "BOT"}]);
    // }, 500);
  }, [message]);
  return (
    <div>
      <h1>AppHooks. Chat with BOT</h1>
      <input value={text} onChange={(e) => setValue(e.target.value)} />
      <button onClick={hadlSendClick}>send</button>

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
