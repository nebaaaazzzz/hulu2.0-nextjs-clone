import React from "react";
import Thumbnail from "./Thumbnail";

function Results({ results }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2  xl:grid-cols-3 3xl:grid-cols-4 ">
      {results.map((result) => {
        return <Thumbnail key={result.id} result={result} />;
      })}
    </div>
  );
}

export default Results;
