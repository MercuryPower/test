import React from 'react';

const Card = () => {
    return (
        <div style={{display:'flex', marginTop:'5rem'}}>
            <h1 style={{textTransform:'uppercase', textWrap:'wrap', fontSize:'28px', lineHeight:'36px', textAlign:'left', height:'auto', zIndex:2, fontWeight:500, marginTop:'35px'}}>Напольные <br/> Зеркала</h1>
            <img style={{position:'absolute'}} src={'Subtract.png'} alt={'cardBg'} />
            <div>
                <img style={{position:'relative', top:'220px',right:'170px'}} src={'madedWord.png'} />
            </div>
            <div>
                <button className={'button'}>
                    <div className="circle"></div>
                    <img style={{position:'relative',left:'36px', top:'38px'}} src={'Arrow.svg'} alt={'arrow'}/>
                </button>
            </div>
            <div style={{display:'flex'}}>
                <div className="circle2">
                    <p style={{marginLeft:'1.25rem', marginTop:'1.5rem'}}>
                        <span style={{fontSize:'40px', fontFamily:'Floreste'}}>4</span> шт</p>
                </div>
            </div>
            <div style={{position:'absolute'}}>
                <img style={{zIndex:3, left:'90px', top:'100px', position:'relative'}} src={'mirror1.png'} alt={'mirror1'} />
            </div>
        </div>
    );
};

export default Card;