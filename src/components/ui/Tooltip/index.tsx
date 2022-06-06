import clsx from 'clsx';
import './index.scss';

interface Props {
   children: React.ReactNode;
   text: string;
   placement?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip = ({ children, text, placement = 'bottom' }: Props) => {
   return (
      <div className={clsx('tooltip', `tooltip-${placement}`)}>
         {children}
         <span className="tooltip__text flex-center">{text}</span>
      </div>
   );
};

export default Tooltip;
