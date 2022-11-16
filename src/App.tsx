import { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import { useData } from "./utils";

function App() {
  const [reqType, setReqType] = useState("users");
  const { status, data, error, isFetching } = useData(reqType);
  return (
    <div className="w-full">
      <div className="bg-gray-100 top-0 sticky z-10 py-2 shadow-md">
        <Form reqType={reqType} setReqType={setReqType} />
      </div>

      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <Table items={data} />
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  );
}

export default App;
