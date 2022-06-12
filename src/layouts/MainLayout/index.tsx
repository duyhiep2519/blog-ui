import './index.scss';

interface Props {
   children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
   return (
      <div className="mainLayout">
         <div className="mainLayout__content">{children}</div>
         <aside></aside>
      </div>
   );
};
