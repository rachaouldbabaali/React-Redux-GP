import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import planet from '../images/planet.png';

const Navbar = () => (
  <>
    <nav className={styles.Navbar}>
      <img src={planet} alt="My logo" className={styles.logo} />
      <h1 className={styles.heading}>Space Travelers&apos; Hub</h1>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" ClassName={styles.activeLink}>
            Rockets
          </NavLink>
        </li>

        <li>
          <NavLink to="/missions" ClassName={styles.activeLink}>
            Missions
          </NavLink>
        </li>

        <li>
          <NavLink to="/my-profile" ClassName={styles.activeLink}>
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
    <hr className={styles.horizontal} />
  </>
);

export default Navbar;
