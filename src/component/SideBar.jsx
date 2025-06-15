import React, { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navigationItems = [
    { 
      name: 'Home', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7E44EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      )
    },
    { 
      name: 'Project', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7E44EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
          <rect width="3" height="9" x="7" y="7"/>
          <rect width="3" height="5" x="14" y="11"/>
        </svg>
      )
    },
    { 
      name: 'Employee', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7E44EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="m22 21-3-3m0 0a2 2 0 0 0 0-4 2 2 0 0 0 0 4"/>
        </svg>
      )
    },
    { 
      name: 'Timesheet', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7E44EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      )
    },
    { 
      name: 'Settings', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7E44EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="m12 1 1.68 2.18a6.26 6.26 0 0 0 2.67.8l2.85-.39 1.31 2.3-1.97 2.05a6.26 6.26 0 0 0 0 3.21l1.97 2.05-1.31 2.3-2.85-.39a6.26 6.26 0 0 0-2.67.8L12 23l-1.68-2.18a6.26 6.26 0 0 0-2.67-.8l-2.85.39-1.31-2.3 1.97-2.05a6.26 6.26 0 0 0 0-3.21L3.49 10.8l1.31-2.3 2.85.39a6.26 6.26 0 0 0 2.67-.8L12 1Z"/>
        </svg>
      )
    }
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const handleMainContentClick = () => {
    if (!isCollapsed) {
      setIsCollapsed(true);
    }
  };

  return (
    <div className="app-container">
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        {/* Header with Logo and Toggle */}
        <div className="sidebar-header">
          <div className="logo-container">
            {!isCollapsed && <span className="logo-text">ERP Platform</span>}
          </div>
          <button className="toggle-btn" onClick={toggleSidebar}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7E44EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="sidebar-nav">
          {navigationItems.map((item) => {
            return (
              <div
                key={item.name}
                className={`nav-item ${activeItem === item.name ? 'active' : ''}`}
                onClick={() => handleItemClick(item.name)}
              >
                <span className="nav-icon">{item.icon}</span>
                {!isCollapsed && <span className="nav-text">{item.name}</span>}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Main Content Area */}
      {/* <div className="main-content" onClick={handleMainContentClick}>
        <h1>Welcome to ERP Platform</h1>
        <p>Current active section: <strong>{activeItem}</strong></p>
        <p>Click on sidebar items to navigate, use the toggle button to expand the sidebar, or click here to close it.</p>
      </div> */}

      <style jsx>{`
        .app-container {
          display: flex;
          height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        .sidebar {
          background-color: white;
          width: 250px;
          height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          border-right: 1px solid #e0e0e0;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
          transition: width 0.3s ease;
          z-index: 1000;
          overflow: hidden;
        }

        .sidebar.collapsed {
          width: 70px;
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 15px;
          border-bottom: 1px solid #f0f0f0;
          height: 70px;
          box-sizing: border-box;
        }

        .logo-container {
          display: flex;
          align-items: center;
          flex: 1;
        }

        .logo-text {
          font-size: 18px;
          font-weight: bold;
          color: #7E44EE;
          white-space: nowrap;
        }

        .toggle-btn {
          background: none;
          border: none;
          color: #7E44EE;
          cursor: pointer;
          padding: 8px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease;
          flex-shrink: 0;
          width: 32px;
          height: 32px;
        }

        .toggle-btn:hover {
          background-color: #f5f5f5;
        }

        .sidebar-nav {
          padding: 20px 0;
        }

        .nav-item {
          display: flex;
          align-items: center;
          padding: 15px 20px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #7E44EE;
          position: relative;
        }

        .nav-item:hover {
          background-color: #f5f5f5;
          font-weight: bold;
        }

        .nav-item.active {
          background-color: #ebebeb;
          font-weight: bold;
        }

        .nav-icon {
          min-width: 20px;
          margin-right: 15px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7E44EE;
        }

        .nav-text {
          white-space: nowrap;
          opacity: 1;
          transition: opacity 0.3s ease;
        }

        .sidebar.collapsed .nav-text {
          opacity: 0;
        }

        .sidebar.collapsed .nav-item {
          justify-content: center;
        }

        .sidebar.collapsed .nav-icon {
          margin-right: 0;
        }

        .main-content {
          margin-left: 250px;
          padding: 40px;
          flex: 1;
          background-color: #fafafa;
          transition: margin-left 0.3s ease;
        }

        .sidebar.collapsed ~ .main-content {
          margin-left: 70px;
        }

        .main-content h1 {
          color: #333;
          margin-bottom: 20px;
        }

        .main-content p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;