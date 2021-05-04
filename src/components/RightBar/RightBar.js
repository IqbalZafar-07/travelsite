import React, { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoBag } from "react-icons/io5";
import EditIcon from "@material-ui/icons/Edit";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import "./RightBar.css";

function RightBar({ currentUser, journeydata }) {
  return (
    <div className="rightbar">
      <div className="rightbar-nav">
        <div>
          <MdLocationOn style={{ fontSize: "50px", marginRight: "10px" }} />
          <p>Journy</p>
        </div>
        <div>
          <EditIcon style={{ fontSize: "40px", marginRight: "10px" }} />
          <p>Reviews</p>
        </div>
        <div>
          <CameraAltIcon style={{ fontSize: "40px", marginRight: "10px" }} />
          <p>Photos</p>
        </div>
        <div>
          <IoBag style={{ fontSize: "40px", marginRight: "10px" }} />
          <p>Trips</p>
        </div>
        <div>
          <EqualizerIcon
            style={{
              fontSize: "40px",
              marginRight: "10px",
              borderLeft: "3px solid black",
              borderBottom: "3px solid black",
            }}
          />
          <p>Stats</p>
        </div>
      </div>
      <div className="right-review">
        <p
          style={{
            padding: "5px",
            backgroundColor: "lightgray",
            textAlign: "center",
            marginBottom: "0",
          }}
        >
          Popular reviews by {currentUser.name}
        </p>
        <div className="right-review-overflow">
          {Array(30)
            .fill("Reviewed")
            .map((ele) => {
              return (
                <div className="right-review-detail">
                  <div>
                    <img
                      src={currentUser.images?.dp}
                      style={{
                        height: "50px",
                        width: "50px",
                        marginRight: "10px",
                      }}
                    />
                  </div>
                  <div>
                    <p>
                      <b>{currentUser?.name}</b> {ele}{" "}
                      <b>{journeydata?.journey?.review.attraction}</b>
                    </p>
                    <p>2 Months Ago</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="right-review">
        <p
          style={{
            padding: "5px",
            backgroundColor: "lightgray",
            textAlign: "center",
            marginBottom: "0",
          }}
        >
          Popular trips by {currentUser.name}
        </p>
        <div className="right-review-overflow">
          {Array(30)
            .fill("added trip to")
            .map((ele) => {
              return (
                <div className="right-review-detail">
                  <div>
                    <img
                      src={currentUser.images?.dp}
                      style={{
                        height: "50px",
                        width: "50px",
                        marginRight: "10px",
                      }}
                    />
                  </div>
                  <div>
                    <p>
                      <b>{currentUser?.name}</b> {ele}{" "}
                    </p>
                    <b>{journeydata?.journey?.review.attraction}</b> 2 Months
                    Ago
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default RightBar;
