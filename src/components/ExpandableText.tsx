import React, { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= maxChar) {
    return <p>{children}</p>;
  }

  const text = isExpanded ? children : children.substring(0, maxChar);

  return (
    <>
      <div>{text}</div>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "less" : "More"}
      </button>
      ;
    </>
  );
};

export default ExpandableText;
