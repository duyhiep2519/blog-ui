import { FeaturedPost } from '@types';
import clsx from 'clsx';
import { Chip } from 'components/ui/Chip';
import { dateFromTimestamp } from 'utils/times';
import { FaUser, FaCalendar, FaReadme } from 'react-icons/fa';
import './index.scss';
import Tooltip from 'components/ui/Tooltip';

interface Props extends FeaturedPost {
   className?: string;
}

export const PostCard = (props: Props) => {
   return (
      <div className={clsx('postCard', props.className)}>
         <div className="postCard__picture position-rel">
            <img
               loading="lazy"
               decoding="async"
               alt={props.title}
               src={props.imageUrl}
            />
            {props.category && (
               <div className="postCard__category d-flex  position-abs">
                  {props.category.map((item, index) => (
                     <Chip label={item} />
                  ))}
               </div>
            )}
         </div>
         <div className="postCard__content mt-1">
            <div className="postCard__title">{props.title}</div>
            <ul className="postCard__list d-flex mt-1 mb-1 flex-center">
               <Tooltip text={`Tác giả : ${props.author}`}>
                  <li className="mr-1">
                     <FaUser /> {props.author}
                  </li>
               </Tooltip>
               <Tooltip text="Ngày đăng">
                  <li className="mr-1">
                     <FaCalendar /> {dateFromTimestamp(props.timeStamp)}
                  </li>
               </Tooltip>

               {props.timeToRead && (
                  <Tooltip
                     text={`Thời gian đọc khoảng ${props.timeToRead} phút`}
                  >
                     <li className="mr-1 flex-center">
                        <FaReadme /> {props.timeToRead}
                     </li>
                  </Tooltip>
               )}
            </ul>
            <div className="postCard__text">{props.description}</div>
         </div>
         <div className="postCard__button">
            <button className="button">Read More</button>
         </div>
      </div>
   );
};
