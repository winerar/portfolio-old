import { TextTyperProps } from "../../common/types";
import { useState, useEffect } from "react";

const TextTyper: React.FC<TextTyperProps> = ({
  text,
  interval,
  delay = 0,
}): JSX.Element => {
  const [typedText, setTypedText] = useState("");

  const typingRender = (text: string, interval: number) => {
    let localTyping = "";
    let localTypingIndex = 0;
    if (text) {
      const printer = setInterval(() => {
        if (localTypingIndex < text.length) {
          setTypedText((localTyping += text[localTypingIndex]));
          localTypingIndex++;
        } else {
          localTypingIndex = 0;
          localTyping = "";
          clearInterval(printer);
        }
      }, interval);
    }
  };

  useEffect(() => {
    setTimeout(() => typingRender(text, interval), delay);
  }, [text, interval, delay]);

  return (
    <span
      className={
        typedText === text || typedText === "" ? undefined : "text-typer"
      }
    >
      {typedText}
    </span>
  );
};

export default TextTyper;
