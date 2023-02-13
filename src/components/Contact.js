import React from 'react'
import '../styles/Contact.css'
import mail from '../images/mail.gif'
import mailnone from '../images/mailnone.gif'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import mail2 from '../images/mail2.gif'


function Contact() {
  const {register,handleSubmit,formState:{errors}}=useForm()
  const onFormSubmit=(objData)=>{
    console.log(objData)
      axios.post("http://localhost:3000/data/submit",objData)
      .then((response)=>{
          alert(response.data.message)
      })
      .catch((err)=>{
          console.log(err)
          alert("error occured",err.message)
      })
  }

  return (
    <div className='c'>
        <div className='c-bg'></div> 
        <div className='c-wrapper'>
            <div className='c-left'> 
            <h1 className='thank'>I'd love to hear from u</h1>
            <h3 className='for'> thank you for visiting my blog...</h3>
            <p className='c-matters'>your message and suggetions will be greatly valued.please comment on my page to help me continue enhancing your experience.  </p>
            <div className='contact-gif'>
              {/* <img src={bird} alt='' className='contact-img'></img> */}
              {/* <img src={mail} alt='' className='contact-img'></img> */}
              {/* <img src={mailnone} alt='' className='contact-img'></img> */}
             <img src={mail2} alt='' className='contact-img'></img>
            </div>
            </div>
            <div className='c-right'>
                <div className='c-form'>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                      <div className='form-group'>
                      <label for='name'>Name</label>
                        <input type='text' className=''id='name' placeholder='enter name' {...register("name")}></input>
                      </div>
                      <div class="form-group">
                        <label for="Email">Email address</label>
                        <input type="email" className="" id="Email" aria-describedby="emailHelp" placeholder="Enter email"  {...register("Email1")}></input>
                        
                      </div>
                      <div className='form-group'>
                        <label for='message'>Message</label>
                        <textarea rows='5' placeholder='enter your message' id='message' className=''  {...register("message")}></textarea>
                      </div>
                      <div className='form-group contact-submit-button'>
                      <button type="submit"><h2 className='button-text'>Submit</h2></button>
                      </div>
                  </form>   

                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact