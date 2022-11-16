import React from "react";
import Row from "./Row";

interface Prop {}
const Table = ({ items }) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg scroll-mt-16">
      <table className="w-full text-left text-black">
        <tbody>
          {items.map((item) => (
            <Row key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
