import { createBrowserRouter } from 'react-router-dom';

// project import
import AdminRoutes from './AdminRoutes';
import UserRoutes from './UserRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const routers = createBrowserRouter([...UserRoutes, ...AdminRoutes]);

export default routers;
