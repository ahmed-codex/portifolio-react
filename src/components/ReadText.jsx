import { useState } from "react";

const ReadMore = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <p className="text-sm text-gray-400">
      {isOpen ? text : text.slice(0, 90)}

      {text.length > 90 && (
        <span
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-400 cursor-pointer ml-1"
        >
          {isOpen ? " show less" : " read more..."}
        </span>
      )}
    </p>
  );
};

export default ReadMore;
