
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from '../Sidebar';

import { Dashboard } from '../../pages/Dashboard';
import { Agendamentos } from '../../pages/Agendamentos';

// type LayoutProps = {
//     children: ReactNode;
// };

export const Layout = () => {
    return (
        <BrowserRouter>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/agendamentos" element={<Agendamentos/>} />
            </Routes>
        </BrowserRouter>
    );
};

