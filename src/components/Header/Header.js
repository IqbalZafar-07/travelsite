import React from "react";
import "./Header.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { ImFeed } from "react-icons/im";
import { ImLocation } from "react-icons/im";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        {/* <LocationOnIcon style={{ fontSize: "40px" }} /> */}
        <ImLocation style={{ fontSize: "40px" }} />
        <h2>TravelSite.com</h2>
      </div>
      <div className="header-search">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
      <div className="header-nav">
        <div className="header-user">
          <img
            src="https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
            style={{ width: "40px", height: "40px" }}
          />
          <p style={{ marginLeft: "10px" }}>user name</p>
        </div>
        <div className="header-feed">
          <ImFeed
            style={{
              fontSize: "20px",
              paddingTop: "-5px",
              backgroundColor: "white",
              color: "#0485e0",
              paddingRight: "2px",
              paddingLeft: "2px",
              marginRight: "5px",
            }}
          />
          <p>Feeds</p>
        </div>
        <div className="header-chat">
          <ChatBubbleIcon />
          <small
            style={{
              marginLeft: "-7px",
              color: "white",
              marginTop: "-28px",
              backgroundColor: "red",
              borderRadius: "10px",
              width: "20px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            5
          </small>
        </div>
        <div className="header-notification">
          <NotificationsIcon />
          <small
            style={{
              marginLeft: "-10px",
              color: "white",
              marginTop: "-28px",
              backgroundColor: "red",
              borderRadius: "10px",
              width: "20px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            2
          </small>
        </div>
        <div>
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
