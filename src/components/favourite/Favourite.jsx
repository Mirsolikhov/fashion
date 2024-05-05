import FavouriteCard from '../favourite-card/FavouriteCard';
import './favourite.css';

import fImg1 from './../../img/images/promo-01.jpg'
import fImg2 from './../../img/images/promo-02.jpg'

const Favourite = () => {
    return ( 
        <section className="favourite">
            <div className="container">
                <div className="favourite__header">
                    <h2 className="title-2">Young’s Favourite</h2>
                </div>
                <div className="favourite__cards">
                    <FavouriteCard title="Trending on instagram" img={fImg1}/>
                    <FavouriteCard title="All Under $40" img={fImg2}/>
                </div>
            </div>
        </section>
     );
}
 
export default Favourite;