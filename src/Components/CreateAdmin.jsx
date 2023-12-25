import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./CreateAdmin.css";

function CreateAdmin() {
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const handleChangeOfFields = (event) => {
    const { id, value } = event.target;
    setNewAdmin((prevAdmin) => ({
      ...prevAdmin,
      [id]: value,
    }));
  };

  const handleClickCreateAdmin = async (e) => {
    e.preventDefault();

    if (newAdmin.password !== newAdmin.confirmPass) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/login/admin', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAdmin),
      });

      if (!response.ok) {
        throw new Error(HTTP error! Status: ${response.status});
      }

      const result = await response.json();
       window.confirm(result);
      console.log('Response from server:', result);
    } catch (error) {
      console.error('Error sending data to server:', error.message);
    }
  };
  return (
    <>
      <div className="container-create-admin">
        <div className="form-create-admin">
          <h1 className="header-create-admin">Create Admin Form</h1>

          {/* Name Field */}
          {/* <label
            className="label-create-admins"
            htmlFor="name-field-create-admin"
          >
            Enter name:
          </label>
          <Box
            className="box-create-admin"
            component="form"
            sx={{
              "& > :not(style)": { m: 0, width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              onChange={handleChangeOfFields}
            />
          </Box> */}
          {/* Email Field */}
          <label
            className="label-create-admins"
            htmlFor="email-field-create-admin"
          >
            Enter email:
          </label>
          <Box
            className="box-create-admin"
            component="form"
            sx={{
              "& > :not(style)": { m: 0, width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              onChange={handleChangeOfFields}
            />
          </Box>

          <label
            className="label-create-admins"
            htmlFor="setPass-field-create-admin"
          >
            Set Password
          </label>
          <Box
            className="box-create-admin"
            component="form"
            sx={{
              "& > :not(style)": { m: 0, width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="password"
              label="Set pass"
              variant="outlined"
              onChange={handleChangeOfFields}
            />
          </Box>

          <label
            className="label-create-admins"
            htmlFor="confirmPass-field-create-admin"
          >
            Confirm Password
          </label>
          <Box
            className="box-create-admin"
            component="form"
            sx={{
              "& > :not(style)": { m: 0, width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="confirmPass"
              label="Confirm pass"
              variant="outlined"
              onChange={handleChangeOfFields}
            />
          </Box>

          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={handleClickCreateAdmin}>
              Create Admin
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
}

export default CreateAdmin;
