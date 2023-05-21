import { Box, Paper ,Avatar } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import logoImage from "../../assets/Logo.png";
import backgroundImage from "../../assets/background.png";
function Background({ children }) {
    const theme = createTheme({
        PaperTheme: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
        },
        BoxTheme: {
            background: 'white',
            borderRadius: "10px",
            boxShadow: "0px 0px 20px 0px #00000040"
        }
    });
    return (
        <Paper sx={theme.PaperTheme} elevation={3} square>
            <Box maxWidth={300} p={2} sx={theme.BoxTheme}>
                <Avatar src={logoImage} alt="Logo" sx={{ width: "100%", height: "100%" }} />
                {children}
            </Box>
        </Paper>
    );
}
export default Background;