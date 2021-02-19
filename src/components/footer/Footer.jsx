import React, { useContext} from 'react';
import { Link } from 'react-scroll'
import '../footer/footer.css'
import LandingContext from '../../context/context'


const Footer = () => {
  const { footer } = useContext(LandingContext);
  const { footerMap } = footer
  
return (
  <footer className='footer'>
      <p className="title-footer">
          © {new Date().getFullYear()} - Developed by {' '}
         
            <i className='nameFooter'>Lucas Gabriel de Jesus</i>
         
        </p>
          <ul className='footer-list'>
        
        {footerMap && 
           footerMap.map(function(item) {
            
          const { id, url, icon, icon1} = item
             return (
                <li key={id}>
                
                  <a  
                    className='footericon'
                    href={url || 'https://www.linkedin.com/in/lucasgabrieljesus/'} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    >
                      {icon}
                      {icon1}
                  </a>
                    
                </li>
              );
          })}
                 <span>
                   <Link to="mapHeader" smooth duration={1000}>
                      <i className="fa fa-angle-up fa-2x" aria-hidden="true" id='topFooter'/>
                    </Link>
                </span>   
        
        </ul>
    </footer>
   );
}

export default Footer
