import { Route, Routes } from 'react-router-dom';
import { MyRoutes } from './routes';

export const MainRouter = () => {
   return (
      <Routes>
         {MyRoutes.map((route, index) => {
            return (
               <Route key={index} path={route.path} element={route.element} />
            );
         })}
      </Routes>
   );
};
