import React from "react";
import "./LeftBar.css";
import { profile } from "../data";

function LeftBar({ currentUser, journeydata, user, setUser }) {
  console.log(journeydata);
  return (
    <div className="leftbar">
      <p>{currentUser.description}</p>
      <div className="leftbar-nav">
        <div className="leftbar-nav-button">Journey</div>
        <div className="leftbar-nav-button">Reviews</div>
        <div className="leftbar-nav-button">Photos</div>
        <div className="leftbar-nav-button">Trips</div>
        <div className="leftbar-nav-button">Stats</div>
      </div>
      <div className="leftbar-journey">
        <div style={{ display: "flex" }}>
          <img
            src={currentUser.images?.dp}
            style={{
              height: "50px",
              width: "50px",
              marginRight: "10px",
            }}
          />
          <div className="name">
            <p>
              <b>{currentUser.name}</b>
            </p>
            <p>
              Reviewed <b>{journeydata?.journey?.review.attraction}</b>
            </p>
          </div>
        </div>
        <p className="month">2 month Ago</p>
        <div>
          {journeydata.length != 0 &&
            journeydata?.journey?.review.images.map((ele) => (
              <img
                src={ele}
                style={{
                  height: "50px",
                  width: "70px",
                  marginRight: "10px",
                }}
              />
            ))}
        </div>
        <div>{journeydata?.journey?.review.review}</div>
        <div style={{ margin: "10px 5px 5px 5px" }}>
          ⭐{journeydata?.journey?.review.reaction.helpful} found this review
          helpful
        </div>
      </div>
      <div className="leftbar-journey">
        <div style={{ display: "flex" }}>
          <img
            src={currentUser.images?.dp}
            style={{
              height: "50px",
              width: "50px",
              marginRight: "10px",
            }}
          />
          <div className="name">
            <p>
              <b>{currentUser.name}</b>
            </p>
            <p>
              Commented on {journeydata?.journey?.review.attraction}{" "}
              <b>review</b>
            </p>
          </div>
        </div>
        <p className="month">2 month Ago</p>

        <div>{journeydata?.journey?.review.review}</div>
        <div style={{ margin: "10px 5px 5px 5px" }}>
          🧡{journeydata?.journey?.review.reaction.like} Likes
        </div>
      </div>
      <div className="leftbar-journey">
        <div style={{ display: "flex" }}>
          <img
            src={currentUser.images?.dp}
            style={{
              height: "50px",
              width: "50px",
              marginRight: "10px",
            }}
          />
          <div className="name">
            <p>
              <b>{currentUser.name}</b>
            </p>
            <p>
              Recommended <b>{journeydata?.journey?.review.attraction}</b>
            </p>
          </div>
        </div>
        <p className="month">2 month Ago</p>
        <div style={{ display: "flex" }}>
          <img
            src={journeydata?.journey?.review.images[0]}
            style={{
              height: "100px",
              width: "150px",
              marginRight: "10px",
            }}
          />
          <div>
            <div style={{ display: "flex" }}>
              <h2 style={{ marginTop: "0" }}>
                {journeydata?.journey?.review.attraction}
              </h2>
              <div
                style={{
                  width: "120px",
                  height: "20px",
                  backgroundColor: "green",
                  textAlign: "center",
                  marginTop: "7px",
                  color: "white",
                  paddingBottom: "4px",
                  paddingTop: "-10px",
                  marginLeft: "20px",
                }}
              >
                Add to wishlist
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="leftbar-journey">
        <div style={{ display: "flex" }}>
          <img
            src={currentUser.images?.dp}
            style={{
              height: "50px",
              width: "50px",
              marginRight: "10px",
            }}
          />
          <div className="name">
            <p>
              <b>{currentUser.name}</b>
            </p>
            <p>
              Followed <b>{profile[user == 1 ? 1 : 0].name}</b>
            </p>
          </div>
        </div>
        <p className="month">2 month Ago</p>
        <div
          style={{ display: "flex", cursor: "pointer" }}
          onClick={() => {
            user == 1 ? setUser(2) : setUser(1);
          }}
        >
          <img
            src={profile[user == 1 ? 1 : 0].images.dp}
            style={{
              height: "70px",
              width: "80px",
              marginRight: "10px",
            }}
          />
          <h2 style={{ marginTop: "0" }}>{profile[user == 1 ? 1 : 0].name}</h2>
          <div
            style={{
              width: "90px",
              height: "20px",
              backgroundColor: "green",
              textAlign: "center",
              marginTop: "7px",
              color: "white",
              paddingBottom: "4px",
              paddingTop: "-10px",
              marginLeft: "20px",
            }}
          >
            Follow
          </div>
          <snall style={{ color: "red", marginLeft: "10px" }}>
            click on this container to switch user
          </snall>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
