import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
        <main role={"main"}>
            <article>
                <section>
                    <div className={'main-content'}>
                        <div>
                            <div className={'today-product_background'}>
                                <img src={'/Benjamin Moore.png'} alt='BenjaminMoore' />
                            </div>
                            <div className={'today-product-container'}>
                                <h3 className={'today-product'}>Товар дня</h3>
                                <div className={'today-product-description'}>
                                    <h1 className={'today-product-name'}>Santa Trinita</h1>
                                    <p>
                                        Функциональная дизайнерская
                                        лампа для создания максимально
                                        комфортного освещения
                                    </p>
                                </div>
                                <div className={'today-product-price'}>
                                    <h4>
                                        150 000
                                        <span className={'main-content_today-product-price__ruble-sign'}>₽</span>
                                    </h4>
                                </div>
                            </div>
                            <div className={'today-product_buy-button-container'}>
                                <button className={'today-product_buy'}>
                                    <img src={'today-product-buy-button.svg'} alt={'button'} />
                                </button>
                            </div>
                            <div className={'main-content__lamp'}>
                                <img src={'/lamp.png'} alt={'lamp'}/>
                            </div>
                            <div className={'next-slide-product-container'}>
                                <img src={'Rectangle 847.png'} alt={'bgRed'} />
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    </>
  )
}

export default App
