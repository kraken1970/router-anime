import React from 'react'
import { gsap } from "gsap";
import withRouteReady from "../App/withRouteReady";
import './Home.scss'

const Home = ({ onReadyNewRoute }) => {
  const [isLoading, setLoader] = React.useState(true);

	  React.useEffect(() => {
    if (!isLoading) {
      gsap.from('.Home__title', { y: -40, opacity: 0, duration: 2 });
      gsap.from('.Home__text', { y: -40, opacity: 0, duration: 2 });
    }
  }, [isLoading]);
  
  React.useEffect(() => {
    // Имитация загрузки с сервера
    setTimeout(() => {
      setLoader(false);
      onReadyNewRoute();
    }, 2000);
  }, [onReadyNewRoute]);
	
	return (
		<section className="Home">
      <h1 className="Home__title">Go on Adventures You've Only Dreamt of…</h1>
      <p className="Home__text">Travel new lands and see magical landscapes with the wide 101° field of view through the large lens. The stable and precise head tracking via the built-in gyro sensor and accelerometer makes sure it's a smooth ride.</p>
    </section>
	)
}

export default withRouteReady(Home, true);
