import React,{useState} from 'react';
import {useForm} from 'react-hook-form'


export default function FormTraining(){

  const defaulValues = {
      username:"",
      email:"",
      password:""}
  const [user,setUser] = useState(defaulValues);
  const {register,handleSubmit,formState,reset,setError} = useForm(
    {
      defaultValues:defaulValues,
      mode:"onChange"
    
    });
  const {isDirty,isValid,isSubmitting,errors} = formState;

  const handleOnSubmit = async (data)=>{
    setTimeout(()=>{reset()},2000)
    setError("username",{
      type:"manual",
      shouldFocus:true,
      message:"ce champ est obligatoire"
    })

  }

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>

     <div>
        <label htmlFor="username">Usename</label>
        <input {...register("username",{required:"this field is required",
        required:"this field is required",  
        minLength:{value:5,message:"au moins 5 charactere"},
        maxLength:{value:15,message:"au plus 15 charactere"}
      })}
        type="text" name="username" />
        {errors.username && <span style={{color:"red"}}>{errors.username.message}</span>}
     </div><br />
      <div>
        <label htmlFor="email">Email</label>
        <input {...register("email",
        {required:"this field is required",
        minLength:{value:5,message:"au moins 5 charactere"},
        maxLength:{value:15,message:"au plus 15 charactere"}
      })}
        type="email" name="email" />
        {errors.email && <span style={{color:"red"}}>{errors.email.message}</span>}
      </div><br />
        <div>
          <label htmlFor="password">Password</label>
          <input {...register("password",{required:"this field is required"})}
          type="password" name="password"/>
          {errors.password && <span style={{color:"red"}}>{errors.password.message}</span>}
        </div><br />

        <button  type="submit">Envoyer</button>

    </form>
  )
}