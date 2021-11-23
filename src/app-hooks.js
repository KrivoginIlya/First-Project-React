import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useReducer,
  useLayoutEffect,
} from "react";

export const AppHooks = () => {
  const [message, setMessages] = useState([{ text: "Helloy", athor: "Joe" }]);
  const [text, setValue] = useState("");
  const hadlSendClick = () => {
    setMessages((state) => [...state, { text, athor: "Joe" }]);
    setValue("");
  };
  useEffect(() => {
    console.log("useEffect");
  }, [text]);
  return (
    <div>
      <h1>AppHooks</h1>
      <ul>
        {message.map((message, id) => (
          <li key={id}>
            {message.text} = {message.athor}
          </li>
        ))}
      </ul>
      <input value={text} onChange={(e) => setValue(e.target.value)} />
      <button onClick={hadlSendClick}>send</button>
    </div>
  );
};
