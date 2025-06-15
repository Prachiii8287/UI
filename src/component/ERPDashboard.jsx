import React, { useState, useEffect } from 'react';
import { User, Users, Home, Settings, Plus, Clock, FolderOpen, LogOut, ChevronLeft, Map } from 'lucide-react';
import ProjectsPage from './ProjectsPage';
import AddEmployeeForm from './AddEmployeeForm';
import TimesheetsPage from './TimesheetsPage';
import Logo from './Logo.png';

const ERPDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('Employees');
  const [currentPage, setCurrentPage] = useState('Employees');
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const employees = [
    {
      id: 'EMP001',
      fullName: 'Sarah Johnson',
      department: 'Human Resources',
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@company.com',
      role: 'HR Manager'
    },
    {
      id: 'EMP002',
      fullName: 'Michael Chen',
      department: 'Engineering',
      phone: '+1 (555) 234-5678',
      email: 'michael.chen@company.com',
      role: 'Senior Developer'
    },
    {
      id: 'EMP003',
      fullName: 'Emily Rodriguez',
      department: 'Marketing',
      phone: '+1 (555) 345-6789',
      email: 'emily.rodriguez@company.com',
      role: 'Marketing Specialist'
    },
    {
      id: 'EMP004',
      fullName: 'David Thompson',
      department: 'Finance',
      phone: '+1 (555) 456-7890',
      email: 'david.thompson@company.com',
      role: 'Financial Analyst'
    },
    {
      id: 'EMP005',
      fullName: 'Lisa Wang',
      department: 'Operations',
      phone: '+1 (555) 567-8901',
      email: 'lisa.wang@company.com',
      role: 'Operations Manager'
    },
    {
      id: 'EMP006',
      fullName: 'James Miller',
      department: 'Engineering',
      phone: '+1 (555) 678-9012',
      email: 'james.miller@company.com',
      role: 'DevOps Engineer'
    }
  ];

  const menuItems = [
    { name: 'Home', icon: Home },
    { name: 'Project', icon: FolderOpen },
    { name: 'Employees', icon: Users },
    { name: 'Timesheet', icon: Clock },
    { name: 'Settings', icon: Settings },
  ];

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setCurrentPage(menuName);
    setShowAddEmployee(false);
  };

  const handleAddEmployee = () => {
    setShowAddEmployee(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  // Handle clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('sidebar');
      const mainContent = document.getElementById('main-content');
      
      if (sidebar && mainContent) {
        // If sidebar is expanded and click is outside sidebar, collapse it
        if (!collapsed && !sidebar.contains(event.target) && mainContent.contains(event.target)) {
          setCollapsed(true);
        }
        // If sidebar is collapsed and click is on the collapsed sidebar, expand it
        else if (collapsed && sidebar.contains(event.target)) {
          setCollapsed(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [collapsed]);

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa'
    }}>
      {/* Sidebar */}
      <div 
        id="sidebar"
        style={{
          width: collapsed ? '80px' : '260px',
          backgroundColor: '#ffffff',
          boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          height: '100vh',
          zIndex: 1000,
          transition: 'width 0.3s ease',
          cursor: collapsed ? 'pointer' : 'default'
        }}
      >
        {/* Logo */}
        <div style={{
          padding: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // borderBottom: '1px solid #e5e7eb'
        }}>
          {!collapsed && (
            <img src={Logo} alt="Logo" style={{ height: '40px'}} />
          )}
        </div>

        {/* Menu Items */}
        <div style={{
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                onClick={() => handleMenuClick(item.name)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  backgroundColor: activeMenu === item.name ? '#f3f4f6' : 'transparent',
                  color: activeMenu === item.name ? '#8b5cf6' : '#6b7280',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={20} />
                {!collapsed && (
                  <span style={{
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    {item.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div 
        id="main-content"
        style={{
          marginLeft: collapsed ? '80px' : '260px',
          flex: 1,
          padding: '24px',
          transition: 'margin-left 0.3s ease'
        }}
      >
        {/* Header */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '20px 32px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1f2937',
            margin: 0
          }}>
            {showAddEmployee ? 'Add New Employee' : ''}
          </h1>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            {/* Profile Icon */}
            <div 
              style={{
                position: 'relative',
                cursor: 'pointer'
              }}
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#8b5cf6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600'
              }}>
                A
              </div>
              
              {/* Dropdown Menu */}
              {showProfileDropdown && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '8px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  minWidth: '200px',
                  zIndex: 1000
                }}>
                  <div style={{
                    padding: '8px 0'
                  }}>
                    <div style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e7eb',
                      color: '#374151',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>
                      Admin User
                    </div>
                    <div 
                      style={{
                        padding: '12px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#ef4444',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s',
                        ':hover': {
                          backgroundColor: '#f3f4f6'
                        }
                      }}
                      onClick={handleLogout}
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div style={{
          padding: '24px 32px',
          flex: 1
        }}>
          {currentPage === 'Project' ? (
            <ProjectsPage />
          ) : currentPage === 'Timesheet' ? (
            <TimesheetsPage />
          ) : showAddEmployee ? (
            <AddEmployeeForm onBack={() => setShowAddEmployee(false)} />
          ) : (
            <>
              {/* Add Employee Button */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: '24px',
                gap: '12px'
              }}>
                <button 
                  onClick={handleAddEmployee}
                  style={{
                    backgroundColor: '#7E44EE',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 4px rgba(124, 58, 237, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#6d28d9';
                    e.target.style.transform = 'translateY(-1px)';
                    e.target.style.boxShadow = '0 4px 8px rgba(124, 58, 237, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#7E44EE';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 4px rgba(124, 58, 237, 0.2)';
                  }}
                >
                  <Plus size={16} />
                  Add Employee
                </button>
                <button 
                  onClick={() => {/* Handle employee group click */}}
                  style={{
                    backgroundColor: '#7E44EE',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 4px rgba(124, 58, 237, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#6d28d9';
                    e.target.style.transform = 'translateY(-1px)';
                    e.target.style.boxShadow = '0 4px 8px rgba(124, 58, 237, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#7E44EE';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 4px rgba(124, 58, 237, 0.2)';
                  }}
                >
                  <Users size={16} />
                  Employee Group
                </button>
                <button 
                  onClick={() => {/* Handle map items click */}}
                  style={{
                    backgroundColor: '#7E44EE',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 4px rgba(124, 58, 237, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#6d28d9';
                    e.target.style.transform = 'translateY(-1px)';
                    e.target.style.boxShadow = '0 4px 8px rgba(124, 58, 237, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#7E44EE';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 4px rgba(124, 58, 237, 0.2)';
                  }}
                >
                  <Map size={16} />
                  Map Items
                </button>
              </div>

              {/* Employee Table */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
                overflow: 'hidden',
                border: '1px solid #e5e7eb'
              }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse'
                }}>
                  <thead>
                    <tr style={{
                      backgroundColor: '#f8f9fa',
                      borderBottom: '2px solid #e9ecef'
                    }}>
                      {['Employee ID', 'Full Name', 'Department', 'Phone', 'Email', 'Role'].map((header) => (
                        <th key={header} style={{
                          padding: '16px 20px',
                          textAlign: 'left',
                          fontSize: '13px',
                          fontWeight: '700',
                          color: '#374151',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((employee, index) => (
                      <tr key={employee.id} style={{
                        borderBottom: index < employees.length - 1 ? '1px solid #f1f3f4' : 'none',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}>
                        <td style={{
                          padding: '16px 20px',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#7E44EE'
                        }}>
                          {employee.id}
                        </td>
                        <td style={{
                          padding: '16px 20px',
                          fontSize: '14px',
                          fontWeight: '500',
                          color: '#1f2937'
                        }}>
                          {employee.fullName}
                        </td>
                        <td style={{
                          padding: '16px 20px',
                          fontSize: '14px',
                          color: '#6b7280'
                        }}>
                          {employee.department}
                        </td>
                        <td style={{
                          padding: '16px 20px',
                          fontSize: '14px',
                          color: '#6b7280'
                        }}>
                          {employee.phone}
                        </td>
                        <td style={{
                          padding: '16px 20px',
                          fontSize: '14px',
                          color: '#6b7280'
                        }}>
                          {employee.email}
                        </td>
                        <td style={{
                          padding: '16px 20px',
                          fontSize: '14px',
                          color: '#6b7280'
                        }}>
                          <span style={{
                            backgroundColor: '#f3f4f6',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: '500',
                            color: '#374151'
                          }}>
                            {employee.role}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ERPDashboard;