import React from "react";
import Button from "./Button";

interface Props {
  reqType: string;
  setReqType: React.Dispatch<React.SetStateAction<string>>;
}

const Form = ({ reqType, setReqType }: Props) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-row gap-1 w-full h-16 border"
    >
      <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="posts" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="comments" reqType={reqType} setReqType={setReqType} />
    </form>
  );
};

export default Form;
