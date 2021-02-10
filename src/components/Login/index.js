import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
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
},

cameraButton:{
    marginLeft:50,
    borderRadius: '60%',
    color: '#3f51b5'
},
postButton:{
    color: '#3f51b5',
    fontWeight: 'bold'
},
closeButton:{
  height: 60,
  width: 60,
  borderRadius: '50%',
},
}));

export default function NewPost({ onSubmit, onClose }) {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Card className={classes.root}>
      <Button className={classes.closeButton}><CloseIcon/></Button>
      <CardHeader
        className={classes.header}
        title={tabValue === 0 ? "Login" : "Sign Up"}
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
          <Tab label="LOGIN" />
          <Tab label="SIGN UP" />
        </Tabs>
      </CardContent>
      <CardContent>
        {tabValue === 0 ? (
          <Typography>
            <FormControl fullWidth={true}>
                <Input className={classes.input} placeholder="username"></Input>
                <Input className={classes.input} placeholder="password"></Input>
                <Button className={classes.postButton} value="submit">SUMBIT</Button>
            </FormControl>
          </Typography>
        ) : (
          <Typography> 
                <FormControl fullWidth={true}>
                  <Input className={classes.input} placeholder="Email"></Input>
                  <Input className={classes.input} placeholder="username"></Input>
                  <Input className={classes.input} placeholder="password"></Input>
                  <Button className={classes.postButton} value="post">SUMBIT</Button>
                </FormControl>
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}