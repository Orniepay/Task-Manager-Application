import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TaskItem from '../components/TaskItem';

const Dashboard = () => {
  // For now, we'll use dummy data
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
    categories: 0
  });
  
  const [recentTasks, setRecentTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    // This would be replaced with actual API calls
    setTimeout(() => {
      setStats({
        totalTasks: 5,
        completedTasks: 2,
        pendingTasks: 3,
        categories: 3
      });
      
      setRecentTasks([
        {
          id: 1,
          title: 'Complete project proposal',
          description: 'Write up the proposal for the new client project',
          priority: 'high',
          completed: false,
          due_date: '2025-05-25'
        },
        {
          id: 2,
          title: 'Weekly team meeting',
          description: 'Prepare agenda for the weekly team sync',
          priority: 'medium',
          completed: false,
          due_date: '2025-05-20'
        },
        {
          id: 3,
          title: 'Update documentation',
          description: 'Review and update the user documentation',
          priority: 'low',
          completed: true,
          due_date: '2025-05-15'
        }
      ]);
      
      setLoading(false);
    }, 1000);
  }, []);

  const handleStatusChange = (taskId, completed) => {
    // This would call the API in a real application
    setRecentTasks(recentTasks.map(task => 
      task.id === taskId ? { ...task, completed } : task
    ));
    
    // Update stats
    const updatedStats = {...stats};
    if (completed) {
      updatedStats.completedTasks++;
      updatedStats.pendingTasks--;
    } else {
      updatedStats.completedTasks--;
      updatedStats.pendingTasks++;
    }
    setStats(updatedStats);
  };

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h2>Task Dashboard</h2>
        <Link to="/tasks" className="view-all-btn">View All Tasks</Link>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p className="stat-number">{stats.totalTasks}</p>
        </div>
        <div className="stat-card">
          <h3>Completed</h3>
          <p className="stat-number">{stats.completedTasks}</p>
        </div>
        <div className="stat-card">
          <h3>Pending</h3>
          <p className="stat-number">{stats.pendingTasks}</p>
        </div>
        <div className="stat-card">
          <h3>Categories</h3>
          <p className="stat-number">{stats.categories}</p>
        </div>
      </div>

      <div className="recent-tasks">
        <div className="section-header">
          <h3>Recent Tasks</h3>
          <Link to="/tasks/new" className="add-task-btn">+ Add Task</Link>
        </div>
        
        {recentTasks.length > 0 ? (
          <div className="task-list">
            {recentTasks.map(task => (
              <TaskItem 
                key={task.id} 
                task={task} 
                onStatusChange={handleStatusChange}
                onDelete={() => {}}  // We'll implement these later
                onEdit={() => {}}
              />
            ))}
          </div>
        ) : (
          <p className="no-tasks">No tasks found. Add your first task to get started!</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;