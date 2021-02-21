import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Comment, Favorite, FavoriteBorder } from '@material-ui/icons'
import { Avatar, CardHeader, IconButton, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      maxWidth: 700,
    },
    media: {
      maxHeight: 350,
    }
  })

export default function Post({post, cardClicked, commentClicked, likeClicked}) {
    const classes = useStyles()
  return (
<Card className={classes.root}>

<CardHeader
  avatar={
    <Avatar>
      {post.user.username[0]}
    </Avatar>
  }
  title={post.user.username}
/>

<CardActionArea onClick={() => cardClicked({postId: post._id})}>
  <CardMedia className={classes.media}
    component="img"
    image={post.imageUrl}
  />

  <CardContent>
    <Typography variant="body2" color="textSecondary" component="p">
      {post.description}
    </Typography>
  </CardContent>
  <CardContent>
    <Typography variant="body2" color="textPrimary" component="p">
      Liked by <strong>{post.totalLikes}</strong> people
    </Typography>
    <Typography variant="body2" color="textPrimary" component="p">
      <strong>{post.totalComments}</strong> comments
    </Typography>
  </CardContent>
</CardActionArea>

<CardActions>
  <IconButton aria-label="like" onClick={() => likeClicked({postId: post._id})}>
  {post.liked ? <Favorite fontSize="large" /> : <FavoriteBorder fontSize="large" /> }
</IconButton>
  <IconButton aria-label="comment" onClick={() => commentClicked({postId: post._id})}>
    <Comment fontSize="large" />
  </IconButton>
</CardActions>

</Card>
  )
}