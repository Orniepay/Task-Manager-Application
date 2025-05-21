export const formatDate = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const getRelativeTime = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = date - now;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) {
    return `${Math.abs(diffDays)} days ago`;
  } else if (diffDays === 0) {
    return 'Today';
  } else if (diffDays === 1) {
    return 'Tomorrow';
  } else {
    return `In ${diffDays} days`;
  }
};

export const isOverdue = (dateString) => {
  if (!dateString) return false;
  
  const now = new Date();
  const date = new Date(dateString);
  return date < now;
};