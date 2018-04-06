import React from 'react';

const Footer = props =>{
    return (
        <footer className='footer text-faded text-center py-5'>
          <div className='container'>
            <p className='m-0 small' href=''>
              <a href='https://www.devpleno.com/software-do-bem'><img src='img/software-do-bem-logo-320x128.png' alt='' /></a><br />
              Desenvolvido durante o Hands-on ReactJS do DevPleno por Tulio Faria. Saiba mais.
            </p>
          </div>
        </footer>
    );
}

export default Footer;