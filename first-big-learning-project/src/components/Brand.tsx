
import logo from '../assets/Geass.svg';
import '../css/brand-container.css'

const Brand = () => {
    return (
        <div className="brand-container">
            <img className='logo-img' src={logo}></img>
            <div className='splitter'></div>
            <p>Everything or nothing!</p>
        </div> 
    )
}

export default Brand;