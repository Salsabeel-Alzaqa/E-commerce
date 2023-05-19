import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Background from "../../components/Backgound";

function AccessDenied() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Background>
      <Stack spacing={2} direction="row" my={8}>
        <Button
          variant="contained"
          fullWidth
          size="small"
          onClick={() => handleClick("/login")}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          fullWidth
          size="small"
          onClick={() => handleClick("/signup")}
        >
          SignUp
        </Button>
      </Stack>
    </Background>
  );
}

export default AccessDenied;