import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Comment, Favorite, FavoriteBorder } from '@material-ui/icons'
import { Input, CardHeader, Button,FormControl, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'

const useStyles = makeStyles({
    root:{
        maxWidth:800,
    },
    header:{
        textAlign: 'center'
    },
    input:{
        width:'80%',
        margin:'30px auto 30px auto'
    },
});

export default function NewPost(){
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader className={classes.header} title="Post Image"></CardHeader>
            <FormControl fullWidth={true}>
                <Input className={classes.input} placeholder="Image URL"></Input>
                <Input className={classes.input} placeholder="Description"></Input>
                <Button  value="post">POST</Button>
            </FormControl>
        </Card>
    );
}