import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/MyProfile.module.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocket.rockets);

  const rocketin = [].concat(...rockets);

  const filterRocketName = () => rocketin.filter((rocket) => rocket.reserved);

  return (
    <div className={styles.profileWrapper}>
      <div className={styles.missionList}>
        <h3>My Missions</h3>

      </div>

      <div className={styles.rocketList}>
        <h3>My Rockets</h3>
        <ul className={styles.listing}>
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
