// src/components/TaskItem.js
import React, { useState } from 'react';

const TaskItem = ({ task, onStatusChange, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority,
    due_date: task.due_date ? task.due_date.substring(0, 10) : ''
  });

  const priorityColors = {
    low: '#28a745',
    medium: '#ffc107',
    high: '#dc3545'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <div className="task-item" style={{ borderLeft: `4px solid ${priorityColors[task.priority]}` }}>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="task-edit-form">

          <div className="form-group">
            <label htmlFor="title"> Title </label>
            <input
              type="text"
              id="title"
              name="title"
              value={editedTask.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description"> Description </label>
            <textarea
              id="description"
              name="description"
              value={editedTask.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="priority"> Priority </label>
            <select
              id="priority"
              name="priority"
              value={editedTask.priority}
              onChange={handleChange}
            >
              <option value="low"> Low </option>
              <option value="medium"> Medium </option>
              <option value="high"> High </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="due_date"> Due Date </label>
            <input
              type="date"
              id="due_date"
              name="due_date"
              value={editedTask.due_date}
              onChange={handleChange}
            />
          </div>

          <div className="task-actions">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={() => setIsEditing(false)}> Cancel </button>
          </div>

        </form>
        
      ) : (

        <>
          <div className="task-content">
            <h3 className="task-title">{task.title}</h3>
            <p className="task-description">{task.description}</p>
            <div className="task-details">

              <span className="task-priority" style={{ color: priorityColors[task.priority] }}>
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
              </span>

              {task.due_date && (
                <span className="task-due-date">
                  Due: {new Date(task.due_date).toLocaleDateString()}
                </span>

              )}

              <span className={`task-status ${task.completed ? 'completed' : 'pending'}`}>
                {task.completed ? 'Completed' : 'Pending'}
              </span>
            </div>
          </div>

          <div className="task-actions">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onStatusChange(task.id, !task.completed)}
              className="task-checkbox"
            />
            <button className="edit-btn" onClick={() => setIsEditing(true)}> Edit </button>
            <button className="delete-btn" onClick={() => onDelete(task.id)}> Delete </button>
          </div>
          
        </>
      )}
    </div>
  );
};

export default TaskItem;