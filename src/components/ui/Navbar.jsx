import React from 'react';

const Navbar = () => {
    return (
        <header className={'navbar'}>
            <a href={'/'}><h1 id={'navbar_company-name'}>Elfen lied</h1></a>
            <div className={'navbar_menu-item'}>
                <img src={'/4dots.svg'} alt={'icon'} />
                <h2>Каталог</h2>
            </div>
        </header>
    );
};

export default Navbar;