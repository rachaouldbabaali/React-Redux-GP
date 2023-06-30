import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/MyProfile.module.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocket.rockets);
  const rocketin = [].concat(...rockets);

  const filterRocketName = () => rocketin.filter((rocket) => rocket.reserved);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.missionList}>
        <h2>My Missions</h2>

      </div>

      <div className={styles.rocketsList}>
        <h2>My Rockets</h2>
        <ul className={styles.ul}>
          {filterRocketName().map((rocket) => (
            <li key={rocket.id} className={styles.list}>
              {rocket.name}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default MyProfile;
