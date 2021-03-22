import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName(prevValue => {
      if (name === "firstName") {
        return {
          firstName: value,
          lastName: prevValue.lastName
        };
      } else if (name === "lastName") {
        return {
          firstName: prevValue.fName,
          lastName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hi {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          name="firstName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.firstName}
        />
        <input
          name="lastName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
