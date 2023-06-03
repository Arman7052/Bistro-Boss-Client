import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const PaymentHistory = () => {
    return (
        <div>
            <Helmet>
                <title> Bistro Boss | Payment History</title>

            </Helmet>
             <SectionTitle
            subheading={'At a Glance!'}
            heading={'PAYMENT HISTORY'}
            ></SectionTitle>

            
        </div>
    );
};

export default PaymentHistory;