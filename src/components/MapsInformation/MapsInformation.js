import React from 'react';
import './MapsInformation.scss';
import moon from './images/moon.jpg';
import mars from './images/mars.jpg';
import vesta from './images/vesta.jpg';

function MapsInformation() {
  return(
    <section className="mapsInformationContainer" id="maps">

      <header>
        <h2 className="sectionTitle wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s">Maps</h2>
      </header>

      <div className="grid-container wow slideInLeft" data-wow-duration="1s" data-wow-delay=".5s">
        <img className="mapImage" src={moon} alt="Moon"/>
        <div>
          <h3 className="mapTitle mapInfo">Moon</h3>
          <p className="mapInfo">The Moon is an astronomical body that orbits planet Earth and is Earth's only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary).</p>
          <a href="http://www.spacexplorer.xyz/map/moon"><p className="mapButton">Explore Map</p></a>
        </div>
      </div>

      <div className="grid-container flipped-grid-container wow slideInRight" data-wow-duration="1s" data-wow-delay=".5s">
        <img className="mapImage" src={mars} alt="Mars"/>
        <div>
          <h3 className="mapTitle mapInfo">Mars</h3>
          <p className="mapInfo">Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the "Red Planet" because the reddish iron oxide prevalent on its surface gives it a reddish appearance that is distinctive.</p>
          <a href="http://www.spacexplorer.xyz/map/mars"><p className="mapButton">Explore Map</p></a>
        </div>
      </div>

      <div className="grid-container wow slideInLeft" data-wow-duration="1s" data-wow-delay=".5s">
        <img className="mapImage" src={vesta} alt="Vesta"/>
        <div>
          <h3 className="mapTitle mapInfo">Vesta</h3>
          <p className="mapInfo">Vesta, minor-planet designation 4 Vesta, is one of the largest objects in the asteroid belt, with a mean diameter of 525 kilometres (326 mi).It was discovered by the German astronomer Heinrich Wilhelm Olbers on 29 March 1807 and is named after Vesta, the virgin goddess of home and hearth from Roman mythology.</p>
          <a href="http://www.spacexplorer.xyz/map/vesta"><p className="mapButton">Explore Map</p></a>
        </div>
      </div>

    </section>
  );
}

export default MapsInformation;
