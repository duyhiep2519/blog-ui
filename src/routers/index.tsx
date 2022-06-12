import { Route, Routes } from 'react-router-dom';
import { MyRoutes } from './routes';
import { Suspense } from 'react';
import BallsLoading from 'components/Loading/BallsLoading';

export const MainRouter = () => {
   return (
      <Suspense
         fallback={
            <div
               style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
               }}
            >
               <BallsLoading />
            </div>
         }
      >
         <Routes>
            {MyRoutes.map((route, index) => {
               return (
                  <Route
                     key={index}
                     path={route.path}
                     element={route.element}
                  />
               );
            })}
         </Routes>
      </Suspense>
   );
};
