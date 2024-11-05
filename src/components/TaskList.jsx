import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TaskList.css";
import { useNavigate } from "react-router-dom";

const TaskList = ({ className = "" }) => {
  const [tasksData, setTasksData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [popupTask, setPopupTask] = useState(null);
  const [notificationSetting, setNotificationSetting] = useState(1);
  const [collapsedServers, setCollapsedServers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await axios.get(`https://exe202backend-ppn5.onrender.com/api/v2/task/current_user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasksData(response.data);
      } catch (err) {
        console.log("Error fetching tasks:", err);
        setError(err.response ? err.response.data.error : "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const username = localStorage.getItem("username");
  useEffect(() => {
    if (!username) {
      navigate("/login");
    }
  }, [username, navigate]);

  const checkNotifications = () => {
    const now = new Date();
    const newNotifications = new Set();

    tasksData.data.forEach(server => {
      server.tasks.forEach(task => {
        const endDate = new Date(task.end_date);
        const timeDiff = endDate - now;

        if (!task.success) {
          const warningTime = notificationSetting * 86400000;

          // if (timeDiff <= 0) {
          //   setPopupTask(task); // Mở pop-up cho task đã đến hạn
          // } else if (timeDiff <= warningTime) { // 1 ngày
          //   newNotifications.add(`Task "${task.task_title}" is due in less than 1 day.`);
          // }
        }
      });
    });

    setNotifications([...newNotifications]);
    // setNotifications(uniqueNotifications);
  };

  useEffect(() => {
    const interval = setInterval(checkNotifications, 60000);
    return () => clearInterval(interval);
  }, [tasksData, notificationSetting]);

  const closePopup = () => {
    setPopupTask(null);
  };

  const handleNotificationSettingChange = (event) => {
    setNotificationSetting(event.target.value);
  };

  const toggleServerCollapse = (serverId) => {
    setCollapsedServers((prevState) => ({
      ...prevState,
      [serverId]: !prevState[serverId],
    }));
  };

  if (loading) {
    return (
      <div className="task-list">
        <div className="loader">
          <div className="spinner"></div>
          <span>  Loading...</span> {/* Vẫn giữ lại chữ "Loading..." */}
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="task-list">
        <div className="error">{error}</div>
      </div>
    );
  }

  console.log(tasksData);

  if (!tasksData || !tasksData.success) {
    return (
      <div className={`task-list ${className}`}>
        <div className="error">No tasks data available</div>
      </div>
    );
  }

  return (
    <div className={`task-list ${className}`}>

      <div className="profile-section">
        <h2>Welcome to your project management dashboard, <u>{username || "Guest"}</u>.</h2>
        <h3>You can view and manage servers and their associated tasks here.</h3>
      </div>

      <div className="settings-section">
        <label htmlFor="notification-setting">Notify me before due date (days): </label>
        <select id="notification-setting" value={notificationSetting} onChange={handleNotificationSettingChange}>
          <option value={1}>1 Day</option>
          <option value={2}>2 Days</option>
          <option value={3}>3 Days</option>
          <option value={5}>5 Days</option>
          <option value={7}>1 Week</option>
        </select>
      </div>

      {notifications.length > 0 && (
        <div className="notifications">
          {notifications.map((notification, index) => (
            <div key={index} className="notification-item">{notification}</div>
          ))}
        </div>
      )}

      {tasksData.data && tasksData.data.length > 0 ? (
        tasksData.data.map((server) => (
          <div key={server.server_id} className="server-section">
            <span className="server-tag" onClick={() => toggleServerCollapse(server.server_id)}>
              {server.server_name} {collapsedServers[server.server_id] ? "▼" : "▲"}
            </span>
            <ul className={`task-items ${!collapsedServers[server.server_id] ? "collapsed" : ""}`}>
              {server.tasks.map((task, index) => {
                const now = new Date();
                const isExpired = !task.success && new Date(task.end_date) < now;
                return (
                  <li key={index} className={`task-item ${task.success ? "completed" : isExpired ? "expired" : ""}`}>
                    <div className="task-header">
                      <h3 className="task-title">📌 {task.task_title}</h3>
                      {task.success && <span className="completed-tag">Completed</span>}
                      {isExpired && <span className="expired-tag">Expired</span>}
                    </div>
                    <div className="task-participants">
                      Participants: {task.participants.join(", ")}
                    </div>
                    <p className="task-desc"><span style={{ fontWeight: "bold" }}>Description:</span> {task.task_desc}</p>
                    <div className="task-info">
                      <div className="task-dates">
                        <span><span style={{ fontWeight: "bold" }}>Start:</span> {new Date(task.start_date).toLocaleString()}</span>
                        <span><span style={{ fontWeight: "bold" }}>End:</span> {new Date(task.end_date).toLocaleString()}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))
      ) : (
        <p>Task user not found!</p>
      )}


      {popupTask && (
        <div className="popup">
          <div className="popup-content">
            <h3>Notification for Task: {popupTask.task_title}</h3>
            <p>{popupTask.task_desc}</p>
            <p><strong>This task is overdue!</strong></p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
