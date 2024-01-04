import react from "react";
import logo from "./gati.png";
import "./dataOutput.css";

export default function View(item){
    return(
        <div className="view_card">
            <div className="card">
            <div className="name" id="header">
        <p className="name1">GOMATHI AMBAL TYPEWRITING INSTITUTE</p>
        <section className="name2">31 NKG Complex, Sankarankovil Road,</section>
        <section className="name2">Kalugumalai - 628 552.</section>
        <section className="name2">Approval No: 17012</section>
        <section className="name2">Contact No : 7708799828</section>
        <img src={logo} alt="LOGO" className="logo"></img>
    </div>
    <p id="register">Admission Form</p>
    <img src={item.stu} alt="student Image" className="stupic"></img>
    <div className="details">
        <p>Student Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {item.fullName}</p>
        <p>Father's Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {item.fName}</p>
        <p>Date of Birth &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {item.birth}</p>
        <p>Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {item.sex}</p>
        <p>Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {item.add}</p>
        <p>Phone No &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {item.mob}</p>
        <p>Qualifcation &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {item.edu}</p>
        <p>Technical Qualification : {item.scl}</p>
        <p>Course &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {item.cor}</p>
        <p>Joining Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {item.join}</p>

    </div>
            </div>
        </div>
    )
}