import React from "react";

const User = () => {
  const user = {
    name: "Omar",
    email: "omar.mohd.ghanayem@gmail.com",
  };
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};
export default User;
