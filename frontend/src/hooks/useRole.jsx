import { useContext } from "react";
import AuthProvider from "../providers/AuthProvider";

const useRole = () => {
  const user = useContext(AuthProvider);

  //   FETCH USER ROLE FROM DATABASE USING EMAIL
  //   THEN SET ROLE

  // ROLE CAN BE EITHER seller OR buyer
  const userRole = "seller";

  return { userRole };
};

export default useRole;
