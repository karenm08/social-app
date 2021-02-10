import React, { useState , View} from "react";
import { makeStyles } from "@material-ui/core/styles";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
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
  IconButton,
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
    height: 60,
    width: 60,
    borderRadius: '50%',
    color: '#3f51b5'
},
closeButton:{
  height: 60,
  width: 60,
  borderRadius: '50%',
  // position: 'absolute',
  top:0,
  right:0,
},
postButton:{
    color: '#3f51b5',
    fontWeight: 'bold'
}
}));

export default function NewPost({ imgUpload, onSubmit, fileUpload , onClose }) {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  const [descripition, setFileUploadDes] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [imgDescripition, setImageURLDes] = useState('')

  return (
    <Card className={classes.root}>
       <IconButton className={classes.closeButton} onClick={(event) => {onClose(event)}}><CloseIcon/></IconButton>
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
                <Input onChange={event => setImageURL(event.target.value)} className={classes.input} placeholder="Image URL"></Input>
                <Input onChange={event => setImageURLDes(event.target.value)} className={classes.input} placeholder="Description"></Input>
                <Button className={classes.postButton} value="post" onClick={() => onSubmit({descripition: imgDescripition, imageURL:imageURL,type:imgUpload.type})}>POST</Button>
            </FormControl>
          </Typography>
        ) : (
          <Typography>
           <Button className={classes.cameraButton}><CameraAltIcon></CameraAltIcon></Button> 
                <FormControl fullWidth={true}>
                    <Input onChange={event => setFileUploadDes(event.target.value)} className={classes.input} placeholder="Image URL"></Input>
                    <Button className={classes.postButton} value="post" onClick={() => onSubmit({descripition: descripition, file:fileUpload.file, type:fileUpload.type})}>POST</Button>
                </FormControl>
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}