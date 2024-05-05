import './banner.css';
import bannerImg from './../../img/images/promo-img.png'

const Banner = () => {
    return ( 
        <section className="banner">
            {/* <div className="container"> */}
                <div className="banner__box">
                    <div className="banner__img">
                        <img src={bannerImg} alt="" />
                    </div>
                    <div className="banner__info">
                            <div className="banner__title">
                                <span class="banner__highlight">
                                    <span>
                                        PAYDAY
                                    </span>
                                </span> 
                                SALE NOW
                            </div>
                            <div className="banner__text1">Spend minimal $100 get 30% off
        voucher code for your next purchase</div>
                            <div className="banner__text2">
                                <span className="date">1 June - 10 June 2021</span>
                                <span>*Terms & Conditions apply</span>
                            </div>
                            <div className="banner__btn">
                                <a href="#!">SHOP NOW</a>
                            </div>
                    </div>
                </div>
            {/* </div> */}
        </section>
     );
}
 
export default Banner;