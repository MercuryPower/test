import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "@components/ui/Card.jsx";
import BlogCard from "@components/ui/BlogCard.jsx";

function App() {

  return (
    <>
        <main role={"main"}>
            <article>
                <section>
                    <div className={'main-content'}>
                        <div className={'today-product_background'}>
                            <img src={'/Benjamin Moore.png'} alt='BenjaminMoore' />
                        </div>
                        <div className={'first-slide'}>
                            <div className={'main-content__lamp'}>
                                <img src={'/lamp.png'} alt={'lamp'}/>
                            </div>
                            <div className={'today-product-container'}>
                                <h3 className={'today-product'}>Товар дня</h3>
                                <div className={'today-product-blocks'}>
                                    <div className={'today-product-group'}>
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
                                </div>
                            </div>
                        </div>
                        <div className={'next-slide-product-container'}>
                            <div>
                                <img style={{position:'absolute', zIndex:1, top:0, right:'10px'}} src={'Rectangle 847.png'} alt={'bgRed'} />
                                <div style={{zIndex:3, position:'relative', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',top:'350px', right:'60px'}}>
                                    <img className={'product'} src={'table2.png'} alt={'table1'} />
                                    <div style={{marginTop:'200px', textAlign:'center'}}>
                                        <p style={{textTransform:'uppercase', opacity:'60%'}}>Слайд</p>
                                        <p style={{fontSize:'40px', fontFamily:'Floreste', fontWeight:400}}>02</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'next-slide-product-container'}>
                            <div>
                                <img style={{position:'absolute', zIndex:1, top:0, left:'220px',}} src={'Rectangle 848.png'} alt={'bgRed'} />
                                <div style={{zIndex:3, position:'relative', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',top:'350px', left:'300px'}}>
                                    <img className={'product'} src={'table.png'} alt={'table1'} />
                                    <div style={{marginTop:'210px', textAlign:'center'}}>
                                        <p style={{textTransform:'uppercase', opacity:'60%'}}>Слайд</p>
                                        <p style={{fontSize:'40px', fontFamily:'Floreste', fontWeight:400}}>03</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={'category-content'}>
                        <h1 style={{textTransform:'uppercase', textAlign:'center', fontWeight:500}}>Категории</h1>
                        <div className={'category-cards'}>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </section>
                <div style={{marginTop:'575px'}}>
                    <img style={{width:'100%', position:'relative', zIndex:3}} src={'line.png'} alt={'line'} />
                    <img style={{width:'100%', position:'relative', bottom:'220px'}} src={'line2.png'} alt={'line2'}/>
                </div>
                <section style={{height:'100vh',marginLeft:'3em', marginRight:'3em'}}>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div style={{display:'flex', gap:'45px'}}>
                            <img src={'paginator.svg'} alt={'paginatorIcon'}/>
                            <h1 style={{textTransform:'uppercase', textAlign:'center', fontWeight:500}}>Блог</h1>
                        </div>
                        <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                            <p style={{margin:0,textTransform:'uppercase', textAlign:'center', fontSize:'40px', fontFamily:'Floreste', fontWeight:400, marginRight:'27px'}}>02</p>
                            <hr className={'line'}/>
                            <p style={{margin:0,textTransform:'uppercase', textAlign:'center', fontSize:'40px', fontFamily:'Floreste', fontWeight:400,marginLeft:'35px'}}>04</p>
                        </div>
                    </div>
                    <div className={'blog-cards'} >
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </section>
                <footer>
                    <div style={{display:'flex', justifyContent:'space-between', marginLeft:'3rem', marginRight:"3rem",height:'129px'}}>
                        <p>@2023</p>
                        <p>Все права защищены</p>
                    </div>
                </footer>
            </article>
        </main>
    </>
  )
}

export default App
