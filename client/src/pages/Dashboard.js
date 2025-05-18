import React from 'react';

const Dashboard = () => {
    return (
        <div className='dashboard-page'>
            <h2>Tasklify Dashboard</h2>
            <div className='dashboard-stats'>

                <div className='stat-card'>
                    <h3>Tasks</h3>
                    <p className='stat-number'>0</p>
                </div>

                <div className='stat-card'>
                    <h3>Completed</h3>
                    <p className='stat-card'>0</p>
                </div>

                <div className='stat-card'>
                    <h3>Categories</h3>
                    <p className='stat-number'>0</p>
                </div>
            </div>
                <div className='dashboard-actions'>
                    <button>Add New Task</button>
                </div>
                <div className='task-list'>
                    <h3>Your Tasks</h3>
                    <p>No tasks found. Add your first task to get started!</p>
                </div>
        </div>
    );
};

export default Dashboard;