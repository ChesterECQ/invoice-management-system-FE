import React from 'react'
import { Grid, Typography } from "@mui/material";

const Footer : React.FC = () => {
    return (
        <footer
          style ={{
            width: "auto",
            backgroundColor: "secondary",
            position: "relative",
            padding: '10px 50px',
            textAlign: "right"
          }}
        >
          <>
            <Grid container direction="row">
              <Grid item xs={12}>
                <Typography color="textSecondary" variant="subtitle1">
                  {`Invoice Management System @${new Date().getFullYear()} `}
                </Typography>
              </Grid>
            </Grid>
          </>
        </footer>
      );
    }

export default Footer;