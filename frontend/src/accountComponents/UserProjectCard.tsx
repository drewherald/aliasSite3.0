import { Card, CardContent, Typography, Box, Button, FormControl, TextField } from '@mui/material';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

type ProjectCard = {
    name: string, 
    projStatus: string,
    update: [{
      userName: string,
      body: string,
      date: string
    }],
    _id: string
};

type ProjectCardProps = {
    projInfo: ProjectCard;
}

const UserProjectCard: React.FC<ProjectCardProps> = ({projInfo}) => {

  const { user } = useAuthContext();
  const [openComments, setOpenComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [requestResult, setrequestResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [hide, setHide] = useState(true);

  const clearMessages = () => {
    setError('')
    setrequestResult('')
  }


  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    clearMessages()
    if (user) {
      try {

        const update = projInfo.update;

        const now = new Date()

        const formatted = now.toLocaleString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          });

        if(newComment.length > 0){
          update.unshift({
            userName: user.userName,
            body: newComment,
            date: formatted
          })
        }


        const response = await fetch(
          "http://localhost:3000/api/project/addComment",
          {
            method: "POST",
            body: JSON.stringify({ id: projInfo._id, update: update, }),
            headers: {
            "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Upload failed");
        }

        const result = await response.json();
        setrequestResult(result.message)
        setNewComment("");

      } catch (e) {
        setError("Post failed")
        console.log(e);
      }
    }
  };

   return(
        <>
        <Card
      elevation={3}
      sx={{
        padding: 2,
        margin: '1svh',
        backgroundColor: '#100F55',
      }}
    >
      <CardContent>
        <Box  sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'space-between' }}>
          <div>
        <Typography variant="h5" fontWeight="bold">
            {projInfo.name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Status: {projInfo.projStatus}
          </Typography>
          </div>
          <Button onClick={() => {setOpenComments(!openComments); clearMessages();}}>+</Button>
          </Box>
          {openComments ? 
          <>
            {projInfo.update[0] != null ? 
            <>
              {projInfo.update.map((item, index) => 
              index < 4 &&
              <Box sx={{display: 'flex', flexDirection: 'column', paddingTop: '20px'}}>
                <Typography variant="subtitle1" color="text.secondary">
                {item.userName}: {item.body}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                {item.date}
                </Typography>
              </Box>
               ) }
                { projInfo.update.length > 4 &&
                 <Typography
                          variant='subtitle2'
                          sx={{cursor: 'pointer',
                              paddingTop: '20px',
                              display: hide ? 'block' : 'none',
                            ":hover": {
                              textDecoration: 'underline'
                            }
                          }}
                          onClick={() => setHide(!hide)}
                        >
                          Show More
                        </Typography>}

                {projInfo.update.length > 4 && projInfo.update.map((item, index) => 
              index >= 4 &&
              <Box sx={{display: hide ? 'none' : 'flex', flexDirection: 'column', paddingTop: '20px'}}>
                <Typography variant="subtitle1" color="text.secondary">
                {item.userName}: {item.body}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                {item.date}
                </Typography>
              </Box>
               ) }

               <Typography
                          variant='subtitle2'
                          sx={{cursor: 'pointer',
                              paddingTop: '20px',
                              display: hide ? 'none' : 'block',
                            ":hover": {
                              textDecoration: 'underline'
                            }
                          }}
                          onClick={() => {setHide(!hide)}}
                        >
                          Show Less
                        </Typography>
              
             

            </> : <></>}
            <FormControl>

               <TextField
                          id="outlined-basic"
                          multiline={true}
                          minRows={2}
                          label="Request"
                          variant="outlined"
                          onChange={e => setNewComment(e.target.value)}
                          sx={{ margin: "2.5svh 0 0 0", width: "50svw" }}
                          value={newComment}
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
                        {error.length > 0 ? <Typography sx={{textAlign: 'center', color: 'red', paddingTop: '20px'}}>{error}</Typography> : <Typography sx={{textAlign: 'center', color: 'green', paddingTop: '20px'}}>{requestResult}</Typography>}
          </> : <></>}
         
        
        
      </CardContent>
    </Card>
        </>


)}

export default UserProjectCard;