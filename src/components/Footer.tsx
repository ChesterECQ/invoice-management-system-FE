import React from 'react'
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer : React.FC = () => {
    return (
        <Box
          sx={{
            width: "100%",
            backgroundColor: "secondary",
            position: "relative",
            paddingTop: "1rem",
          }}
        >
          <>
            <Grid container direction="column" alignItems="center">
              <Grid item xs={12}>
                <Typography color="textSecondary" variant="subtitle1">
                  {`Invoice Management System @${new Date().getFullYear()} `}
                </Typography>
              </Grid>
            </Grid>
          </>
        </Box>
      );
    }

export default Footer;