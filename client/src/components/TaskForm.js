// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onSubmit, categories }) => {

  const initialState = {
    title: '',
    description: '',
    priority: 'medium',
    due_date: '',
    category_id: categories.length > 0 ? categories[0].id : ''
  };

  const [task, setTask] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask(initialState);
  };

  return (
    <div className="task-form-container">

      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit} className="task-form">

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={task.priority}
              onChange={handleChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="due_date">Due Date</label>
            <input
              type="date"
              id="due_date"
              name="due_date"
              value={task.due_date}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="form-group">
          <label htmlFor="category_id">Category</label>
          <select
            id="category_id"
            name="category_id"
            value={task.category_id}
            onChange={handleChange}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
            {categories.length === 0 && (
              <option value="">No categories available</option>
            )}
          </select>
        </div>

        <button type="submit" className="submit-btn">Add Task</button>
        
      </form>
    </div>
  );
};

export default TaskForm;
