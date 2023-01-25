import { Link } from 'react-router-dom';
import * as C from './styles'

export const Sidebar = () => {
  return (
    <C.Container>
      <Link to="/">Dashboard</Link>
      <Link to="/agendamentos"><p>Agendamentos</p></Link>
    </C.Container>
  );
};



