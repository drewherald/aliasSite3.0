import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";


const SignUp: React.FC = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [pVisible, setpVisible] = useState(false);
  const { signup } = useSignup();

  //signup handler
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("HandleSignUp line17")
    try{
                await signup(email, name, password);

    }catch(e){
        console.log(e+"HandleSignUp line22")
    }
  };

  //show password handler
  
  const handleClickShowPassword = () => {
    if (pVisible) {
      setpVisible(false);
    } else {
      setpVisible(true);
    }
  }; 

  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
    return(
    
    <Box sx={style}>
     <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sign Up
          </Typography>
              <TextField label='Name' value={name} onChange={e => setName(e.target.value)}>

              </TextField>
              <TextField label='Email' value={email} onChange={e => setEmail(e.target.value)}>

              </TextField>
              <TextField label='Password' type={pVisible ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)}>

              </TextField>
        <Button
                className="formButton"
                onClick={handleClickShowPassword}
                style={{ margin: "20px 0 0 0", backgroundColor: "#c6c6c6" }}
            >
                {pVisible ? "Hide Password" : "Show Password"}
            </Button>
              <Button onClick={handleSubmit}>Submit</Button>

        </Box>
    
    </Box>)
}

export default SignUp;