import { useState } from "react";
import { DataContext } from "./mainContext";
const DataState = (props) => {
  const [data, setData] = useState();

  const [originalData, setOriginalData] = useState();

  const hideHandler = () => {
    setHide(true);
  };

  const showHandler = () => {
    setHide(false);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        originalData,
        isHide,
        hideHandler,
        showHandler,
        setData,
        setOriginalData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
