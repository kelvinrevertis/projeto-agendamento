
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from '../Sidebar';

import { Dashboard } from '../../pages/Dashboard';
import { Agendamentos } from '../../pages/Agendamentos';
import * as C from './styles'

// type LayoutProps = {
//     children: ReactNode;
// };

export const Layout = () => {
    return (
        <C.LayoutContainer>
        <BrowserRouter>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/agendamentos" element={<Agendamentos/>} />
            </Routes>
        </BrowserRouter>
        </C.LayoutContainer>
    );
};

