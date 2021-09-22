
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const Post = ({ post }) => {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {post.firstName} {post.lastName}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image={post.picture}
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  );
};

export default Post;
