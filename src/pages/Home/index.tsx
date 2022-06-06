import devIcon from 'assets/icons/devIcon.svg';
import { SVGIcon } from 'components/icons';
import { PostCard } from 'components/PostCard';
import { FEATURED_POST } from 'fakeData/FeaturedPost';
import './index.scss';

const Home = () => {
   return (
      <div className="home">
         <div className="home__about grid-layout w-100">
            <div className="home__about-img grid-column margin-center">
               <SVGIcon height={'100%'} source={devIcon} />
            </div>
            <div className="home__about-text grid-column margin-center">
               <h1>
                  Welcome <strong>!</strong>
               </h1>
               <h2>to my blog</h2>
               <p>
                  "Aim for the moon. If you miss, you may hit a star!" W.
                  Clement Stone
               </p>
               <button className="button">Know About Me</button>
            </div>
         </div>
         {/* Featured Post */}
         <div className="home__featuredPost">
            <h2>Featured Post </h2>
            <div className="home__featuredPost-post grid-layout">
               {FEATURED_POST.map((item, index) => (
                  <div className="grid-column">
                     <PostCard
                        {...item}
                        key={index}
                        className="margin-center p-2"
                     />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Home;
