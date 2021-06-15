import React from 'react';
import Footer from '.';
import Icon from '../icons';

export function FooterContainer() {
  return(
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Learn More</Footer.Title>
            <Footer.Link href="#">About Us</Footer.Link>
            <Footer.Link href="http://localhost:3000/work">How it work</Footer.Link>
            <Footer.Link href="#">Suggestions</Footer.Link>
            <Footer.Link href="http://localhost:3000/create">Your ad here</Footer.Link>
            
            
          </Footer.Column>


          <Footer.Column>
            <Footer.Title>Community</Footer.Title>
            <Footer.Link href="#">Our principles</Footer.Link>
             
            <Footer.Link href="#">Always there for you</Footer.Link>
            <Footer.Link href="#">Invite friends</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Support</Footer.Title>
            <Footer.Link href="http://localhost:3000/contact">Contact Us</Footer.Link>
            <Footer.Link href="#">Code Of conduct</Footer.Link>
            <Footer.Link href="#">Frequently asked questions</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Social Network</Footer.Title>
            <Footer.Link href="https://www.facebook.com/jorge.rs.poa"target="_blank" rel="noopener noreferrer"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
            <Footer.Link href="https://www.instagram.com/jorge.santos_oficial" target="_blank" rel="noopener noreferrer"><Icon className="fab fa-instagram" />Intagram</Footer.Link>
            <Footer.Link href="https://twitter.com/PoaJorge" target="_blank" rel="noopener noreferrer"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
      
      <Footer.Policy>
        <h5>Copyright © 2021 | Sundry App | All rights reserved - <span><a href="/" rel="noopener noreferrer"> Terms of Use | Privacy Policy</a></span></h5>
      </Footer.Policy>
      
    </Footer>
  )
}
