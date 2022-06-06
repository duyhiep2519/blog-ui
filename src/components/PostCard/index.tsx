import { FeaturedPost } from '@types';
import clsx from 'clsx';
import { Chip } from 'components/ui/Chip';
import './index.scss';

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
            <ul className="postCard__list d-flex mt-1 mb-1">
               <li className="mr-1">{props.author}</li>
               <li className="mr-1">{props.timeStamp}</li>
               {props.timeToRead && (
                  <li className="mr-1">{props.timeToRead}</li>
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
