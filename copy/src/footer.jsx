import './footer.css'
import phone from "./assets/waLogo.png"

function Footer(){
    return(
        <>
            <div className='footerArea'>
                <h2>Contacts info:</h2>
                <div className='info'>
                    <img src={phone} alt='phone'/>
                    sampleEmail@gmail.com
                </div>

                <div className='info'>
                    <img src={phone} alt='phone'/>
                    @instagram
                </div>

                <div className='info'>
                    <img src={phone} alt='phone'/>
                    @Facebook
                </div>

            </div>
        </>
    )
}

export default Footer