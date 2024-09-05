import React, {useState} from 'react';

const BlogCard = () => {
    return (
        <div style={{display:'flex', marginTop:'5rem'}}>
            <img style={{position:'absolute'}} src={'form.png'} alt={'BlogCardBg'} />
            <div style={{zIndex:1, marginLeft:'1.5rem'}}>
                <div style={{display:'flex',gap:'8rem' }}>
                    <p>01</p>
                    <p style={{textAlign:'right'}}>Laura <br/> Busche</p>
                </div>
                <div style={{textTransform:'uppercase',position:'absolute', display:'flex',justifyContent:'space-between',gap:'7rem', marginTop:'1rem'}}>
                    <h1 style={{fontSize:'28px', lineHeight:'36px', fontWeight:500}}>новая <br/> коллекция <br/> кресел</h1>
                    <img style={{position:'relative',bottom:'4.8rem',right:'1.2rem',borderRadius:'25px'}} src={'sofa.png'} alt={'sofa'} />
                </div>
                <div>
                    <div className={'circle3'}>
                        <p style={{marginTop:'1.5rem', textTransform:'uppercase', textAlign:'center',lineHeight:'19px'}}><span style={{fontSize:'40px', fontFamily:'Floreste'}}>3</span><br/>мин</p>
                    </div>
                </div>
                <div style={{marginTop:'6.5rem'}}>
                    <h4 style={{textTransform:'uppercase', fontSize:'15px', lineHeight:'20px', fontWeight:500}}>14 января <br/> 2023</h4>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;