import React, { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
  const userinitial = {
 customerId: "1",
 customerName:"hello",
emailId:"hello",
mobileNumber:"375",
password:"3rrt"
  };

  const [user, setuser] = useState(userinitial);

  return (
    <UserContext.Provider value={{ user, setuser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
