import React from 'react'

import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/insta.png'
import face from '../../assets/images/face.png'
import tt from '../../assets/images/tt.png'
import { FooterContainer, FooterContent, SocialContent } from './styles'

const currentYear = new Date().getFullYear();

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <img src={logo} alt="5A FOOD" />
      <SocialContent>
        <img src={insta} alt="Instagram" />
        <img src={face} alt="Facebook" />
        <img src={tt} alt="Twitter" />
      </SocialContent>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado. {currentYear}
      </p>
    </FooterContent>
  </FooterContainer>
)

export default Footer
