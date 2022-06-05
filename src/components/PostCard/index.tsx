import { FeaturedPost } from '@types';
import { Chip } from 'components/ui/Chip';

export const PostCard = (props: FeaturedPost) => {
   return (
      <div className="postCard">
         <div className="postCard__picture">
            <img
               loading="lazy"
               decoding="async"
               alt={props.title}
               src={props.imageUrl}
            />
            {props.category && (
               <div className="postCard__category">
                  {props.category.map((item, index) => (
                     <Chip label={item} />
                  ))}
               </div>
            )}
         </div>
      </div>
   );
};
