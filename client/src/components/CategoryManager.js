import React, { useState } from 'react';

const CategoryManager = ({ categories, onAddCategory, onUpdateCategory, onDeleteCategory }) => {
  const [newCategory, setNewCategory] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const [editedName, setEditedName] = useState('');

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (newCategory.trim()) {
      onAddCategory({ name: newCategory });
      setNewCategory('');
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editedName.trim() && editingCategory) {
      onUpdateCategory(editingCategory.id, { name: editedName });
      setEditingCategory(null);
      setEditedName('');
    }
  };

  const startEditing = (category) => {
    setEditingCategory(category);
    setEditedName(category.name);
  };

  return (
    <div className="category-manager">
      <h2>Categories</h2>
      
      <form onSubmit={handleAddSubmit} className="category-form">
        <div className="form-group category-input-group">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="New category name"
            required
          />
          <button type="submit">Add</button>
        </div>
      </form>
      
      <div className="category-list">
        {categories.length === 0 ? (
          <p>No categories yet. Add one to organize your tasks!</p>
        ) : (
          categories.map(category => (
            <div key={category.id} className="category-item">
              {editingCategory && editingCategory.id === category.id ? (
                <form onSubmit={handleEditSubmit} className="category-edit-form">
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    required
                  />
                  <div className="category-actions">
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setEditingCategory(null)}>
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <span className="category-name">{category.name}</span>
                  <div className="category-actions">
                    <button onClick={() => startEditing(category)}>Edit</button>
                    <button onClick={() => onDeleteCategory(category.id)}>Delete</button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryManager;