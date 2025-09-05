import { useForm } from "react-hook-form";

function AboutUs(){

     const {register,handleSubmit,formState: { errors }} = useForm();

     const handleSubmit1 = (data)=>{
       console.log(data);
     }
    return(
        <>
             <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
                 <form onSubmit={handleSubmit(handleSubmit1)}>
     <div className="mb-3 mt-3">
            <label for="fname" className="form-label">FirstName:</label>
            <input type="text" className="form-control"
             id="fname" placeholder="Enter First Name" 
             {...register('fname',{required:true})} 
             />
             {errors.fname  && <p style={{color:'red'}}>This is required!!!</p>}
          </div>
           <div className="mb-3 mt-3">
            <label for="lname" className="form-label">LastName:</label>
            <input type="text" className="form-control"
             id="lname" placeholder="Enter Last Namel"   
             {...register('lname',
             {required:true,
             message:'This is required!!!'})} 
              />
            {errors.lname?.message}
          </div>
            <div className="mb-3">
            <label for="email" className="form-label">Email:</label>
            <input type="email" className="form-control" 
            id="email" placeholder="Enter EMail"  
            {...register('email')}  
             />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">Password:</label>
            <input type="password" className="form-control" 
            id="pwd" placeholder="Enter password" 
            {...register('password' ,{required:true,maxLength:{
                value : 9,
                message :'max lenght should be 9'
            },
            minLength:{
                value:3,
                message:'min length sould be 3'
            }})}   
             />
           <p style={{color:'red'}}> {errors.password?.message}</p>
          </div>

             <div className="mb-3">
            <label for="age" className="form-label">Age:</label>
            <input type="text" className="form-control" 
            id="age" placeholder="Enter age"  
            {...register('age',{required:true,min:{
                value: 18,
                message:'min age should be 18'
            },
            max:{
                value:65,
                message:'max age should be 65'
            }
            })}  
             />
             <p style={{color:'red'}}> {errors.age?.message}</p>
          </div>
          <div className="mb-3">
            <label for="country" className="form-label">Country:</label>
          <select className="form-select" 
          {...register('coutry')} 
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
            {...register('remember')} 
             /> Remember me
           </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
    </form>  
            </div>
            <div className="col-sm-4"></div>
        </div>
        </>
    )
}
export default AboutUs;