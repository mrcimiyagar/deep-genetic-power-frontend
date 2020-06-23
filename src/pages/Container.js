
import React from "react";
import UserProfile from "./UserProfile";
import Calendar from "./Calendar";

export default function Container (props) {
    return (
        <div style={{display: "flex", direction: "rtl", width: "100%", height: "100%"}}>
            <div style={{backgroundColor: "blue", width: 200, height: "100vh"}}>

            </div>
            <div style={{width: "calc(100% - 200px)", height: "100vh"}}>
                <Calendar/>
            </div>
        </div>
    );
}