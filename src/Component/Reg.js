import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Reg(){ 

   const navigate =  useNavigate();

    const[formdata,setFormadata]=  useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        country:'',
        remember:false
    }); 

    const[error,setError] = useState({});

    const onchangeHandler = (event)=>{
     setFormadata({
        ...formdata,
        // [event.target.name]:event.target.value
           [event.target.name]:event.target.type === 'checkbox'?event.target.checked:event.target.value
     })
    }
     const onsubmithandler = (event)=>{
        setError({});
        setFormadata({fname:'',lname:'',email:'',password:'',country:'',remember:''})
        event.preventDefault();
        if(formdata.fname === '' || formdata.fname === null){
            // alert("first name is required!!!");
            setError({
              name : 'first name is required!!!'
            })
            navigate('/reg');
        }
        else if(formdata.lname.length < 6){
            // alert("should be greater 6");
            setError({
              lname : 'should be greater 6'
            })
        }
        else if(formdata.password.length < 3 || formdata.password.length > 9){
          //  alert("should be in range 3 to 9");
           setError({
              pass : 'should be in range 3 to 9'
            })
        }
        else{
          console.log(formdata);
        }
     }
    return(
        <>
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
                 <form onSubmit={onsubmithandler}>
     <div className="mb-3 mt-3">
            <label for="fname" className="form-label">FirstName:</label>
            <input type="text" className="form-control"
             id="fname" placeholder="Enter First Name" 
             name="fname" 
             value={formdata.fname}
             onChange={onchangeHandler}   
             />
             {error && <p style={{color:'red'}}>{error.name}</p>}
          </div>
           <div className="mb-3 mt-3">
            <label for="lname" className="form-label">LastName:</label>
            <input type="text" className="form-control"
             id="lname" placeholder="Enter Last Namel"
              name="lname" 
               value={formdata.lname}
               onChange={onchangeHandler}   
              />
              {error && <p style={{color:'red'}}>{error.lname}</p>}
          </div>
            <div className="mb-3">
            <label for="email" className="form-label">Email:</label>
            <input type="email" className="form-control" 
            id="email" placeholder="Enter EMail" 
            name="email"
             value={formdata.email}
              onChange={onchangeHandler}   
             />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">Password:</label>
            <input type="password" className="form-control" 
            id="pwd" placeholder="Enter password" 
            name="password"
             value={formdata.password}
             onChange={onchangeHandler}   
             />
              {error && <p style={{color:'red'}}>{error.pass}</p>}
          </div>
          <div className="mb-3">
            <label for="country" className="form-label">Country:</label>
          <select className="form-select" 
          name="country"
          value={formdata.country}
          onChange={onchangeHandler}
          >
              <option value="INDIA">INDIA</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="JAPAN">JAPAN</option>
           </select>
             </div>
          <div className="form-check mb-3">
            <label className="form-check-label">
            <input className="form-check-input" 
            type="checkbox" 
            name="remember"
            // value={formdata.remember}
            checked={formdata.remember}
            onChange={onchangeHandler}
             /> Remember me
           </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
    </form>  
            </div>
            <div className="col-sm-4"></div>
        </div>
          <p>{JSON.stringify(formdata)}</p>
        </>
    )
}
export default Reg;