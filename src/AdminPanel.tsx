import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, Edit3, Save, X, LogIn, LogOut, ChevronDown, ChevronUp, Search, Eye, EyeOff, ArrowLeft, ImageIcon } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  sort_order: number;
}

interface MenuItem {
  id: number;
  category_id: number;
  category_name: string;
  name: string;
  price: number;
  description: string;
  image: string;
  is_active: boolean;
  sort_order: number;
}

const API_BASE = '/api/admin';

export default function AdminPanel() {
  const [token, setToken] = useState<string | null>(localStorage.getItem('admin_token'));
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddItem, setShowAddItem] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [newCategory, setNewCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  
  const [newItem, setNewItem] = useState({
    category_id: 0,
    name: '',
    price: 0,
    description: '',
    image: ''
  });

  const headers = useCallback(() => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }), [token]);

  const showNotify = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // ─── AUTH ─────────────────────────────────────────────
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);
        localStorage.setItem('admin_token', data.token);
      } else {
        setLoginError(data.error || 'Login failed');
      }
    } catch {
      setLoginError('Server error');
    }
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('admin_token');
  };

  // ─── DATA FETCHING ───────────────────────────────────
  const fetchData = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const [catRes, itemRes] = await Promise.all([
        fetch(`${API_BASE}/categories`, { headers: headers() }),
        fetch(`${API_BASE}/items`, { headers: headers() })
      ]);
      if (catRes.status === 401 || itemRes.status === 401) {
        handleLogout();
        return;
      }
      setCategories(await catRes.json());
      setItems(await itemRes.json());
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, [token, headers]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // ─── CATEGORY ACTIONS ────────────────────────────────
  const addCategory = async () => {
    if (!newCategory.trim()) return;
    try {
      const res = await fetch(`${API_BASE}/categories`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({ name: newCategory.trim() })
      });
      if (res.ok) {
        showNotify(`Category "${newCategory}" added!`, 'success');
        setNewCategory('');
        setShowAddCategory(false);
        fetchData();
      } else {
        showNotify('Failed to add category', 'error');
      }
    } catch {
      showNotify('Server error', 'error');
    }
  };

  const deleteCategory = async (id: number, name: string) => {
    if (!confirm(`Delete category "${name}" and ALL its items? This cannot be undone.`)) return;
    try {
      const res = await fetch(`${API_BASE}/categories/${id}`, {
        method: 'DELETE',
        headers: headers()
      });
      if (res.ok) {
        showNotify(`Category "${name}" deleted`, 'success');
        if (selectedCategory === id) setSelectedCategory(null);
        fetchData();
      }
    } catch {
      showNotify('Failed to delete', 'error');
    }
  };

  // ─── ITEM ACTIONS ────────────────────────────────────
  const addItem = async () => {
    if (!newItem.name.trim() || !newItem.price || !newItem.category_id) {
      showNotify('Fill in name, price, and select a category', 'error');
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/items`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(newItem)
      });
      if (res.ok) {
        showNotify(`"${newItem.name}" added to menu!`, 'success');
        setNewItem({ category_id: selectedCategory || 0, name: '', price: 0, description: '', image: '' });
        setShowAddItem(false);
        fetchData();
      }
    } catch {
      showNotify('Failed to add item', 'error');
    }
  };

  const updateItem = async () => {
    if (!editingItem) return;
    try {
      const res = await fetch(`${API_BASE}/items/${editingItem.id}`, {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify({
          name: editingItem.name,
          price: editingItem.price,
          description: editingItem.description,
          image: editingItem.image,
          is_active: editingItem.is_active,
          category_id: editingItem.category_id
        })
      });
      if (res.ok) {
        showNotify(`"${editingItem.name}" updated!`, 'success');
        setEditingItem(null);
        fetchData();
      }
    } catch {
      showNotify('Failed to update', 'error');
    }
  };

  const deleteItem = async (id: number, name: string) => {
    if (!confirm(`Delete "${name}" from the menu?`)) return;
    try {
      const res = await fetch(`${API_BASE}/items/${id}`, {
        method: 'DELETE',
        headers: headers()
      });
      if (res.ok) {
        showNotify(`"${name}" removed from menu`, 'success');
        fetchData();
      }
    } catch {
      showNotify('Failed to delete', 'error');
    }
  };

  const toggleItemActive = async (item: MenuItem) => {
    try {
      await fetch(`${API_BASE}/items/${item.id}`, {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify({ is_active: !item.is_active })
      });
      showNotify(`"${item.name}" ${!item.is_active ? 'shown' : 'hidden'} on menu`, 'success');
      fetchData();
    } catch {
      showNotify('Failed to toggle', 'error');
    }
  };

  // ─── FILTERING ───────────────────────────────────────
  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory ? item.category_id === selectedCategory : true;
    const matchesSearch = searchQuery
      ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category_name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  // ─── LOGIN PAGE ──────────────────────────────────────
  if (!token) {
    return (
      <div className="min-h-screen bg-[#1A0F10] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h1 className="font-cinzel text-4xl text-[#D4AF37] mb-2">Derawar Resort</h1>
            <p className="text-[#D3C5B3] font-inter text-sm tracking-widest uppercase">Admin Panel</p>
          </div>
          
          <form onSubmit={handleLogin} className="bg-[#2A1718] border border-[#D4AF37]/30 rounded-2xl p-8 shadow-2xl">
            <div className="mb-6">
              <label className="block text-[#D3C5B3] font-inter text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-[#1A0F10] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-[#FDF5E6] font-inter focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="Enter admin password"
                autoFocus
              />
            </div>
            {loginError && (
              <p className="text-red-400 text-sm mb-4 font-inter">{loginError}</p>
            )}
            <button
              type="submit"
              className="w-full bg-[#D4AF37] text-[#1A0F10] py-3 rounded-lg font-cinzel tracking-widest hover:bg-[#A68A29] transition-colors flex items-center justify-center gap-2"
            >
              <LogIn size={18} />
              Login
            </button>
          </form>
          
          <div className="text-center mt-6">
            <a href="/" className="text-[#D4AF37]/60 hover:text-[#D4AF37] text-sm font-inter flex items-center justify-center gap-1 transition-colors">
              <ArrowLeft size={14} /> Back to Menu
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  // ─── ADMIN DASHBOARD ────────────────────────────────
  return (
    <div className="min-h-screen bg-[#1A0F10] text-[#FDF5E6]">
      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 right-4 z-[100] px-6 py-3 rounded-xl shadow-2xl font-inter text-sm ${
              notification.type === 'success'
                ? 'bg-green-900/90 border border-green-500/50 text-green-200'
                : 'bg-red-900/90 border border-red-500/50 text-red-200'
            }`}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="bg-[#2A1718] border-b border-[#D4AF37]/30 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="font-cinzel text-2xl text-[#D4AF37]">🏰 Admin Panel</h1>
            <span className="text-[#D3C5B3] text-sm font-inter hidden sm:block">Derawar Resort Menu Manager</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="px-4 py-2 border border-[#D4AF37]/30 rounded-lg text-[#D4AF37] text-sm font-inter hover:bg-[#D4AF37]/10 transition-colors flex items-center gap-1"
            >
              <Eye size={14} /> View Menu
            </a>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-900/50 border border-red-500/30 rounded-lg text-red-300 text-sm font-inter hover:bg-red-900 transition-colors flex items-center gap-1"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Categories', value: categories.length, color: '#D4AF37' },
            { label: 'Total Items', value: items.length, color: '#4CAF50' },
            { label: 'Active Items', value: items.filter(i => i.is_active).length, color: '#2196F3' },
            { label: 'Hidden Items', value: items.filter(i => !i.is_active).length, color: '#f44336' },
          ].map((stat, i) => (
            <div key={i} className="bg-[#2A1718] border border-[#D4AF37]/20 rounded-xl p-4 text-center">
              <p className="font-cinzel text-3xl" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-[#D3C5B3] text-sm font-inter mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* ─── SIDEBAR: CATEGORIES ──────────────────── */}
          <div className="lg:col-span-1">
            <div className="bg-[#2A1718] border border-[#D4AF37]/20 rounded-xl overflow-hidden sticky top-20">
              <div className="p-4 border-b border-[#D4AF37]/20 flex items-center justify-between">
                <h2 className="font-cinzel text-lg text-[#D4AF37]">Categories</h2>
                <button
                  onClick={() => setShowAddCategory(!showAddCategory)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Add Category Input */}
              <AnimatePresence>
                {showAddCategory && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-3 border-b border-[#D4AF37]/10 flex gap-2">
                      <input
                        type="text"
                        value={newCategory}
                        onChange={e => setNewCategory(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && addCategory()}
                        placeholder="Category name"
                        className="flex-1 bg-[#1A0F10] border border-[#D4AF37]/30 rounded-lg px-3 py-2 text-sm text-[#FDF5E6] font-inter focus:outline-none focus:border-[#D4AF37]"
                        autoFocus
                      />
                      <button
                        onClick={addCategory}
                        className="px-3 py-2 bg-[#D4AF37] text-[#1A0F10] rounded-lg text-sm hover:bg-[#A68A29] transition-colors"
                      >
                        Add
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Category List */}
              <div className="max-h-[60vh] overflow-y-auto">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-4 py-3 text-sm font-inter border-b border-[#D4AF37]/10 transition-colors flex items-center justify-between ${
                    selectedCategory === null ? 'bg-[#D4AF37]/10 text-[#D4AF37]' : 'text-[#D3C5B3] hover:bg-[#D4AF37]/5'
                  }`}
                >
                  <span>All Items</span>
                  <span className="text-xs opacity-60">{items.length}</span>
                </button>
                {categories.map(cat => {
                  const count = items.filter(i => i.category_id === cat.id).length;
                  return (
                    <div
                      key={cat.id}
                      className={`flex items-center justify-between px-4 py-3 text-sm font-inter border-b border-[#D4AF37]/10 transition-colors group ${
                        selectedCategory === cat.id ? 'bg-[#D4AF37]/10 text-[#D4AF37]' : 'text-[#D3C5B3] hover:bg-[#D4AF37]/5'
                      }`}
                    >
                      <button
                        onClick={() => setSelectedCategory(cat.id)}
                        className="flex-1 text-left flex items-center justify-between"
                      >
                        <span>{cat.name}</span>
                        <span className="text-xs opacity-60">{count}</span>
                      </button>
                      <button
                        onClick={() => deleteCategory(cat.id, cat.name)}
                        className="ml-2 text-red-400/0 group-hover:text-red-400/60 hover:!text-red-400 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ─── MAIN: ITEMS ──────────────────────────── */}
          <div className="lg:col-span-3">
            {/* Search & Actions Bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D3C5B3]/50" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search dishes..."
                  className="w-full bg-[#2A1718] border border-[#D4AF37]/20 rounded-xl pl-10 pr-4 py-3 text-[#FDF5E6] font-inter text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>
              <button
                onClick={() => {
                  setShowAddItem(true);
                  setNewItem({
                    category_id: selectedCategory || (categories.length > 0 ? categories[0].id : 0),
                    name: '',
                    price: 0,
                    description: '',
                    image: ''
                  });
                }}
                className="px-6 py-3 bg-[#D4AF37] text-[#1A0F10] rounded-xl font-cinzel text-sm tracking-wider hover:bg-[#A68A29] transition-colors flex items-center gap-2 justify-center"
              >
                <Plus size={16} /> Add Dish
              </button>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block w-8 h-8 border-2 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full animate-spin"></div>
                <p className="mt-4 text-[#D3C5B3] font-inter text-sm">Loading menu...</p>
              </div>
            )}

            {/* Items Grid */}
            {!loading && (
              <div className="space-y-3">
                {filteredItems.length === 0 ? (
                  <div className="text-center py-16 bg-[#2A1718] border border-[#D4AF37]/20 rounded-xl">
                    <p className="text-[#D3C5B3] font-inter">No items found</p>
                  </div>
                ) : (
                  filteredItems.map(item => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`bg-[#2A1718] border rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all ${
                        item.is_active ? 'border-[#D4AF37]/20' : 'border-red-500/20 opacity-60'
                      }`}
                    >
                      {/* Image Thumbnail */}
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="w-16 h-16 rounded-lg object-cover border border-[#D4AF37]/20 shrink-0"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-lg bg-[#1A0F10] border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                          <ImageIcon size={20} className="text-[#D4AF37]/30" />
                        </div>
                      )}

                      {/* Item Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-cormorant text-xl text-[#FDF5E6] font-medium">{item.name}</h3>
                          {!item.is_active && (
                            <span className="px-2 py-0.5 bg-red-900/50 text-red-300 text-[10px] rounded-full font-inter uppercase tracking-wider">Hidden</span>
                          )}
                        </div>
                        <p className="text-[#D3C5B3] text-xs font-inter mt-0.5 truncate">{item.description}</p>
                        <p className="text-[#D4AF37]/60 text-xs font-inter mt-0.5">{item.category_name}</p>
                      </div>

                      {/* Price */}
                      <div className="font-cinzel text-xl text-[#D4AF37] whitespace-nowrap">
                        ₹{item.price}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => toggleItemActive(item)}
                          className={`p-2 rounded-lg transition-colors ${
                            item.is_active
                              ? 'bg-green-900/30 text-green-400 hover:bg-green-900/50'
                              : 'bg-red-900/30 text-red-400 hover:bg-red-900/50'
                          }`}
                          title={item.is_active ? 'Hide from menu' : 'Show on menu'}
                        >
                          {item.is_active ? <Eye size={16} /> : <EyeOff size={16} />}
                        </button>
                        <button
                          onClick={() => setEditingItem({ ...item })}
                          className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors"
                          title="Edit item"
                        >
                          <Edit3 size={16} />
                        </button>
                        <button
                          onClick={() => deleteItem(item.id, item.name)}
                          className="p-2 rounded-lg bg-red-900/20 text-red-400 hover:bg-red-900/40 transition-colors"
                          title="Delete item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ─── ADD ITEM MODAL ──────────────────────────── */}
      <AnimatePresence>
        {showAddItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddItem(false)}
              className="fixed inset-0 bg-black/60 z-[80] backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-lg bg-[#2A1718] border border-[#D4AF37]/30 rounded-2xl z-[90] shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <div className="p-6 border-b border-[#D4AF37]/20 flex justify-between items-center">
                <h2 className="font-cinzel text-xl text-[#D4AF37]">Add New Dish</h2>
                <button onClick={() => setShowAddItem(false)} className="text-[#D3C5B3] hover:text-[#D4AF37]">
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-[#D3C5B3] text-sm mb-1 font-inter">Category *</label>
                  <select
                    value={newItem.category_id}
                    onChange={e => setNewItem({ ...newItem, category_id: parseInt(e.target.value) })}
                    className="w-full bg-[#1A0F10] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-[#FDF5E6] font-inter text-sm focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value={0}>Select category</option>
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[#D3C5B3] text-sm mb-1 font-inter">Dish Name *</label>
                  <input
                    type="text"
                    value={newItem.name}
                    onChange={e => setNewItem({ ...newItem, name: e.target.value })}
                    className="w-full bg-[#1A0F10] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-[#FDF5E6] font-inter text-sm focus:outline-none focus:border-[#D4AF37]"
                    placeholder="e.g. Paneer Butter Masala"
                  />
                </div>
                <div>
                  <label className="block text-[#D3C5B3] text-sm mb-1 font-inter">Price (₹) *</label>
                  <input
                    type="number"
                    value={newItem.price || ''}
                    onChange={e => setNewItem({ ...newItem, price: parseInt(e.target.value) || 0 })}
                    className="w-full bg-[#1A0F10] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-[#FDF5E6] font-inter text-sm focus:outline-none focus:border-[#D4AF37]"
                    placeholder="250"
                  />
                </div>
                <div>
                  <label className="block text-[#D3C5B3] text-sm mb-1 font-inter">Description</label>
                  <textarea
                    value={newItem.description}
                    onChange={e => setNewItem({ ...newItem, description: e.target.value })}
                    className="w-full bg-[#1A0F10] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-[#FDF5E6] font-inter text-sm focus:outline-none focus:border-[#D4AF37] resize-none"
                    rows={2}
                    placeholder="A short description of the dish"
                  />
                </div>
                <div>
                  <label className="block text-[#D3C5B3] text-sm mb-1 font-inter">Image URL</label>
                  <input
                    type="text"
                    value={newItem.image}
                    onChange={e => setNewItem({ ...newItem, image: e.target.value })}
                    className="w-full bg-[#1A0F10] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-[#FDF5E6] font-inter text-sm focus:outline-none focus:border-[#D4AF37]"
                    placeholder="https://..."
                  />
                </div>
                <button
                  onClick={addItem}
                  className="w-full bg-[#D4AF37] text-[#1A0F10] py-3 rounded-lg font-cinzel tracking-widest hover:bg-[#A68A29] transition-colors flex items-center justify-center gap-2"
                >
                  <Plus size={16} /> Add to Menu
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ─── EDIT ITEM MODAL ─────────────────────────── */}
      <AnimatePresence>
        {editingItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEditingItem(null)}
              className="fixed inset-0 bg-black/60 z-[80] backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-lg bg-[#2A1718] border border-[#D4AF37]/30 rounded-2xl z-[90] shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <div className="p-6 border-b border-[#D4AF37]/20 flex justify-between items-center">
                <h2 className="font-cinzel text-xl text-[#D4AF37]">Edit Dish</h2>
                <button onClick={() => setEditingItem(null)} className="text-[#D3C5B3] hover:text-[#D4AF37]">
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-[#D3C5B3] text-sm mb-1 font-inter">Category</label>
                  <select
                    value={editingItem.category_id}
                    onChange={e => setEditingItem({ ...editingItem, category_id: parseInt(e.target.value) })}
                    className="w-full bg-[#1A0F10] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-[#FDF5E6] font-inter text-sm focus:outline-none focus:border-[#D4AF37]"
                  >
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[#D3C5B3] text-sm mb-1 font-inter">Dish Name</label>
                  <input
                    type="text"
                    value={editingItem.name}
                    onChange={e => setEditingItem({ ...editingItem, name: e.target.value })}
                    className="w-full bg-[#1A0F10] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-[#FDF5E6] font-inter text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-[#D3C5B3] text-sm mb-1 font-inter">Price (₹)</label>
                  <input
                    type="number"
                    value={editingItem.price}
                    onChange={e => setEditingItem({ ...editingItem, price: parseInt(e.target.value) || 0 })}
                    className="w-full bg-[#1A0F10] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-[#FDF5E6] font-inter text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-[#D3C5B3] text-sm mb-1 font-inter">Description</label>
                  <textarea
                    value={editingItem.description}
                    onChange={e => setEditingItem({ ...editingItem, description: e.target.value })}
                    className="w-full bg-[#1A0F10] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-[#FDF5E6] font-inter text-sm focus:outline-none focus:border-[#D4AF37] resize-none"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-[#D3C5B3] text-sm mb-1 font-inter">Image URL</label>
                  <input
                    type="text"
                    value={editingItem.image}
                    onChange={e => setEditingItem({ ...editingItem, image: e.target.value })}
                    className="w-full bg-[#1A0F10] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-[#FDF5E6] font-inter text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                  {editingItem.image && (
                    <img src={editingItem.image} alt="Preview" referrerPolicy="no-referrer" className="mt-2 w-full h-32 object-cover rounded-lg border border-[#D4AF37]/20" />
                  )}
                </div>
                <div className="flex items-center gap-3 bg-[#1A0F10] border border-[#D4AF37]/20 rounded-lg p-3">
                  <input
                    type="checkbox"
                    id="is-active"
                    checked={editingItem.is_active}
                    onChange={e => setEditingItem({ ...editingItem, is_active: e.target.checked })}
                    className="accent-[#D4AF37]"
                  />
                  <label htmlFor="is-active" className="text-[#D3C5B3] text-sm font-inter">
                    Show on public menu
                  </label>
                </div>
                <button
                  onClick={updateItem}
                  className="w-full bg-[#D4AF37] text-[#1A0F10] py-3 rounded-lg font-cinzel tracking-widest hover:bg-[#A68A29] transition-colors flex items-center justify-center gap-2"
                >
                  <Save size={16} /> Save Changes
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
