import './index.scss';
import myPhoto from 'assets/images/myphoto.jpg';
import { SVGIcon } from 'components/icons';
import devIcon from 'assets/icons/devIcon.svg';
import { FEATURED_POST } from 'fakeData/FeaturedPost';
import { PostCard } from 'components/PostCard';

const Home = () => {
   return (
      <div className="home">
         <div className="home__about grid-layout">
            <div className="home__about-img grid-column">
               <SVGIcon height={'100%'} source={devIcon} />
            </div>
            <div className="home__about-text grid-column">
               <h1>
                  Xin chào <strong>!</strong>
               </h1>
               <h2>Blog của Duy Hiệp</h2>
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
                     <PostCard {...item} key={index} />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Home;
