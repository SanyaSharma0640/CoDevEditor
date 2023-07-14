import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import sideImg from "./7090088.png";

const Home = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("ROOM ID & username is required");
      return;
    }

    // Redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };
  return (
    <div className="wrap">
      <div className="sideImg">
        <img src={sideImg} />
      </div>
      <div className="homePageWrapper">
        <div className="formWrapper">
          <img className="homePageLogo" src={logo} alt="swap-code-logo" />
          <h4 className="mainLabel">Enter the ROOM ID</h4>
          <div className="inputGroup">
            <input
              type="text"
              className="inputBox"
              placeholder="ROOM ID"
              onChange={(e) => setRoomId(e.target.value)}
              value={roomId}
              onKeyUp={handleInputEnter}
            />
            <input
              type="text"
              className="inputBox"
              placeholder="USERNAME"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              onKeyUp={handleInputEnter}
            />
            <button className="btn btnJoin" onClick={joinRoom}>
              Join
            </button>
            <span className="createInfo">
              If you don't have a room create &nbsp;
              <button onClick={createNewRoom} href="" className="btnNew">
                New Room
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
