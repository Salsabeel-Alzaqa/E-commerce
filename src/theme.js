import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    components: {
       MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
        },
      },
    },
        MuiChip: {
            styleOverrides: {
                root: {
                    width: '89px',
                    borderRadius: '5px',
                    height: '20px'
                },
            },
        },
        MuiPagination: {
            styleOverrides: {
                root: {
                    '& .MuiPaginationItem-root': {
                        width: '40px',
                        height: '37px',
                    },
                    '& .MuiPaginationItem-outlinedPrimary:not(.Mui-selected)': {
                        borderColor: '#8145CE',
                        color: '#8145CE',
                    },
                    '& .Mui-selected.MuiPaginationItem-outlinedPrimary': {
                        backgroundColor: '#8145CE',
                        color: '#FAFAFA',
                    },
                    '@media (max-width: 600px)': {
                        '& .MuiPaginationItem-root': {
                            width: '30px',
                            height: '27px',
                        },
                    },
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#8145CE',
            last:'rgba(90, 89, 92, 0.14)',
        },
        secondary: {
            main: '#000000',
            sec:'#D9D9D9',
            last:'#BC0A0A',
           
        },
        customColor: {
            main: '#FAFAFA',
            last: '#4D4D4D',
            sec: '#5A595C'
        },
    },
});
export default theme;
