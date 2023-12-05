import { Box, Card, CardActions, Typography } from "@mui/material";

import { useTranslate } from "react-admin";

import chLogo from "./ch-logo.png";

const Welcome = () => {
  const translate = useTranslate();
  return (
    <Card
      sx={{
        background: (theme) =>
          `linear-gradient(45deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.light} 50%, ${theme.palette.primary.dark} 100%)`,
        color: (theme) => theme.palette.primary.contrastText,
        padding: "20px",
        marginTop: 2,
        marginBottom: "1em",
      }}
    >
      <Box display="flex">
        <Box flex="1">
          <Typography variant="h5" component="h2" gutterBottom>
            {translate("pos.dashboard.welcome.title")}
          </Typography>
          <Box maxWidth="40em">
            <Typography variant="body1" component="p" gutterBottom>
              {translate("pos.dashboard.welcome.subtitle")}
            </Typography>
          </Box>
          <CardActions
            sx={{
              padding: { xs: 0, xl: null },
              flexWrap: { xs: "wrap", xl: null },
              "& a": {
                marginTop: { xs: "1em", xl: null },
                marginLeft: { xs: "0!important", xl: null },
                marginRight: { xs: "1em", xl: null },
              },
            }}
          ></CardActions>
        </Box>
          <img src={chLogo} alt={'logo'}/>
      </Box>
    </Card>
  );
};

export default Welcome;
