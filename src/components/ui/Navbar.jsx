import React from 'react';

const Navbar = () => {
    return (
        <header>
            <nav className={'navbar'}>
                <ul className={'menu'}>
                    <li>
                        <a href={'/'}>
                            <h1 className={'navbar_company-name'}>Elfen lied</h1>
                        </a>
                    </li>
                    <li>
                        <a href={'/'} className={'navbar_menu-item'}>
                            <div className={'navbar_menu-item__catalog'}>
                                <img src={'/4dots.svg'} alt={'icon'} />
                                <h2>Каталог</h2>
                            </div>
                        </a>
                    </li>
                    <li>
                        <div className={'navbar_menu-item'}>
                            <div className={'navbar_menu-item__info'}>
                                <a href={'/'}>
                                    <h2>Блог</h2>
                                </a>
                                <a href={'/'}>
                                    <h2>Контакты</h2>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href={'/'} className={'navbar_menu-item'}>
                            <div className={'navbar_menu-item__search'}>
                                <img src={'/searchIcon.svg'} alt={'searchIcon'} />
                                <h2>Поиск</h2>
                            </div>
                        </a>
                    </li>
                    <li>
                        <div className={'navbar_menu-item'}>
                            <div className={'navbar_menu-item__user-options'}>
                                <a href={'/favorite'}>
                                    <img src={'/favorite.svg'} alt={'icon'} />
                                </a>
                                <a href={'/profile'}>
                                    <img src={'/profile.svg'} alt={'icon'} />
                                </a>
                                <a href={'/cart'}>
                                    <img src={'/cart.svg'} alt={'icon'} />
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;