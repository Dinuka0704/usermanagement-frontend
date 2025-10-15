import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";

const UserForm = ({addUser, submited, data,isEdit,updateUser}) => {
  const [id, setId] = useState("0");
  const [name, setName] = useState("");

  useEffect(()=> {
    if (!submited) {
      setId(0);
      setName("");
    }
  },[submited])

  useEffect(() => {
    if(data && data.id && data.id !== 0){
      setId(data.id);
      setName(data.name);
    }
  },[data]);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#f5f5f561",
        marginBottom: "20px",
        display: "block",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Grid item xs={12}>
        <Typography component={"h1"} sx={{ color: "#000000ff" }}>
          User Form
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex", paddingRight: "20px" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#000000ff",
            marginRight: "20px",
            fontSize: "16px",
            display: "block",
          }}
        >
          ID
        </Typography>
        <Input
          type="number"
          id="id"
          name="id"
          sx={{ width: "400px", marginLeft: "27px" }}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex", paddingRight: "20px" }}>
        <Typography
          component={"label"}
          htmlFor="name"
          sx={{
            color: "#000000ff",
            marginRight: "20px",
            fontSize: "16px",
            display: "block",
          }}
        >
          Name
        </Typography>
        <Input
          type="text"
          id="name"
          name="name"
          sx={{ width: "400px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>

      <Button
        sx={{
          margin: "auto",
          marginBottom: "20px",
          backgroundColor: "#0062ffff",
          borderRadius: 0,
          color: "#00000080",
          marginLeft: "15px",
          marginTop: "20px",
          "&:hover": { opacity: 0.8, backgroundColor: "#defbffff" },
        }}
        variant="contained"
        

        onClick={()=> isEdit? updateUser({id,name}) : addUser({id,name})}
      >
        {isEdit? 'Update' : 'Add User'}
      </Button>
    </Grid>
  );
};

export default UserForm;
