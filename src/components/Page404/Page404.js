import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h2>404 - Page not found</h2>
      <div>
        <Link to='/inbox'>Back to homepage</Link>
      </div>
    </div>
  );
};

export default Page404;
