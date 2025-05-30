import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountIcon from '@mui/icons-material/Person';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import '../assets/styles/accountStyles/accountHomeLayout.css'
import AnalyticsDashboard from './AnalyticsDashboard';
import YourPlan from './YourPlan';
import AccountSettings from '../accountComponents/AccountSettings';
import WorkRequest from '../accountComponents/WorkRequest';
import YourProjects from './YourProjects';
import ManageInvoices from './ManageInvoices';
import SocialsCalendar from './SocialsCalendar';


const NAVIGATION: Navigation = [
    {
    kind: 'header',
    title: 'Main',
    },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'workRequest',
    title: 'Work Request',
    icon: <SettingsIcon />,
  },
  {
    segment: 'yourProjects',
    title: 'Your Projects',
    icon: <WorkOutlineIcon />,
  },
  {
    segment: 'manageInvoices',
    title: 'Manage Invoices',
    icon: <CreditCardIcon />,
  },
  {
    segment: 'fileUpload',
    title: 'File Upload',
    icon: <UploadFileIcon />,
  },
  {
    segment: 'contentCalendar',
    title: 'Content Calendar',
    icon: <CalendarMonthIcon />,
  },
  {
    segment: 'addOns',
    title: 'Add Ons Marketplace',
    icon: <StorefrontIcon />,
  },
  {
    kind: 'header',
    title: 'Configuration',
    },
  {
    segment: 'yourPlan',
    title: 'Your Plan',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'accountSettings',
    title: 'Account',
    icon: <AccountIcon />,
  },
 
];

const customTheme = createTheme({
    cssVariables: {
      colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: {
      light: {

        palette: {
            mode: 'light',
            primary: {
                main: '#000000',
                light: '#000000',
                dark: '#000000',
              },
              secondary: {
                main: '#000000',
                light: '#000000',
                dark: '#000000',
              },
            background: {
              default: '#f5f5f5', // Light gray background
              paper: '#ffffff',  // White cards/paper
            },
            text: {
              primary: '#000000',
              secondary: '#000000',
            },
          },
         
      },
      dark: {
        palette: {
          background: {
            default: '#000000',
            paper: '#100F55',
          },
          primary: {
            main: '#FFFFFF'
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 600,
        lg: 1200,
        xl: 1536,
      },
    },
  });

function PageContent({ pathname }: { pathname: string }) {


  switch(pathname){

    case '/dashboard':
      return(
        <AnalyticsDashboard />
    );
    break;

    case '/yourPlan':
      return <YourPlan />
      break;

    case '/yourProjects':
      return <YourProjects />
      break;
  
    case '/manageInvoices':
    return <ManageInvoices />
    break;

    case '/accountSettings':
      return <AccountSettings />
      break;

    case '/workRequest':
      return <WorkRequest />
      break;

    case '/contentCalendar':
      return <SocialsCalendar />
      break;

    case '/':
      return <AnalyticsDashboard />
      break;

    default:
      return (
        <Box
          sx={{
            py: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography>Dashboard content for {pathname}</Typography>
        </Box>
      );
  }

 
}



export default function DashboardLayoutBranding() {


  const router = useDemoRouter('/dashboard');



  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="https://aliasmediadesign.com/assets/aliasStudios-DCKii6Zp.png" alt="Alias logo" />,
        title: 'Alias Studios',
        homeUrl: '/',
      }}
      router={router}
      theme={customTheme}
    >
      <DashboardLayout>
        <PageContent pathname={router.pathname} />
       
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}
