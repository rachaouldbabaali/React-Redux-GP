import React from 'react';
import { useSelector } from 'react-redux';
import { selectMissions } from '../redux/Missions/missionsSlice';
import styles from '../styles/MyProfile.module.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocket.rockets);
  const rocketin = [].concat(...rockets);
  const missions = useSelector(selectMissions);

  const filterRocketName = () => rocketin.filter((rocket) => rocket.reserved);

  const filterMissionByName = () => missions.filter((mission) => mission.reserved);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.rocketsList}>
        <h2>My Missions</h2>
        <ul className={styles.ul}>
          {filterMissionByName().map((mission) => (
            <li key={mission.mission_id} className={styles.list}>
              {mission.mission_name}
            </li>
          ))}
        </ul>
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
