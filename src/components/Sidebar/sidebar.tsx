import {Route, Link, Router } from 'react-router-dom';
import { agendamentos } from '../../pages/agendamentos';

export const Sidebar = () => {
    return (
        <div>
            <Router>
                <Route path='/agendamentos' component={ agendamentos} 
            </Router>
            <Link to="/agendamentos">Agendamentos</Link>
            {/* <Link to="/dashboard">Dashboard</Link> */}
        </div>
    )
}

