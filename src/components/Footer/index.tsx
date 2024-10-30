import React from 'react'

import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/insta.png'
import face from '../../assets/images/face.png'
import tt from '../../assets/images/tt.png'
import { Logo } from '../../styles'
import { FooterContainer, FooterContent, SocialContent } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <a href="#header" title="Clique aqui para voltar ao topo">
        <Logo src={logo} alt="5A FOOD" />
      </a>
      <SocialContent>
        <a
          href="https://www.instagram.com/fiveatech/"
          title="Link para instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={insta} alt="Instagram" />
        </a>
        <a
          href="https://www.facebook.com/fiveatech/"
          title="Link para facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={face} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/fiveatech/"
          title="Link para instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tt} alt="Twitter" />
        </a>
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
