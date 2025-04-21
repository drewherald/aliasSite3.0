import { Box, Typography } from "@mui/material";
import UserProjectCard from "../accountComponents/UserProjectCard";
import { v4 as uuidv4 } from 'uuid';

type ProjectCard = {
    name: string, 
    status: string
};

const YourProjects: React.FC = () => {

    const projectList: ProjectCard[] = [];

    projectList.push({name: 'New Logo Design', status: 'Completed'});
    projectList.push({name: 'Professional Package Website', status: 'Discovery'});
    projectList.push({name: 'Sweatshirt Apparel Design', status: 'Completed'});


    const activeProjectList: ProjectCard[] = projectList.slice().filter((item) => item.status != "Completed");
   
    const inactiveProjectList: ProjectCard[] = projectList.slice().filter((item) => item.status === "Completed");

    return(
    
    <>
       <Box sx={{display: "flex", flexDirection: "column", padding: '2svh 10svw'}}>
            <Typography variant="h3"  sx={{padding: '5svh 0'}}>Your Projects</Typography>
            <Typography variant="h5"  sx={{padding: '2.5svh 0'}}>Active</Typography>
            {activeProjectList && activeProjectList.map((item) => <UserProjectCard projInfo={item} key={uuidv4()}/>)}

            <Typography variant="h5"  sx={{padding: '10svh 0 2.5svh 0'}}>Completed Work</Typography>
            {inactiveProjectList && inactiveProjectList.map((item) => <UserProjectCard projInfo={item} key={uuidv4()}/>)}
        </Box>
    </>

)}

export default YourProjects;


