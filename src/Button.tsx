import React from "react";

interface Props {
  buttonText: string;
  reqType: string;
  setReqType: React.Dispatch<React.SetStateAction<string>>;
}

const Button = ({ buttonText, reqType, setReqType }: Props) => {
  return (
    <button
      className={`${
        buttonText === reqType ? "bg-yellow-500" : ""
      } bg-blue-500 border w-full text-2xl`}
      type="button"
      onClick={() => setReqType(buttonText)}
    >
      {buttonText}
    </button>
  );
};

export default Button;
