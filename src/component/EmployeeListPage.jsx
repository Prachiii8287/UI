import React, { useState } from 'react';
import { User, Users, Home, Settings, Clock, FolderOpen, ArrowLeft } from 'lucide-react';
import Logo from './Logo.png';

const EmployeeListPage = () => {
  const [activeMenu, setActiveMenu] = useState('Employees');

  const menuItems = [
    { name: 'Home', icon: Home },
    { name: 'Employees', icon: Users },
    { name: 'Timesheet', icon: Clock },
    { name: 'Project', icon: FolderOpen },
    { name: 'Settings', icon: Settings },
  ];

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  // Mock employee data
  const employees = [
    {
      id: 'EMP001',
      name: 'Sarah Johnson',
      department: 'Human Resources',
      position: 'HR Manager',
      email: 'sarah.johnson@company.com',
      phone: '(555) 123-4567',
      status: 'Active'
    },
    {
      id: 'EMP002',
      name: 'Michael Chen',
      department: 'Engineering',
      position: 'Senior Software Engineer',
      email: 'michael.chen@company.com',
      phone: '(555) 234-5678',
      status: 'Active'
    },
    {
      id: 'EMP003',
      name: 'Emily Rodriguez',
      department: 'Marketing',
      position: 'Marketing Coordinator',
      email: 'emily.rodriguez@company.com',
      phone: '(555) 345-6789',
      status: 'Deactive'
    },
    {
      id: 'EMP004',
      name: 'David Thompson',
      department: 'Finance',
      position: 'Financial Analyst',
      email: 'david.thompson@company.com',
      phone: '(555) 456-7890',
      status: 'Active'
    },
    {
      id: 'EMP005',
      name: 'Lisa Park',
      department: 'Operations',
      position: 'Operations Manager',
      email: 'lisa.park@company.com',
      phone: '(555) 567-8901',
      status: 'Active'
    },
    {
      id: 'EMP006',
      name: 'James Wilson',
      department: 'Engineering',
      position: 'DevOps Engineer',
      email: 'james.wilson@company.com',
      phone: '(555) 678-9012',
      status: 'Deactive'
    },
    {
      id: 'EMP007',
      name: 'Amanda Foster',
      department: 'Sales',
      position: 'Sales Representative',
      email: 'amanda.foster@company.com',
      phone: '(555) 789-0123',
      status: 'Active'
    },
    {
      id: 'EMP008',
      name: 'Robert Kim',
      department: 'IT Support',
      position: 'IT Specialist',
      email: 'robert.kim@company.com',
      phone: '(555) 890-1234',
      status: 'Active'
    },
    {
      id: 'EMP009',
      name: 'Jessica Brown',
      department: 'Legal',
      position: 'Legal Counsel',
      email: 'jessica.brown@company.com',
      phone: '(555) 901-2345',
      status: 'Deactive'
    }
  ];

  const StatusPill = ({ status }) => {
    const isActive = status === 'Active';
    
    const pillStyle = {
      display: 'inline-block',
      padding: '4px 12px',
      borderRadius: '16px',
      fontSize: '12px',
      fontWeight: '600',
      color: 'white',
      backgroundColor: isActive ? '#10b981' : '#ef4444',
      textAlign: 'center',
      minWidth: '70px'
    };

    return <span style={pillStyle}>{status}</span>;
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa'
    }}>
      {/* Sidebar */}
      <div style={{
        width: '260px',
        backgroundColor: '#ffffff',
        boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        zIndex: 1000
      }}>
        {/* Logo */}
        <div style={{
          padding: '24px 20px',
          borderBottom: '1px solid #e9ecef',
          textAlign: 'left'
        }}>
          <img 
            src={Logo} 
            alt="Company Logo" 
            style={{
              maxWidth: '70%',
              height: 'auto',
              maxHeight: '40px'
            }}
          />
        </div>

        {/* Menu Items */}
        <nav style={{ padding: '20px 0', flex: 1 }}>
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeMenu === item.name;
            return (
              <div
                key={item.name}
                onClick={() => handleMenuClick(item.name)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 20px',
                  margin: '4px 12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  backgroundColor: isActive ? '#f3f4f6' : 'transparent',
                  color: isActive ? '#7E44EE' : '#6b7280',
                  fontWeight: isActive ? '600' : '400',
                  transition: 'all 0.2s ease',
                  border: isActive ? '1px solid #e5e7eb' : '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = '#f9fafb';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <IconComponent size={20} style={{ marginRight: '12px' }} />
                {item.name}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div style={{
        marginLeft: '260px',
        flex: 1,
        padding: '24px',
        position: 'relative',
        width: 'calc(100% - 260px)'
      }}>
        {/* Header with Back Button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '32px',
          position: 'relative',
          paddingTop: '20px'
        }}>
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              position: 'absolute',
              left: 0,
              color: '#7b2cbf',
              transition: 'opacity 0.2s ease'
            }}
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={20} style={{ color: '#7b2cbf' }} />
            <span style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#7b2cbf'
            }}>
              Back to Dashboard
            </span>
          </div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#8b5cf6',
            width: '100%',
            textAlign: 'center',
            margin: 0
          }}>
            Employees
          </h1>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          overflow: 'hidden',
          marginTop: '20px'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse'
          }}>
            <thead style={{
              backgroundColor: '#8b5cf6',
              borderBottom: '1px solid #7c3aed'
            }}>
              <tr>
                <th style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Employee ID</th>
                <th style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Name</th>
                <th style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Department</th>
                <th style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Position</th>
                <th style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Email</th>
                <th style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Phone</th>
                <th style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr 
                  key={employee.id} 
                  style={{
                    borderBottom: '1px solid #f3f4f6',
                    transition: 'background-color 0.15s ease-in-out',
                    backgroundColor: index % 2 === 0 ? 'white' : '#fafafa'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ede9fe';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = index % 2 === 0 ? 'white' : '#fafafa';
                  }}
                >
                  <td style={{
                    padding: '16px',
                    fontSize: '16px',
                    color: '#374151'
                  }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '13px' }}>
                      {employee.id}
                    </span>
                  </td>
                  <td style={{
                    padding: '16px',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#111827'
                  }}>{employee.name}</td>
                  <td style={{
                    padding: '16px',
                    fontSize: '16px',
                    color: '#374151'
                  }}>{employee.department}</td>
                  <td style={{
                    padding: '16px',
                    fontSize: '16px',
                    color: '#374151'
                  }}>{employee.position}</td>
                  <td style={{
                    padding: '16px',
                    fontSize: '16px',
                    color: '#6b7280'
                  }}>{employee.email}</td>
                  <td style={{
                    padding: '16px',
                    fontSize: '16px',
                    color: '#374151'
                  }}>{employee.phone}</td>
                  <td style={{
                    padding: '16px',
                    fontSize: '16px',
                    color: '#374151'
                  }}>
                    <StatusPill status={employee.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeListPage;