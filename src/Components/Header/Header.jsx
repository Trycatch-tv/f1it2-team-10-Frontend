import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";
import { DivPrincipal } from "./StyledHeader";

export default function Header() {
  return (
    <header>
      <DivPrincipal>
        <div className="div-principal">
          <Link to={"/"} className="div-logo">
            <img src="/src/assets/CitaSync.png" alt="logo" />
            <h1>CitaSync</h1>
          </Link>
          <div className="div-user">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="doctor"
            ></img>
            <div>
              <h2>Dr. Nishant Kamat</h2>
              <h3>Kids Care Clinic</h3>
            </div>
            <TiArrowSortedDown />
          </div>
          <div className="div-date">
            <BsFillCalendar2WeekFill id="calendar" />
            <div>
              <h3>Today</h3>
              <p>02 May 2023</p>
            </div>
            <TiArrowSortedDown style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="div-second">
          <Link to={"/"}>
            <button>New Appoiments</button>
          </Link>
          <Link to={"/"}>
            <button>Home</button>
          </Link>
          <div>
            <IoSettingsSharp />
          </div>
        </div>
      </DivPrincipal>
    </header>
  );
}
