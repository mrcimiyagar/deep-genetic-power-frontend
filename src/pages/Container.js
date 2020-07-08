
import React from "react";
import UserProfile from "./UserProfile";
import Calendar from "./Calendar";
import Weather from "./Weather";
import Dashboard from "./Dashboard";
import StatesDD from "./StatesDD";

export default function Container (props) {
    return (
        <div style={{display: "flex", direction: "rtl", width: "100%", height: "100%"}}>
            <div style={{backgroundColor: "blue", width: 200, height: "100vh"}}>

            </div>
            <div style={{width: "calc(100% - 200px)", height: "100vh"}}>
                {
                    props.child === "/dashboard/admin/archive" ?
                    (<div><StatesDD/><Calendar pageChangerHook={props.pageChangerHook}/></div>) :
                    (props.child === "/dashboard/admin/weather" ||
                    props.child === "/dashboard/employee/weather") ? <Weather/> :
                    props.child === "/dashboard/employee/forecast" ? <UserProfile/> :
                    props.child === "/dashboard/admin/dashboard" ? <Dashboard pageChangerHook={props.pageChangerHook}/> :
                    null
                }
            </div>
        </div>
    );
}