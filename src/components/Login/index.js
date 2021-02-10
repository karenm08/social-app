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

export default function NewPost({ onSubmit, onClose , signUp , login }) {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  const [usename, setUseName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
 
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
                <Input onChange={event => setUseName(event.target.value)} className={classes.input} placeholder="Username"></Input>
                <Input onChange={event => setPassword(event.target.value)} className={classes.input} type="password" placeholder="Password" />
                <Button className={classes.postButton} value="submit" onClick={() => onSubmit({username: usename, password:password,type:login.type})}>SUMBIT</Button>
            </FormControl>
          </Typography>
        ) : (
          <Typography> 
                <FormControl fullWidth={true}>
                  <Input onChange={event => setEmail(event.target.value)} className={classes.input} placeholder="Email" type="email"></Input>
                  <Input onChange={event => setUseName(event.target.value)} className={classes.input} placeholder="Username"></Input>
                  <Input onChange={event => setPassword(event.target.value)} className={classes.input} type="password" placeholder="Password" />
                  <Button onClick={() => onSubmit({email: email, username: usename, password:password,type:signUp.type})} className={classes.postButton} value="post">SUMBIT</Button>
                </FormControl>
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}