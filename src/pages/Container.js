
import React from "react";
import UserProfile from "./UserProfile";
import Calendar from "./Calendar";
import Weather from "./Weather";
import Dashboard from "./Dashboard";
import StatesDD from "./StatesDD";
import role from "../roleWrapper";

export default function Container (props) {
    return (
        <div style={{display: "flex", direction: "rtl", width: "100%", height: "100%"}}>
            <div style={{color: "#fff", backgroundColor: "blue", width: 200, height: "100vh", paddingRight: 24}}>
                <p onClick={() => {
                    if (role.value === "admin") {
                        props.pageChangerHook("/dashboard/admin/archive");
                    } else if (role.value === "employee") {
                        props.pageChangerHook("/dashboard/employee/forecast");
                    }
                }}>{role.value === "admin" ? "آرشیو" : "پیشبینی"}</p>
                <p onClick={() => {
                    props.pageChangerHook("/dashboard/employee/weather");
                }}>آب و هوا</p>
            </div>
            <div style={{width: "calc(100% - 200px)", height: "100vh"}}>
                {
                    props.child === "/dashboard/admin/archive" ?
                    (<div><StatesDD/><Calendar pageChangerHook={props.pageChangerHook}/></div>) :
                    (props.child === "/dashboard/admin/weather" ||
                    props.child === "/dashboard/employee/weather") ? <div><Weather/></div> :
                    props.child === "/dashboard/employee/forecast" ? <UserProfile/> :
                    props.child === "/dashboard/admin/dashboard" ? <Dashboard pageChangerHook={props.pageChangerHook}/> :
                    null
                }
            </div>
        </div>
    );
}