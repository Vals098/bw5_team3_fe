import React from 'react';
import { Nav, Button } from 'react-bootstrap';

const SidebarUser = ({ activeTab, setActiveTab, isCollapsed, setIsCollapsed }) => {
    const menuItems = [
        { id: 'profile', label: 'My Profile', icon: '👤' },
        { id: 'reg_client', label: 'Register New Client', icon: '➕🏢' },
        { id: 'find_client', label: 'Find Client', icon: '🔍🏢' },
        { id: 'find_invoice', label: 'Find Invoice', icon: '📄🔍' },
        { id: 'reg_invoice', label: 'Register New Invoice', icon: '📤📄' },
        { id: 'contact_client', label: 'Contact Client (EXTRA)', icon: '📞' },
    ];

    return (
        <div 
            className="bg-dark text-white p-3 d-flex flex-column"
            style={{ 
                width: isCollapsed ? '80px' : '260px', 
                minHeight: '100vh',
                transition: 'width 0.3s ease'
            }}
        >
            {/* Toggle Button */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                {!isCollapsed && <h5 className="m-0 text-info fw-bold">USER MENU</h5>}
                <Button 
                    variant="outline-light" 
                    size="sm" 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="ms-auto"
                >
                    {isCollapsed ? '➡️' : '⬅️'}
                </Button>
            </div>

            <hr className="text-secondary" />

            {/* Menu Links */}
            <Nav className="flex-column gap-2">
                {menuItems.map((item) => (
                    <Button
                        key={item.id}
                        variant={activeTab === item.id ? 'info' : 'outline-dark'}
                        className={`text-start d-flex align-items-center text-white ${activeTab === item.id ? 'fw-bold' : ''}`}
                        onClick={() => setActiveTab(item.id)}
                    >
                        <span className="me-3 fs-5">{item.icon}</span>
                        {!isCollapsed && <span>{item.label}</span>}
                    </Button>
                ))}
            </Nav>
        </div>
    );
};

export default SidebarUser;