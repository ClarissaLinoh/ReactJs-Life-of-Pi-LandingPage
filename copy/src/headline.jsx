import './headline.css'
import Navbar from './navbar'

function Headline(){
    return(
        <>
        <Navbar/>
            <div className='headline'>
                <div className='headline-text'>
                <h1>LIFE OF PI</h1>
                <h2>Yann Martell</h2>
                <p>A story that challenges the boundary between reality and imagination, where the stories we choose to believe shape our understanding of life. </p>
                </div>
            </div>
        </>
    )
}

export default Headline