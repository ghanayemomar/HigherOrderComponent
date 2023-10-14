import React from "react";
import User from "./User";
import withLoader from "./withLoader";

const UserWithLoader = withLoader(User);

const App = () => {
  return (
    <div>
      <UserWithLoader />
    </div>
  );
};

export default App;
