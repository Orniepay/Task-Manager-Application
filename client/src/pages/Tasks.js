import React, { useState, useEffect } from 'react';
import TaskItem from '../components/TaskItem';
import TaskForm from '../components/TaskForm';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    status: 'all',
    priority: 'all',
    category: 'all'
  });
  const [showForm, setShowForm] = useState(false);

  // Simulate loading data
  useEffect(() => {
    // This would be replaced with actual API calls
    setTimeout(() => {
      setCategories([
        { id: 1, name: 'Work' },
        { id: 2, name: 'Personal' },
        { id: 3, name: 'Study' }
      ]);
      
      setTasks([
        {
          id: 1,
          title: 'Complete project proposal',
          description: 'Write up the proposal for the new client project',
          priority: 'high',
          completed: false,
          due_date: '2025-05-25',
          category_id: 1
        },
        {
          id: 2,
          title: 'Weekly team meeting',
          description: 'Prepare agenda for the weekly team sync',
          priority: 'medium',
          completed: false,
          due_date: '2025-05-20',
          category_id: 1
        },
        {
          id: 3,
          title: 'Update documentation',
          description: 'Review and update the user documentation',
          priority: 'low',
          completed: true,
          due_date: '2025-05-15',
          category_id: 1
        },
        {
          id: 4,
          title: 'Grocery shopping',
          description: 'Buy ingredients for the week',
          priority: 'medium',
          completed: false,
          due_date: '2025-05-19',
          category_id: 2
        },
        {
          id: 5,
          title: 'Study for exam',
          description: 'Review chapters 5-8',
          priority: 'high',
          completed: false,
          due_date: '2025-05-28',
          category_id: 3
        }
      ]);
      
      setLoading(false);
    }, 1000);
  }, []);

  const handleAddTask = (newTask) => {
    // This would call the API in a real application
    const task = {
      ...newTask,
      id: tasks.length + 1,
      completed: false
    };
    setTasks([...tasks, task]);
    setShowForm(false);
  };

  const handleStatusChange = (taskId, completed) => {
    // This would call the API in a real application
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed } : task
    ));
  };

  const handleEditTask = (taskId, updatedTask) => {
    // This would call the API in a real application
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, ...updatedTask } : task
    ));
  };

  const handleDeleteTask = (taskId) => {
    // This would call the API in a real application
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(task => {
    return (
      (filter.status === 'all' || 
        (filter.status === 'completed' && task.completed) || 
        (filter.status === 'pending' && !task.completed)) &&
      (filter.priority === 'all' || task.priority === filter.priority) &&
      (filter.category === 'all' || task.category_id === parseInt(filter.category))
    );
  });

  if (loading) {
    return <div className="loading">Loading tasks...</div>;
  }

  return (
    <div className="tasks-page">
      <div className="tasks-header">
        <h2>Tasks</h2>
        <button 
          className="add-task-btn" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : '+ Add Task'}
        </button>
      </div>

      {showForm && (
        <TaskForm onSubmit={handleAddTask} categories={categories} />
      )}

      <div className="task-filters">
        <div className="filter-group">
          <label htmlFor="status-filter">Status:</label>
          <select 
            id="status-filter" 
            value={filter.status}
            onChange={(e) => setFilter({...filter, status: e.target.value})}
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="priority-filter">Priority:</label>
          <select 
            id="priority-filter" 
            value={filter.priority}
            onChange={(e) => setFilter({...filter, priority: e.target.value})}
          >
            <option value="all">All</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="category-filter">Category:</label>
          <select 
            id="category-filter" 
            value={filter.category}
            onChange={(e) => setFilter({...filter, category: e.target.value})}
          >
            <option value="all">All</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onStatusChange={handleStatusChange}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
            />
          ))
        ) : (
          <p className="no-tasks">No tasks found with the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default Tasks;