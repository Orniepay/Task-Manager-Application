import React, { useState, useEffect } from 'react';
import CategoryManager from '../components/CategoryManager';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    // This would be replaced with actual API calls
    setTimeout(() => {
      setCategories([
        { id: 1, name: 'Work' },
        { id: 2, name: 'Personal' },
        { id: 3, name: 'Study' }
      ]);
      
      setLoading(false);
    }, 1000);
  }, []);

  const handleAddCategory = (newCategory) => {
    // This would call the API in a real application
    const category = {
      ...newCategory,
      id: categories.length + 1
    };
    setCategories([...categories, category]);
  };

  const handleUpdateCategory = (categoryId, updatedCategory) => {
    // This would call the API in a real application
    setCategories(categories.map(category => 
      category.id === categoryId ? { ...category, ...updatedCategory } : category
    ));
  };

  const handleDeleteCategory = (categoryId) => {
    // This would call the API in a real application
    setCategories(categories.filter(category => category.id !== categoryId));
  };

  if (loading) {
    return <div className="loading">Loading categories...</div>;
  }

  return (
    <div className="categories-page">
      <h2>Manage Categories</h2>
      <p>Create and organize categories to better manage your tasks.</p>
      
      <CategoryManager 
        categories={categories}
        onAddCategory={handleAddCategory}
        onUpdateCategory={handleUpdateCategory}
        onDeleteCategory={handleDeleteCategory}
      />
    </div>
  );
};

export default Categories;