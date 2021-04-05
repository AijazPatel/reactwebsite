import React, { useState } from 'react';

const Contact =()=>{

    const [data,setDate]=useState({
        Fullname:'',
        Phone:'',
        Email:'',
        Msg:'',

    });
 

    const InputEvent=(event)=>{

        const {name,value}=(event.target);
        
        setDate((preVal)=>{

            return {
                ...preVal,
                [name]:value,
            }
        })


    }


    const formSubmit =(e)=>{
        e.preventDefault();

        alert(`My Name is ${data.Fullname}. My mobile number is  ${data.Phone} and Email is ${data.Email}, Here is What I want to say ${data.Msg}`)

    }

return(
    <>
    <div className="my-5">
    <h1 className="Contact text-center">Contact Us</h1>
    </div>

    <div className="container contact_div">
    <div className="row">
    <div className="col-md-6 col-10 mx-auto">

        <form className="form"  onSubmit={formSubmit}>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" name="Fullname" value={data.Fullname} onChange={InputEvent} placeholder="Enter Your Name" />
        </div>


        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Phone</label>
        <input type="number" class="form-control" id="exampleFormControlInput1" name="Phone" value={data.Phone} onChange={InputEvent} placeholder="Mobile Number" />
        </div>


        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1"  name="Email" value={data.Email} onChange={InputEvent} placeholder="name@example.com" />
        </div>


        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea class="form-control" id="exampleFormControlTextarea1"    name="Msg" value={data.Msg} onChange={InputEvent} rows="3"></textarea>
        </div>


        <div class="col-12">
        <button class="btn btn-outline-success" type="submit">Submit form</button>
        </div>

        </form>
        
    </div>



    </div>
    </div>
    </>
);

};

export default Contact;
