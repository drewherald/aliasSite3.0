import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountIcon from "@mui/icons-material/Person";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import {
  AppProvider,
  type Session,
  type Navigation,
} from "@toolpad/core/AppProvider";
import { SignInPage, type AuthProvider } from "@toolpad/core/SignInPage";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import "../assets/styles/accountStyles/accountHomeLayout.css";
import AnalyticsDashboard from "./AnalyticsDashboard";
import YourPlan from "./YourPlan";
import AccountSettings from "../accountComponents/AccountSettings";
import WorkRequest from "../accountComponents/WorkRequest";
import YourProjects from "./YourProjects";
import ManageInvoices from "./ManageInvoices";
import SocialsCalendar from "./SocialsCalendar";
import FileUploader from "./FileUploader";
import React, { useState, useMemo, createContext } from "react";
import SignUp from "../accountComponents/SignUp";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useLogin } from "../hooks/useLogin";
import { Alert } from "@mui/material";
  import {useGoogleLogin } from '@react-oauth/google';

type AccountContextProps = {
  userName: string;
};

const localUser = localStorage.getItem("user");


export const AccountContext = createContext<AccountContextProps>({
  userName: "",
});

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "workRequest",
    title: "Work Request",
    icon: <SettingsIcon />,
  },
  {
    segment: "yourProjects",
    title: "Your Projects",
    icon: <WorkOutlineIcon />,
  },
  {
    segment: "manageInvoices",
    title: "Manage Invoices",
    icon: <CreditCardIcon />,
  },
  {
    segment: "fileUpload",
    title: "File Upload",
    icon: <UploadFileIcon />,
  },
  {
    segment: "contentCalendar",
    title: "Content Calendar",
    icon: <CalendarMonthIcon />,
  },
  {
    segment: "addOns",
    title: "Add Ons Marketplace",
    icon: <StorefrontIcon />,
  },
  {
    kind: "header",
    title: "Configuration",
  },
  {
    segment: "yourPlan",
    title: "Your Plan",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "accountSettings",
    title: "Account",
    icon: <AccountIcon />,
  },
];

const LOGOUTNAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main",
  },
  {
    segment: "accountSettings",
    title: "Account",
    icon: <AccountIcon />,
  },
];

const customTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#000000",
          light: "#000000",
          dark: "#000000",
        },
        secondary: {
          main: "#000000",
          light: "#000000",
          dark: "#000000",
        },
        background: {
          default: "#f5f5f5", // Light gray background
          paper: "#ffffff", // White cards/paper
        },
        text: {
          primary: "#000000",
          secondary: "#000000",
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: "#000000",
          paper: "#100F55",
        },
        primary: {
          main: "#FFFFFF",
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
  switch (pathname) {
    case "/dashboard":
      return <AnalyticsDashboard />;
      break;

    case "/yourPlan":
      return <YourPlan />;
      break;

    case "/yourProjects":
      return <YourProjects />;
      break;

    case "/manageInvoices":
      return <ManageInvoices />;
      break;

    case "/fileUpload":
      return <FileUploader />;
      break;

    case "/accountSettings":
      return <AccountSettings />;
      break;

    case "/workRequest":
      return <WorkRequest />;
      break;

    case "/contentCalendar":
      return <SocialsCalendar />;
      break;

    case "/":
      return <AnalyticsDashboard />;
      break;

    default:
      return (
        <Box
          sx={{
            py: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography>Dashboard content for {pathname}</Typography>
        </Box>
      );
  }
}

function SignUpLink() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button sx={{width: '100%', backgroundColor: 'white', color: 'black', padding:'9px', cursor: 'pointer'}} onClick={handleOpen}>Sign Up</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SignUp />
      </Modal>
    </>
  );
}

function ForgotPasswordLink() {
  return (
    <Link href="/" variant="body2">
      Forgot password?
    </Link>
  );
}



