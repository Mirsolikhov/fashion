import './vouchers.css'
import voucherImg from './../../img/images/vouchers-img.png'
import googlePlay from './../../img/icons/google-play.png'
import appStore from './../../img/icons/app-store.png'

const Vouchers = () => {
    return ( 
        <section className="vouchers">
            <div className="container">
                <div className="vouchers__container">
                    <div className="vouchers__box">
                        <div className="voucher__info">
                            <div className="voucher__header">
                                DOWNLOAD APP & GET THE VOUCHER!
                            </div>
                            <div className="voucher__text">
                                Get 30% off for first transaction using
                                Rondovision mobile app for now.
                            </div>
                        </div>
                        <div className="voucher__btns">
                            <a href="#!"><img src={appStore} alt="gplay"/></a>
                            <a href="#!"><img src={googlePlay} alt="appstore"/></a>
                        </div>
                    </div>
                    <div className="vouchers__img">
                        <img src={voucherImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Vouchers;