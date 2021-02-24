import React, {useState, useEffect} from 'react'
import { getPost,getPostComments } from '../../network'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, CardHeader, IconButton, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'
import { Favorite, FavoriteBorder } from '@material-ui/icons'
import { useParams } from "react-router-dom"

import CommentForm from '../CommentForm'
import UserComment from '../UserComment'

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
    height: 600,
    display: "flex",
  },
  media: {
    width: "60%"
  },
  otherData: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    justifyContent: "space-between",
    margin: "0 10px",
  },
  commentForm: {
    width: "100%"
  },
  comment: {
    margin: "10px 0"
  },
  comments: {
    overflowY: "scroll"
  }
})

export default function Post({className, post, submitComment, likeClicked}) {
  const classes = useStyles()
  const [comment, setComment] = useState([])
  let { postId } = useParams()

  const [likedPost,setLike] = useState(false)
  const [likedCount,setLikeCount] = useState(0)

  const handleLike = () => { setLike(current => !current)}
  const likesCount = () => { likedPost ? setLikeCount(likedCount - 1) : setLikeCount(likedCount + 1) }

  useEffect(() => {
    (async () => {
        const commentResult = await getPostComments({postId: postId})
        setComment(commentResult.comments)
    })()
  }, [])

  const onComment = data => {
    submitComment({postId: post._id, text: data.comment})
  }

  return (
    <Card className={`${classes.root} ${className}`}>

        <CardMedia className={classes.media}
          component="img"
          image={post.imageUrl}
        />

        <div className={classes.otherData}>
          <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {post.user.username[0]}
            </Avatar>
          }
          title={post.user.username}
        />
        <CardContent>
          {comment.map(c => (
            <UserComment key={c._id} className={classes.comment} comment={c}></UserComment>
          ))}
        </CardContent>
        <div>
        <CardActions>
        <IconButton aria-label="like" className={classes.margin} onClick={ () => {likesCount();handleLike(); likeClicked({liked: !likedPost})}}>
          {likedPost ? <Favorite fontSize="large" /> : <FavoriteBorder fontSize="large" /> }
        </IconButton>
        <Typography variant="body2" color="textPrimary" component="p">
          Liked by <b>{likedCount}</b> people
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          <b>{comment.length}</b> comments
        </Typography>
      </CardActions>
      <CommentForm className={classes.commentForm} onSubmit={onComment}></CommentForm>
      </div>
      </div>
    </Card>
  )
}