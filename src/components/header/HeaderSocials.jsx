import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/ayush-gupta-7b0261205/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/ayushgupta-repo" target="_blank"><FaGithub /></a>
        <a href="https://discord.com/users/Evilious#5351" target="_blank"><FaDiscord /></a>
    </div>
  )
}

export default HeaderSocials