import { useEffect } from "react";

/* eslint-disable no-unused-vars */
const useTitle = (title) => {
  useEffect(()=>{
    document.title=`Barbie Doll | ${title}`
  },[title])
};

export default useTitle;
