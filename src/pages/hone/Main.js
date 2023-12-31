import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const Containers = styled(Box)({
  marginTop: "100px",
  border: "2px solid red",
  display: "flex",
  width: "25rem",
  flexDirection: "column",
  padding: "2rem",
  textAlign: "center",
  position: "absolute",
  top: "10rem",
  left: "30rem",
  borderRadius: "50px",
});

function Main() {
  const copyright = String.fromCodePoint(0x00a9);
  const year = "2023";
  const myName = `Harshal Honde`;
  const [roomCode, setRoomcode] = useState("");
  const navigate = useNavigate();

  const FormSubmit = (ev) => {
    ev.preventDefault();
    navigate(`/room/${roomCode}`);
  };

  const randomNumber = () => {
    let num = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("random_no").innerHTML = num;
    alert("The id which is generated by generator you should copy and paste into input field and the host will share the id to other persons who to be in call and the other person with copy same id which is given by host")
  };

  return (
    <div className="home-page">
      <AppBar>
        <Toolbar style={{ backgroundColor: "red", position: "sticky" }}>
          <PeopleAltIcon />
          <Typography variant="h5">
            Harshal's Video Conference Application
          </Typography>

          <a href="https://harshalhonde.netlify.app">
            <PersonIcon
              style={{
                border: "2px solid black",
                borderRadius: "50%",
                color: "black",
                marginLeft: "50rem",
              }}
            />
          </a>
          {`${copyright} ${year} ${myName}`}
        </Toolbar>
      </AppBar>

      <Box
        style={{
          border: "2px solid red",
          marginTop: "7rem",
          maxWidth: "30%",
          padding: "1rem",
          position: "absolute",
          left: "40rem",
          boxShadow: "5px 5px 10px red",
          borderRadius: "20px",
          fontWeight:'bold'
        }}
      >
        <div
          style={{
            border: "2px solid #ccc",
            marginBottom: "10px",
            borderRadius: "10px",
            color: "red",
          }}
          id="random_no"
        ></div>
        <button
          style={{
            padding: "10px",
            border: "2px solid red",
            borderRadius: "20px",
            backgroundColor: "red",
            color: "whitesmoke",
          }}
          onClick={randomNumber}
        >
          Generate the ID
        </button>
      </Box>

      <form onSubmit={FormSubmit}>
        <Containers>
          <label
            style={{
              fontSize: "2rem",
              marginBottom: "3rem",
              color: "red",
              fontWeight: "bolder",
            }}
          >
            Room Code
          </label>
          <input
            style={{
              padding: "1rem",
              border: "2px solid red",
              textAlign: "center",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              marginBottom: "2rem",
            }}
            type="text"
            value={roomCode}
            required
            placeholder="Enter Room ID"
            onChange={(e) => setRoomcode(e.target.value)}
          />
          <button
            style={{
              border: "2px solid red",
              padding: "10px",
              color: "whitesmoke",
              backgroundColor: "red",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          >
            Join room
          </button>
        </Containers>
      </form>
    </div>
  );
}

export default Main;
