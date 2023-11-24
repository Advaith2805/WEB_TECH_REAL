import Navbar from './Navbar'
import './Summary.css'
const Summary=()=>{
    return(
        <div>
            <Navbar/>
            <div className="summary-container">
                <div className="summary-content">
                    <p>
                        Your order has been confirmed and shall be emailed to the registered id within 4-5 business days. FOR ENQUIRIES:<br/>
            CONTACT: 8861862081/ 9148294773/ 7406094619<br/>
            EMAIL: thegaminghub@gmail.com
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Summary;