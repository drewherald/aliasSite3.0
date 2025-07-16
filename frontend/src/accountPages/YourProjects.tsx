import { Box, Typography } from "@mui/material";
import UserProjectCard from "../accountComponents/UserProjectCard";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

type ProjectCard = {
    name: string, 
    projStatus: string,
    update: {
      userName: string,
      body: string,
      date: string
    }
};

const YourProjects: React.FC = () => {

    const [projectList, setProjectList] = useState<ProjectCard[]>([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuthContext();
    

   useEffect(() => {
   
        const fetchProjectData = async () => {
         try {
           const response = await fetch(`http://localhost:3000/api/project/getProjects/${user?.email}`);
           if (!response.ok) {
             throw new Error('Failed to fetch user data');
           }
           const data = await response.json();
           setProjectList(data.items);
         } catch (err) {
           //setError(err.message);
           console.log(err)
         } finally {
           setLoading(false);
         }
       };
   
       fetchProjectData();
     }, []); 


    const activeProjectList: ProjectCard[] = projectList.slice().filter((item) => item.projStatus != "Completed");
   
    const inactiveProjectList: ProjectCard[] = projectList.slice().filter((item) => item.projStatus === "Completed");

    return(
    
    <>
    {loading ? <></> :
       <Box sx={{display: "flex", flexDirection: "column", padding: '2svh 10svw'}}>
            <Typography variant="h3"  sx={{padding: '5svh 0'}}>Your Projects</Typography>
            <Typography variant="h5"  sx={{padding: '2.5svh 0'}}>Active</Typography>
            {activeProjectList && activeProjectList.map((item) => <UserProjectCard projInfo={item} key={uuidv4()}/>)}

            <Typography variant="h5"  sx={{padding: '10svh 0 2.5svh 0'}}>Completed Work</Typography>
            {inactiveProjectList && inactiveProjectList.map((item) => <UserProjectCard projInfo={item} key={uuidv4()}/>)}
        </Box> }
    </>

)}

export default YourProjects;


