// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles'
// import { Comment, Favorite, FavoriteBorder } from '@material-ui/icons'
// import { Input, CardHeader, Button,FormControl, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'

// const useStyles = makeStyles({
//     root:{
//         maxWidth:800,
//     },
//     header:{
//         textAlign: 'center'
//     },
    // input:{
    //     width:'80%',
    //     margin:'30px auto 30px auto'
    // },
// });

// export default function NewPost(){
//     const classes = useStyles();

//     return (
//         <Card className={classes.root}>
//             <CardHeader className={classes.header} title="Post Image"></CardHeader>
            // <FormControl fullWidth={true}>
            //     <Input className={classes.input} placeholder="Image URL"></Input>
            //     <Input className={classes.input} placeholder="Description"></Input>
            //     <Button  value="post">POST</Button>
            // </FormControl>
//         </Card>
//     );
// }

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  Tabs,
  Tab,
  CardContent,
  CardHeader,
  Typography,
  Input,
  Button,
  FormControl
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    padding: 10,
    margin: "auto"
  },
  header: {
    textAlign: "center"
  },
  tabs: {
    margin: "auto"
  },
  input:{
    width:'80%',
    margin:'30px auto 30px auto'
}
}));

export default function NewPost({ onSubmit, onClose }) {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        title="Post Image"
      />
      <CardContent>
        <Tabs
          variant="fullWidth"
          className={classes.tabs}
          value={tabValue}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleTabChange}
        >
          <Tab label="IMAGE URL" />
          <Tab label="FILE UPLOAD" />
        </Tabs>
      </CardContent>
      <CardContent>
        {tabValue === 0 ? (
          <Typography>
            <FormControl fullWidth={true}>
                <Input className={classes.input} placeholder="Image URL"></Input>
                <Input className={classes.input} placeholder="Description"></Input>
                <Button  value="post">POST</Button>
            </FormControl>
          </Typography>
        ) : (
          <Typography>
            <FormControl fullWidth={true}>
                <Input className={classes.input} placeholder="Image URL"></Input>
                <Button  value="post">POST</Button>
            </FormControl>
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}