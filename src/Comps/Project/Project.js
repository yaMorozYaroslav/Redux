import React from 'react'
import s from './Project.module.css'

import {LaptopZoom} from './lenses.js'

export function Project(){
	function openCode(){ window.open('https://github.com/yaMorozYaroslav/ItemAuth')}
	function openApp(){window.open('https://thefunnyfair.netlify.app')}
	function openBack(){window.open('https://back-item.herokuapp.com/')}
	
	const tablet = window.innerWidth < 863
	const phone = window.innerWidth < 452
	console.log(window.innerWidth) 
    
	return (<>

	<div  className={s.container} >
        <div className={s.zoomCon}>  
         <LaptopZoom/>
        </div>
    
	<div className={s.descAndButs}>
	 <section className={s.text}>
	      This is one of my first full stack projects created half a year ago
	    using NodeJS, ExpressJS, MongoDB, React and Redux.
	      
	      There is a registration that allows you to store the name, 
	      email address and encrypted password in MongoDB for 
	      later use in token authentication. An authorized user can 
	      add items to the database and manage those that he added.
	   </section>
	<section className={s.buttons}>   
	   <button className={s.opener} onClick={openCode}>
	            <p className={s.butText}> Open Application Code on GitHub</p></button>
	   <button className={s.opener} onClick={openApp}>
	            <p className={s.butText}>Open Deployed Application on Netlify</p></button>
	   <button className={s.opener} onClick={openBack}>
	            <p className={s.butText}>Open Deployed Backend on Heroku</p></button>
   </section>
   </div>
	</div>
	</>)
	}
