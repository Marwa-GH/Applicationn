import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
          <footer>
  <div class="container">
    <div class="row">
      <div class="col-md-4 footer-column">
        <ul class="nav flex-column">
          <li class="nav-item">
            <span class="footer-title">Product</span>
          </li>
         
          
        </ul>
      </div>
      <div class="col-md-4 footer-column">
        
      </div>
      <div class="col-md-4 footer-column">
        <ul class="nav flex-column">
          <li class="nav-item">
            <span class="footer-title">Contact & Support</span>
          </li>
          <li class="nav-item">
            <span class="nav-link"><i class="fas fa-phone"></i>+80 80 80 80 80</span>
          </li>
        
        </ul>
      </div>
    </div>

    <div class="text-center"><i class="fas fa-ellipsis-h"></i></div>
    
    <div class="row text-center">
      <div class="col-md-4 box">
        <span class="copyright quick-links">Copyright &copy; Your Website <script>document.write(new Date().getFullYear())</script>
        </span>
      </div>
      <div class="col-md-4 box">
        <ul class="list-inline social-buttons">
          <li class="list-inline-item">
            <a href="https://twitter.com/?lang=fr">
            <i class="fab fa-twitter"></i>
          </a>
          </li>
          <li class="list-inline-item">
            <a href="https://www.facebook.com/">
            <i class="fab fa-facebook-f"></i>
          </a>
          </li>
          <li class="list-inline-item">
            <a href="https://www.linkedin.com/">
            <i class="fab fa-linkedin-in"></i>
          </a>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</footer>  
        </div>
    )
}

export default Footer
