import React, { useState } from 'react';
import SidebarUser from './SidebarUser';
import MyProfile from './MyProfile';
import RegisterClient from './RegisterClient';
import FindClient from './FindClient';
import FindInvoice from './FindInvoice';
import RegisterInvoice from './RegisterInvoice';
import ContactClient from './ContactClient';

const MenuUser = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Function to render the content based on the active tab
    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return <MyProfile />;
            case 'reg_client':
                return <RegisterClient />;
            case 'find_client':
                return <FindClient />;
            case 'find_invoice':
                return <FindInvoice />;
            case 'reg_invoice':
                return <RegisterInvoice />;
            case 'contact_client':
                return <ContactClient />;
            default:
                return <MyProfile />;
        }
    };

    return (
        <div className="d-flex bg-light min-vh-100">
            {/* Sidebar Colapsable */}
            <SidebarUser 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                isCollapsed={isCollapsed} 
                setIsCollapsed={setIsCollapsed} 
            />

            {/* Content Part  */}
            <div className="flex-grow-1 p-4 overflow-auto">
                {renderContent()}
            </div>
        </div>
    );
};

export default MenuUser;