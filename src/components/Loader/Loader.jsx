import React from "react";
import { Puff } from "react-loader-spinner";

const Loader = () => {
  return (
    <Puff
      height="80"
      width="80"
      radius={1}
      color="#97ce4c"
      ariaLabel="puff-loading"
      wrapperStyle={{ justifyContent: "center" }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
