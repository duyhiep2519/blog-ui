import devIcon from 'assets/icons/devIcon.svg';
import { SVGIcon } from 'components/icons';
import { PostCard } from 'components/PostCard';
import { POSTS } from 'fakeData/posts';
import { MainLayout } from 'layouts/MainLayout';
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

         <MainLayout>
            <div>
               <h2 className="title-border">Recent Post</h2>
               <div className="home__featuredPost grid-layout">
                  {POSTS.map((item, index) => (
                     <PostCard key={index} {...item} />
                  ))}
               </div>
            </div>
         </MainLayout>
      </div>
   );
};

export default Home;
