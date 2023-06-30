import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import {
  fetchMissions,
  selectMissions,
  selectMissionsStatus,
  reserveMission,
  cancelMissionReservation,
} from '../redux/Missions/missionsSlice';
import '../styles/Missions.css';

const Missions = () => {
  const missions = useSelector(selectMissions);
  const missionsStatus = useSelector(selectMissionsStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions]);

  const handleMissionReserve = (id) => {
    dispatch(reserveMission(id));
  };

  const handleMissionCancel = (id) => {
    dispatch(cancelMissionReservation(id));
  };

  return (
    <div>
      {missionsStatus === 'loading' && <p>Loading missions...</p>}
      {missionsStatus === 'failed' && (
        <p>
          Failed to load missions:
          {missions.error}
        </p>
      )}
      {missionsStatus === 'succeeded' && (
        <Table striped bordered hover className="missions-table">
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => {
              const isReserved = mission.reserved;
              return (
                <tr key={mission.mission_id} className="missionItem">
                  <td className="name">{mission.mission_name}</td>
                  <td className="description">{mission.description}</td>
                  <td className={isReserved ? 'is-active' : 'not-active'}>
                    {isReserved ? (
                      <span className="highlight">Active member</span>
                    ) : (
                      <span className="highlight2">Not a member</span>
                    )}
                  </td>
                  <td>
                    {isReserved ? (
                      <div>
                        <button
                          className="btn btn-sm btn-leave"
                          type="button"
                          onClick={() => handleMissionCancel(mission.mission_id)}
                        >
                          Leave Mission
                        </button>
                      </div>
                    ) : (
                      <button
                        className="btn btn-sm btn-join"
                        type="button"
                        onClick={() => handleMissionReserve(mission.mission_id)}
                      >
                        Join Mission
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Missions;
