import "../../styles/CouponBox.css";
const CouponBox = () => {

    return (

        <div className="coupon-box">

            <h3>Coupon Code</h3>

            <input
                type="text"
                placeholder="Enter Coupon"
            />

            <button>Apply</button>

        </div>

    );

};

export default CouponBox;