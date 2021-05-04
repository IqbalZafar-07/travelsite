import React, { useState, useEffect } from "react";
import "./Profile.css";
import { GoChecklist } from "react-icons/go";
import { ImSmile } from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";

function Profile({ currentUser }) {
  return currentUser ? (
    <div className="profile">
      <div className="profile-background-image">
        <img src={currentUser.images.background} />
      </div>
      <div className="profile-info">
        <div className="profile-info-image">
          <img src={currentUser.images.dp} />
        </div>
        <div className="profile-info-basic">
          <div className="profile-info-basic-name">
            <h1>{currentUser.name}</h1>
            <p
              style={{
                marginTop: "35px",
                marginBottom: "0px",
                marginLeft: "20px",
                backgroundColor: "green",
                height: "20px",
                width: "90px",
                textAlign: "center",
                paddingBottom: "5px",
              }}
            >
              Follow
            </p>
          </div>
          <div className="profile-info-basic-location">
            <p>
              {currentUser.location.state}, {currentUser.location.country}
            </p>
          </div>
          <div className="profile-info-basic-bio">
            <p>{currentUser.bio}</p>
          </div>
          <div className="profile-info-basic-highlights">
            <div className="profile-info-basic-wishlist">
              <GoChecklist style={{ fontSize: "35px", marginRight: "10px" }} />
              <p>Wishlist({currentUser.highlighters.wishlist})</p>
            </div>
            <div className="profile-info-basic-buddies">
              <ImSmile style={{ fontSize: "30px", marginRight: "10px" }} />
              <p>Budy List ({currentUser.highlighters.buddies})</p>
            </div>
            <div className="profile-info-basic-following">
              <FaUserFriends
                style={{ fontSize: "35px", marginRight: "10px" }}
              />
              <p>Following ({currentUser.highlighters.following})</p>
            </div>
            <div className="profile-info-basic-followers">
              <FaUserFriends
                style={{ fontSize: "35px", marginRight: "10px" }}
              />
              <p>Followers ({currentUser.highlighters.followers})</p>
            </div>
          </div>
        </div>
        <div className="profile-info-stats">
          <div>
            <h1>Rank: #{currentUser.rank}</h1>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ paddingTop: "5px", marginRight: "10px" }}>
              <GiNetworkBars />
            </div>
            <p style={{ paddingTop: "10px", marginRight: "10px" }}>
              {currentUser.experience}
            </p>
            <div>
              <progress id="progress" value={currentUser.experience} max="3">
                {" "}
                32%{" "}
              </progress>
            </div>
          </div>
          <div>
            <p>social</p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Profile;
