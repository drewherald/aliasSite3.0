import { Card, CardContent, Typography, Box } from '@mui/material';

type ProjectCard = {
    name: string, 
    status: string,
};

type ProjectCardProps = {
    projInfo: ProjectCard;
}

const UserProjectCard: React.FC<ProjectCardProps> = ({projInfo}) => {

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
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box>
        <Typography variant="h5" fontWeight="bold">
            {projInfo.name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Status: {projInfo.status}
          </Typography>
         
        </Box>
      </CardContent>
    </Card>
        </>


)}

export default UserProjectCard;