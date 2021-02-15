import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';

const MainNavBar: () => JSX.Element = () => {
  return (
    <Box m="0">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">News</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainNavBar;
