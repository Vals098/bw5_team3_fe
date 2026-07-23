import React, { useState } from 'react';
import SidebarAdmin from './SidebarAdmin';

// Componentes User 
import MyProfile from '../user/MyProfile';
import RegisterClient from '../user/RegisterClient';
import FindClient from '../user/FindClient';
import FindInvoice from '../user/FindInvoice';
import RegisterInvoice from '../user/RegisterInvoice';
import ContactClient from '../user/ContactClient';

// Componentes Admin exclusivos
import UpdateEmployeeInfo from './UpdateEmployeeInfo';
import EditClientAdmin from './EditClientAdmin';
import EditInvoiceAdmin from './EditInvoiceAdmin';

const AdminMenu = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [isCollapsed, setIsCollapsed] = useState(false);

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
            case 'update_employee':
                return <UpdateEmployeeInfo />;
            case 'edit_client_admin':
                return <EditClientAdmin />;
            case 'edit_invoice_admin':
                return <EditInvoiceAdmin />;
            default:
                return <MyProfile />;
        }
    };

    return (
        <div className="d-flex bg-light min-vh-100">
            <SidebarAdmin 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                isCollapsed={isCollapsed} 
                setIsCollapsed={setIsCollapsed} 
            />

            <div className="flex-grow-1 p-4 overflow-auto">
                {renderContent()}
            </div>
        </div>
    );
};

export default AdminMenu;