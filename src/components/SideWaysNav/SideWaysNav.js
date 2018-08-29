import React from 'react';
import { Link } from "react-router-dom";
import Moon from '../Maps/Moon/Moon';
import Mars from '../Maps/Mars/Mars';
import Vesta from '../Maps/Vesta/Vesta';
import './SideWaysNav.scss';

function SideWaysNav() {

  return(
    <nav className="SideWaysNavContainer">
      <ul>
        <Link to="/map/moon" component={Moon}><li>Moon</li></Link>
        <Link to="/map/mars" component={Mars}><li>Mars</li></Link>
        <Link to="/map/vesta" component={Vesta}><li>Vesta</li></Link>
      </ul>
    </nav>
  );
}

export default SideWaysNav;
