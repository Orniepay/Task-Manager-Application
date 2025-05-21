export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  // At least 6 characters
  return password.length >= 6;
};

export const validateTaskForm = (task) => {
  const errors = {};
  
  if (!task.title.trim()) {
    errors.title = 'Title is required';
  }
  
  if (task.title.length > 100) {
    errors.title = 'Title must be less than 100 characters';
  }
  
  if (task.description && task.description.length > 500) {
    errors.description = 'Description must be less than 500 characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};