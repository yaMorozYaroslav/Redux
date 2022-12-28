import React from 'react'

import s from './Email.module.css'
import {Alert} from '../Alert/Alert'

import {useRef} from 'react'
import emailjs from '@emailjs/browser'
import {useSelector, useDispatch} from 'react-redux'

import {openAlert, closeEmail} from '../../Redux/openSlice'

export const Email = () => {
	var [flash, setFlash] = React.useState(0)
	function changer(){if(flash===0){setFlash(1)}else{setFlash(0)}}
	
	React.useEffect(()=>{
		const interval = setInterval(()=>{
			changer()
			},1000)
			return () => clearInterval(interval)
		},[flash, changer]) 
		
		function validateForm() {
  let x = document.forms["form"]["name"].value;
  if (x ==="") {
    alert("Name must be filled out");
    return false;
  }
}
		
		function opener (){ window.open('https://play.google.com')}
		
	const dispatch = useDispatch()
	const selectAlert = state => state.open.alert
	const alert = useSelector(selectAlert)
	
	const form = useRef()
	
	const sendEmail = e => {
		e.preventDefault()
		
		emailjs.sendForm(
		'service_wzlecr5', 'template_hu92t85', form.current, 'LTwbosNcCwgaQan9I')
		.then((result) => {
			console.log(result.text)
			}, (error) => {
				console.log(error.text)
				})
				e.target.reset()
	}
	return(
	<section className={s.container}>
	      <div className={s.form}>
	        <form ref={form} onSubmit={sendEmail}>
	             <label  className={s.label} htmlFor='Name'>Name</label>
	             <input className={s.input}
	                                         type='text' placeholder='Name' name='name'  required/>
	              <label  className={s.label} htmlFor='Email'>Email</label>
	             <input className={s.input}
	                                         type='email' placeholder='Email' name='userEmail' required/>
	             <label  className={s.label} htmlFor='Subject'>Subject</label>
	             <input className={s.inputSub} 
	                                         type='text' placeholder='Subject' name='subject' required />
	   	             <h1 className={s.subtit}>Message</h1>  
	             <textarea className={s.textarea}
	                                         name='message' cols='30' rows='5'></textarea>
	              <button className={s.button} type='submit' onSubmit={validateForm()} onClick={()=>dispatch(openAlert())}>
	              Send</button>
	         </form>
	       </div>
	       <div>
	          <button onClick={opener}>open</button>
	         <button className={flash?s.closer:s.closer0} onClick={()=>dispatch(closeEmail())}>X</button>
	         <h2 className={s.tit}>Contact Form</h2>
	       </div>
	       {alert? <Alert /> : null}
	     </section>                                         
	)	
}