export default function DashboardLayoutBranding() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const router = useDemoRouter("/dashboard");
  const [session, setSession] = useState<Session | null>(null);
  const [userName, setUserName] = useState<string>("");
  const { login, loginOauth, error } = useLogin();

  const Subtitle = () => {
  return (
    error ?  <Box sx={{display: "flex", justifyContent: 'center', alignItems: 'center'}}><Alert sx={{ mb: 2, px: 1, py: 0.25, width: '100%', textAlign: 'center' }} severity="warning">
      {error}
    </Alert></Box>: <span></span>
  );
}


  const providers = [
    { id: "credentials", name: "Email and Password" },
    { id: "google", name: "Google" },
  ];

// Google login handler

interface TokenResponse {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
  state?: string;
}

const googleLogin = useGoogleLogin({
  onSuccess: async (tokenResponse: TokenResponse) => {
    try {
      const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      });

      const profile = await res.json();


              console.log(profile)

             
                await loginOauth (profile.email, profile.name, profile.sub)

             
             
      // You can persist this in state, context, or localStorage
      setSession({
        user: {
          name: profile.name,
          email: profile.email,
          image: profile?.picture,
        },
      });

    } catch (err) {
      console.error("Failed to fetch Google user profile", err);
    }
  },
  onError: () => {
    console.error("Google login failed");
  },
});



  const signIn: (provider: AuthProvider, formData: FormData) => void = async (
    provider,
    formData
  ) => {

    
    if(provider.id === "credentials"){
      const email = formData.get("email");
    const password = formData.get("password");

        await login (email, password,)
    }else if(provider.id === "google"){
      googleLogin()
    }

   

     if (localUser && provider) {
          setSession({
            user: {
              name: user?.userName,
              email: user?.email,
              /*image:
                "https://lh3.googleusercontent.com/a/ACg8ocIikB7lwv88vTut9GgiK1_jXXCbIYvxDWSCSQA_hIDnB0OIVeyR=s192-c-rg-br100",*/
            },
          });
        }
  };

  const authentication = useMemo(() => {
    return {
      signIn: () => {
        if (localUser) {
          setSession({
            user: {
              name: user?.userName,
              email: user?.email,
             /* image:
                "https://lh3.googleusercontent.com/a/ACg8ocIikB7lwv88vTut9GgiK1_jXXCbIYvxDWSCSQA_hIDnB0OIVeyR=s192-c-rg-br100", */
            },
          });
        }
      },
      signOut: () => {
        setSession(null);
        logout();
      },
    };
  }, []);

  if (userName === "") {
    if (user?.userName != undefined) {
      setSession({
        user: {
          name: user?.userName,
          email: user?.email,
          /*image:
            "https://lh3.googleusercontent.com/a/ACg8ocIikB7lwv88vTut9GgiK1_jXXCbIYvxDWSCSQA_hIDnB0OIVeyR=s192-c-rg-br100",*/
        },
      });

      setUserName(user?.userName);
    }
  }

  const imgStyle: React.CSSProperties = session ? {} : {maxHeight: '150px'}


  return (
    // preview-start
    <AppProvider
      navigation={user?.email ? NAVIGATION : LOGOUTNAVIGATION}
      branding={{
        logo: (
          <img
            src="https://aliasmediadesign.com/assets/aliasStudios-DCKii6Zp.png"
            alt="Alias logo"
            style={imgStyle}
          />
        ),
        title: "Alias Studios",
        homeUrl: "/",
      }}
      authentication={authentication}
      router={router}
      session={session}
      theme={customTheme}
    >
      {!user?.email ? (
        <SignInPage
          signIn={signIn}
          providers={providers}
          slots={{
            signUpLink: SignUpLink,
            forgotPasswordLink: ForgotPasswordLink,
            subtitle: Subtitle
          }}
        />
      ) : (
        <AccountContext.Provider value={{ userName }}>
          <DashboardLayout>
            <PageContent pathname={router.pathname} />
          </DashboardLayout>
        </AccountContext.Provider>
      )}
    </AppProvider>
    // preview-end
  );
}
