import React, { useState } from "react";
import ReactDOM from "react-dom";
//import Select from 'react-select';
import { TextComponent, InputComponent, Box ,DatePick,Dropdown} from "./Components";

export const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#8D19FFB2",
        justifyContent: "center",
        alignItems: "center",
        height:"200px"
        
      }}
    >
      <TextComponent
        label="INCRESCO TECHNOLOGIES"
        styleProps={{ fontSize: "48px", textAlign: "center" ,}}
      />
      <br></br>
      <TextComponent
        label="CAMPUS HIRING-2023"
        styleProps={{ fontSize: "36px", textAlign: "center" ,height:"80px"}}
      />
    </div>
  );
};
export const Attatchments = () => {
  return (
    
    <>
      <div>
      <h3>ATTACHMENTS</h3>
        <TextComponent isMandatory={"true"}
          styleProps={{ fontSize: "18px", textAlign: "left", fontWeight: 700 }}
          label="Add Resume/CV"
          CustomTag="span"
        >
          <TextComponent
            styleProps={{
              fontSize: "18px",
              textAlign: "left",
              fontWeight: 400,
              
            }}
            CustomTag="span"
            label="Accept format: doc/.docx/.pdf;Size: 1MB"
          />
        </TextComponent>
       
      </div>
      <button>Choose File</button>
    </>
  );
};

 
export const App = ({data}) => {
  const [job,setJob]=useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName,setMiddleName]=useState("");
  const [number,setNumber]=useState("");
  const [email,setEmail]=useState("");
  const [gender, setGender] = useState("");
  const [tenthp,setTenthp]=useState("");
  const [twelvep,setTwelvep]=useState("");
  const [degree,setDegree]=useState("");
  const [college,setCollege]=useState("");
  const [reg,setReg]=useState("");
  const [branch,setBranch]=useState("");
  

  const submitHandler=(a)=>{a.preventDefault();
   console.log("Jobprofile :",job,
  "FirstName :",firstName,
    "MiddleName :",middleName,
    "LastName :",lastName,
  "Contact Number :",number,
  "EmailId:",email)
    
    }
  
  
