import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkRequest: React.FC = () => {
  const { user } = useAuthContext();
  const [type, setType] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [requestResult, setrequestResult] = useState<string>("");



  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setType("");
    if (user) {
      try {
        console.log(user.email)
        const userEmail = user.email;


        const response = await fetch(
          "http://localhost:3000/api/upload/workRequest",
          {
            method: "POST",
            body: JSON.stringify({ email: userEmail, requestType: type, requestBody: body }),
            headers: {
            "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Upload failed");
        }

        const result = await response.json();
        setrequestResult(result.message);
        setBody("");
      } catch (e) {
        setError("Upload failed")
        console.log(e);
      }
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    console.log("EVENT " + event.target.value);
    setType(event.target.value as string);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h3"
          textAlign={"center"}
          sx={{ padding: "5svh 2svw 2svh 2svw" }}
        >
          Alias+ Work Request
        </Typography>
        <Typography textAlign={"center"} sx={{ padding: "2svh 20svw" }}>
          With Alias+, new design work is as easy as a few clicks. Please select
          a graphic type and give us a description of your request. If we have
          any questions, we will reach out soon. After filling out the form
          below, we will have your work ready within 3 business days.
        </Typography>
         { requestResult != "" &&
          <Typography textAlign={"center"} sx={{ padding: "2svh 20svw", color: "green"}}>
         {requestResult}
         </Typography>}
          { error != "" &&
          <Typography textAlign={"center"} sx={{ padding: "2svh 20svw", color: "red"}}>
         {error}
        </Typography>}
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5svh 0 0 0",
          }}
        >
          <FormControl fullWidth sx={{ width: "50svw" }}>
            <InputLabel id="demo-simple-select-label">Graphic Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              onChange={handleChange}
              label="Graphic Type"
            >
              <MenuItem value={"Instagram Post"}>Instagram Post</MenuItem>
              <MenuItem value={"Instagram/FB Story"}>Instagram/FB Story</MenuItem>
              <MenuItem value={"X/Twitter Post"}>X/Twitter Post</MenuItem>
              <MenuItem value={"Custom Logo"}>Custom Logo</MenuItem>
            </Select>
       

          <TextField
            id="outlined-basic"
            multiline={true}
            minRows={5}
            label="Request"
            variant="outlined"
            onChange={e => setBody(e.target.value)}
            sx={{ margin: "2.5svh 0 0 0", width: "50svw" }}
            value={body}
          />
          <Button
            sx={{
              marginTop: "2.5svh",
              width: "50svw",
              backgroundColor: "#100F55",
            }}
            onClick={handleSubmit}
          >
            Submit Request
          </Button>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default WorkRequest;
