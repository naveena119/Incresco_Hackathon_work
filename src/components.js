import React from "react";

export const InputComponent = (props) => {
  return (
      <div
        style={{
          display: "flex",
          flexDirection: props.type === "text" ? "column" : "row",
          marginBottom:'10px',
          
        }}
      >
        {props.type === "radio" && <input {...props}></input>}
        <TextComponent
          label={props.label}
          styleProps={props.styles}
          CustomTag={props.type === "text" ? "div" : "span"}
        
        />
        {props.type === "text" && <input {...props}></input>}
        
      </div>
       
  );
};

export const TextComponent = ({
  label,
  styleProps,
  isMandatory,
  children,
  CustomTag = "div",
}) => (
  <CustomTag style={styleProps}>
    {label}
    {isMandatory && <span>*</span>}
    {children}
  </CustomTag>
);

export const DatePick=(props)=>
{
    return <div>
      {/* <h5>DOB(DD/MM/YY)</h5> */}
    <input type="date"/></div>
    
  };

export const Dropdown=(props) =>{

    return <div styles={{padding:"10px"}}> 
    <select {...props} > {
     props.input && props.input.map(o => 
      <option key={o.key} value={o.key}> {o.text}
      </option>) } 
      </select> 
    </div>;
  
};

export const Button=(props)=>{
  return <div><button  style={{backgroundColor: "#8D19FFB2",marginTop:'30px',marginLeft:"1200px",padding:"10px",borderRadius:"5px"}}
onClick={()=>props.clickEvent(props.updateStateMethod,props.stateVariable)} >{props.label} 

</button></div>

};
export const Box = (props) => (
  <>
    <TextComponent label={props.header} styleProps={props.styles}/>
    <div style={{
      border: "1px solid black",borderRadius:"10px" ,backgroundColor:"#F9F9F9",padding:"10px",borderWidth:"0.001px"
      
    }}>
      {props.children}
      </div>
  </>
);
