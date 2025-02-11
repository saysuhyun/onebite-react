import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // useEffect에서 리턴하는 함수  = 클린업 , 정리 함수
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
