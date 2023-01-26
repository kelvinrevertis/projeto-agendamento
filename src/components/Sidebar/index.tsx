import { Link } from 'react-router-dom';
import * as C from './styles'

export const Sidebar = () => {
  return (
    <C.Container>
      <Link className='text-white' to="/">Dashboard</Link>
      <Link className='text-white' to="/agendamentos"><p>Agendamentos</p></Link>
    </C.Container>
  );
};



