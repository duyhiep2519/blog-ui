import clsx from 'clsx';
import './index.scss';

interface ChipProps {
   label: string;
   onClick?: () => void;
   className?: string;
}

export const Chip = (props: ChipProps) => {
   const { label, onClick, className } = props;
   return (
      <div
         className={clsx('chip', className)}
         onClick={onClick ? onClick : () => {}}
      >
         <span className="chip__label">{label}</span>
      </div>
   );
};
