import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '5px', // Replace with your desired border radius value for buttons
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#8145CE;',
        },
        secondary: {
            main: '#000000',
            sec:'#D9D9D9'
           
        },
        customColor: {
            main: '#FAFAFA',
            last: '#4D4D4D'
        },
    },
});
export default theme;
