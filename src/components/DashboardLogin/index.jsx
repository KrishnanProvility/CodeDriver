import { useAuth } from '../../authenticators/AuthContext';
import Button from 'react-bootstrap/Button';
import Sidebar from '../../components/Sidebar/Sidebar.jsx'; // Adjust path if needed

export default function DashboardLogin() {
    const { logout } = useAuth();
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <div style={{ marginLeft: 200, flex: 1, padding: 24 }}>
                <h1>Dashboardss</h1>
                <Button variant="primary" onClick={logout}>LOG OUT</Button>
            </div>
        </div>
    );
}
