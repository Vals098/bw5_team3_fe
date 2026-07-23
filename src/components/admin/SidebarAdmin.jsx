import React from 'react';
import { Nav, Button } from 'react-bootstrap';

// SVGs
const ProfileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </svg>
);

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5l0 14" /><path d="M5 12l14 0" />
    </svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" />
    </svg>
);

const RegisterInvoiceIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 8.5C14 5.73858 11.7614 3.5 9 3.5C6.23858 3.5 4 5.73858 4 8.5C4 11.2614 6.23858 13.5 9 13.5C11.7614 13.5 14 11.2614 14 8.5Z" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 20.5C16 16.634 12.866 13.5 9 13.5C5.13401 13.5 2 16.634 2 20.5" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 9V15M22 12L16 12" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    </svg>
);

// Iconos Admin
const EditUserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4d4d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 7 m-4 0 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 11l2 2l4 -4" />
    </svg>
);

const EditCardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4d4d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 10h16" /><path d="M10 14h2" />
    </svg>
);

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 6l-6 6l6 6" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 6l6 6l-6 6" />
    </svg>
);

const SidebarAdmin = ({ activeTab, setActiveTab, isCollapsed, setIsCollapsed }) => {
    const menuItems = [
        // User Items
        { id: 'profile', label: 'My Profile', icon: <ProfileIcon /> },
        { id: 'reg_client', label: 'Register New Client', icon: <PlusIcon /> },
        { id: 'find_client', label: 'Find Client', icon: <SearchIcon /> },
        { id: 'find_invoice', label: 'Find Invoice', icon: <SearchIcon /> },
        { id: 'reg_invoice', label: 'Register New Invoice', icon: <RegisterInvoiceIcon /> },
        { id: 'contact_client', label: 'Contact Client', icon: <PhoneIcon /> },
        
        // Admin Exclusive Items
        { id: 'update_employee', label: 'UPDATE EMPLOYEE INFO', icon: <EditUserIcon />, isAdmin: true },
        { id: 'edit_client_admin', label: 'EDIT CLIENT (Mod/Del)', icon: <EditCardIcon />, isAdmin: true },
        { id: 'edit_invoice_admin', label: 'EDIT INVOICE (Mod/Del)', icon: <EditCardIcon />, isAdmin: true },
    ];

    return (
        <div 
            className="bg-dark text-white p-3 d-flex flex-column"
            style={{ 
                width: isCollapsed ? '80px' : '280px', 
                minHeight: '100vh',
                transition: 'width 0.3s ease'
            }}
        >
            <div className="d-flex justify-content-between align-items-center mb-3">
                {!isCollapsed && <h5 className="m-0 text-danger fw-bold">ADMIN MENU</h5>}
                <Button 
                    variant="outline-secondary" 
                    size="sm" 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="ms-auto p-1 d-flex align-items-center justify-content-center"
                >
                    {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </Button>
            </div>

            <hr className="text-secondary mt-0 mb-3" />

            <Nav className="flex-column gap-2 overflow-auto">
                {menuItems.map((item) => (
                    <Button
                        key={item.id}
                        variant={activeTab === item.id ? (item.isAdmin ? 'danger' : 'primary') : 'outline-dark'}
                        className={`text-start d-flex align-items-center border-0 text-white ${activeTab === item.id ? 'fw-bold' : ''}`}
                        onClick={() => setActiveTab(item.id)}
                        title={isCollapsed ? item.label : ''}
                    >
                        <span className="d-flex align-items-center justify-content-center me-3">
                            {item.icon}
                        </span>
                        {!isCollapsed && <span style={{ fontSize: '0.85rem' }}>{item.label}</span>}
                    </Button>
                ))}
            </Nav>
        </div>
    );
};

export default SidebarAdmin;