return (
      <div>
        <Header />
        <form onSubmit={submitHandler}>  
          <h2>Registration Form</h2>
          <TextComponent />
          <Box header="Job Details" styles={{padding:"0px 4px 10px 4px"}}>
          <InputComponent 
              type="text"
              label={<TextComponent isMandatory={"true"}
              
              label="Job Profile"    value={job}/>}
             // placeholder="Enter First name"
              value={job}
              style={{borderRadius:"5px",
              borderWidth: "1px",
               blockSize: "30px"
               }}
              onChange={(a) => {
                console.log(a.target.value);
                setJob(a.target.value);
              }} 
            />

          </Box>
        
          <Box header="Personal Details" styles={{padding:"0px 4px 10px 4px"}} >
            <InputComponent 
              type="text"
              label={<TextComponent isMandatory={"true"}
           
              label="First Name" 
              placeholder="Enter First name"
              value={firstName}/>}
              style={{borderRadius:"5px",
              borderWidth: "1px",
               blockSize: "25px",
              }}
            
              onChange={(a) => {
                console.log(a.target.value);
                setFirstName(a.target.value);
              }} 
            />
            <InputComponent
              type="text"
              label="Middle Name"
              placeholder="Enter Middle Name"
              value={middleName}
              style={{
                borderRadius:"5px",
              borderWidth: "1px",
              blockSize: "25px"
              }}
              onChange={(a)=>{
                console.log(a.target.value);
                setMiddleName(a.target.value);
              }}
              
              />
            <InputComponent
              type="text"
              label={<TextComponent isMandatory={"true"}
              label="Last Name"
              placeholder="Enter last name"
              value={lastName}/>}
              style={{borderRadius:"5px",
              borderWidth: "1px",
             blockSize: "25px"
            }}
              onChange={(a) => {
                console.log(a.target.value);
                setLastName(a.target.value);
              }}
            />
             <InputComponent
              type="text"
              label={<TextComponent isMandatory={"true"}
              label="EmailId"
              placeholder="Enter email"
              value={email}/>}
              style={{borderRadius:"5px",
              borderWidth: "1px",
              blockSize: "25px"}}
              onChange={(a) => {
                console.log(a.target.value);
                setEmail(a.target.value);
               }}
            />
            <InputComponent
              type="text"
              label={<TextComponent isMandatory={"true"}
              label="Contact Number"
              placeholder="Enter number"
              value={number}/>}
              style={{borderRadius:"5px",
              borderWidth: "1px",
              blockSize: "25px"}}
              onChange={(a) => {
                console.log(a.target.value);
                setNumber(a.target.value);
              }}
            />
            <TextComponent
          label="DOB(DD/MM/YY)" isMandatory="true"
          styleProps={{ fontSize: "15px", textAlign: "left" }}
        />
        <DatePick/>
        <TextComponent
          label="Gender"
          style={{ fontSize: "15px", textAlign: "left",display:"flex",flexDirection:"row" }}
          isMandatory="true"
        />
        <div style={{display:"flex"}}>
            <InputComponent
              type="radio"
              value="Male"
              name="gender"
              label="Male"

              onChange={(a) => {
                console.log(a.target.value);
                setGender(a.target.value);
              }}
             
            />
            <InputComponent
              type="radio"
              value="Female"
              name="gender"
              label="Female"
              onChange={(a) => {
                console.log(a.target.value);
                setGender(a.target.value);
              }}
              
            />
            <InputComponent
              type="radio"
              value="Other"
              name="gender"
              label="Other"
              
              onChange={(a) => {
                console.log(a.target.value);
                setGender(a.target.value);
              }}
            />
            </div>
          
          </Box>
          <Box header ="Educational Details" styles={{padding:"10px"}}>
         <Box header="Lowest Education profile" styles={{padding:"20px 4px 10px 4px",borderWidth:"0.001px"}}>

          <InputComponent
              type="text"
              label={<TextComponent isMandatory={"true"}
              label="10th Percentage %"
              placeholder="Enter percentage"
              value={tenthp}/>}
              style={{borderRadius:"5px",
              borderWidth: "1px",
              blockSize: "25px"}}
              onChange={(a) => {
                console.log(a.target.value);
                setTenthp(a.target.value);
              }}
            />
            <InputComponent
              type="text"
              label={<TextComponent isMandatory={"true"}
              label="12th Percentage %"
              placeholder="Enter percentage"
              value={twelvep}/>}
              style={{borderRadius:"5px",
              borderWidth: "1px",
              blockSize: "25px"}}
              onChange={(a) => {
                console.log(a.target.value);
                setTwelvep(a.target.value);
              }}
            />
            </Box>
              <Box header="Highest Education profile" styles={{padding:"20px 4px 10px 4px"}}>
              <TextComponent
            label="Education Type"
            isMandatory
            styleProps={{borderRadius:"5px",
            borderWidth: "1px",
            blockSize: "25px"}}
          />
          <Dropdown 
   
          input={options} />
                 
              
                 <TextComponent isMandatory={"true"}
                  label="Degree"
                  //placeholder="Enter percentage"
                  
                  style={{borderRadius:"5px",
              borderWidth: "1px",
              blockSize: "25px"}}
                 />
                 
                <InputComponent
                  type="text"
                  label={<TextComponent isMandatory={"true"}
                  label="College"
                  //placeholder="Enter percentage"
                  value={college}/>}
                  styleProps={{borderRadius:"5px",
                  borderWidth: "1px",
                  blockSize: "25px"}}
                  onChange={(a) => {
                    console.log(a.target.value);
                    setCollege(a.target.value);
                  }}
                />
                 <InputComponent
                  type="text"
                  label={<TextComponent isMandatory={"true"}
                  label="Reg.No"
                  //placeholder="Enter percentage"
                  
                  value={reg}/>}
                  style={{borderRadius:"5px",
              borderWidth: "1px",
              blockSize: "25px"}}
                  onChange={(a) => {
                    console.log(a.target.value);
                    setReg(a.target.value);
                  }}
                  />
                <InputComponent
                 
                 label={<TextComponent label=" Branch" isMandatory="true"
                 />}
                 
                  //placeholder="Enter percentage"
                  
                
                  />
   
                  
                  
                  <TextComponent
                      label="Backlogs" isMandatory={"true"}
                      styleProps={{ fontSize: "17px", textAlign: "left" ,padding: "6px 5px 4px 2px"}}
                    /> 
              <Dropdown input={Backlogoptions} />
          
                </Box>
                </Box>


            <Box>
            <Attatchments />
          </Box>
       
          <button type="Submit" >submit</button>   
          
         
          
        </form>
       
      </div>
     
  );
  
};
const options=[{key:"key-1",text:"Post Graduation"},{key:"key-2",text:"Under Graduation"},{key:"key-3",text:"Diploma"}]
const Backlogoptions=[{key:"1",text:"No"},{key:"2",text:"Yes"}]

//ReactDOM.render(<App />, Document.getElementById("app"));
