import React, { useEffect} from "react";
import Topnav from "../components/Navigations/Topnav";
import Sidenav from "../components/Navigations/Sidenav";
import TopTeen from "../components/Topteen/TopTeenRequests"
export default function Home() {
  
  // const navigate = useNavigate();

  // useEffect(() => {
    
  //   if (localStorage.getItem("user")) {
  //   } else {
  //     console.log("siri not available");
  //     navigate("/login");
  //   }
  // }, []);

  // const navigate= useNavigate();

  return (
    <div>
     <Topnav/>
     <Sidenav/>
     <TopTeen/>
      
    </div>
  );
}