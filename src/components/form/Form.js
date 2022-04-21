import React from "react";
import "./Form.css"
import Signup from "../signup/Signup"
import Personal from "../personal/Personal"
import Other from "../otherinfo/Other";

const Form = () => {

  const [page,setPage] = React.useState(0);

  const [formData,setFormData]= React.useState({
    Email:"",
    Password:"",
    ConfirmPassword:"",
    FirstName:"",
    LastName:"",
    UserName:"",
    Nationality:"",
    AltEmail:"",
    Other:"",

  });

  const FormTitle = ["SIGNUP" , "PERSONAL" , "OTHER"];

  const PageDisplay = ()=>{
    if (page===0) {
      return <Signup setFormData={setFormData} formData={formData}/>;
    }else if(page===1){
    return <Personal setFormData={setFormData} formData={formData} />
    }
    else{
    return <Other setFormData={setFormData} formData={formData}/>;
    }
    
    
  };


  return (
    <div>
      <div className="progress-bar">
        <div style={{width: page===0? "33.3%" : page ===1 ? "66.6%" : "100%"}}></div>
      </div>
      <div className="form">
        <div className="header">
          <h1>{FormTitle[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button onClick={()=>{setPage((page)=>page-1)}} disabled={page==0}>Prev</button>
          <button onClick={()=>{page==(FormTitle.length)-1? alert("Form Submitted Successfully") || console.log(formData):setPage((page)=>page+1)}}>
            {page==(FormTitle.length)-1?"Submit":"Next"}</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
