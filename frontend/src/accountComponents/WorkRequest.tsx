import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";

const WorkRequest: React.FC = () => {

   const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setType("")
       // await signup(email, userName, password);
      };  

      const [type,setType] = useState('');

    return (
            <Box sx={{display: 'flex', flexDirection: 'column',}}>
                <Typography variant="h3" textAlign={'center'} sx={{padding: '5svh 2svw 2svh 2svw'}}>Alias+ Work Request</Typography>
                <Typography textAlign={'center'} sx={{padding: '2svh 20svw'}}>With Alias+, new design work is as easy as a few clicks.
                     Please select a graphic type and give us a description of your request. If we have any questions, we will reach out soon.
                    After filling out the form below, we will have your work ready within 3 business days.
                </Typography>
                <Box
                    component="form"
                    sx={{ display: "flex", flexDirection: "column", alignItems: 'center', padding: '5svh 0 0 0'}}
                    >

                <FormControl sx={{width: '50svw'}}>
                <InputLabel id="demo-simple-select-label">Graphic Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="type"
                    sx={{width: '50svw'}}
                >
                    <span  style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50svw'}}>
                        <MenuItem value={10}>Instagram Post</MenuItem>
                        <MenuItem value={20}>Instagram/FB Story</MenuItem>
                        <MenuItem value={30}>X/Twitter Post</MenuItem>
                        <MenuItem value={30}>Custom Logo</MenuItem>
                    </span>
                   
                </Select>
                </FormControl>
                <TextField id="outlined-basic" multiline={true} minRows={5} label="Request" variant="outlined"  sx={{margin: '2.5svh 0 0 0', width: '50svw' }}/>
                <Button sx={{marginTop: '2.5svh', width: '50svw', backgroundColor: '#100F55'}} onClick={handleSubmit}>Submit Request</Button>
                </Box>
            </Box>
    )}

export default WorkRequest;