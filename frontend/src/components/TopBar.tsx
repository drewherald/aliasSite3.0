import "../assets/styles/componentStyles/TopBar.css";
import aliasStudios from "../assets/photos/aliasStudios.png";
import { Link } from "react-router-dom";
import styles from '../assets/styles/WhiteFont.module.css'


type TopBarProps = {
  className: string | undefined;
}

const TopBar: React.FC<TopBarProps> =({className = ''}) => {
  return (
    <>
      <div className={className != "" ? `topBarFlex ${className}` : "topBarFlex"}>
        <ul className={`${styles.all}`}>
        <Link to={"/"} id="a">
            <li className="topBarLink">HOME</li>
          </Link>
          <Link to={"/about"} id="a">
            <li className="topBarLink">ABOUT</li>
          </Link>
          <Link to={"/services"} id="a">
            <li className="topBarLink">SERVICES</li>
          </Link>

          <li>
         
          <Link to={"/"} id="a">
           
              <img src={aliasStudios} alt="" className="aliasStudios" />
              </Link>
          </li>
          <Link to={"/projects"} id="a">
            <li className="topBarLink">PROJECTS</li>
          </Link>
          <Link to={"/packages"} id="a">
            <li className="topBarLink">PACKAGES</li>
          </Link>
          <Link to={"/contact"} id="a">
            <li className="topBarLink">
              <div className="tbConnectButton">Connect</div>
            </li>
          </Link>
        </ul>
      </div>
      
      
        
       

    </>
  );
}

export default TopBar;