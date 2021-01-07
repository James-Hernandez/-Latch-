import React, { useState,useEffect } from 'react';

const NameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    console.log("i wil rendre every sexonds");
  })

  const onKhai = (e,prop) => {
    setForm({...form,[prop]:e.target.value});
    console.log(form);
  };


  const handleSubmit = (e) => {
    alert('A name was submitted: ' + form);
    e.preventDefault();
  };

  return(
    <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={form.firstName} onChange={(e) => onKhai(e,"firstName")} />
        </label>
        <label>
          Name:
          <input type="text" value={form.lastName} onChange={(e) => onKhai(e,"lastName")} />
        </label>
        <input type="submit" value="Submit" />
      </form>

  )


}
export default NameForm;