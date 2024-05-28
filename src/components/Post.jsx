import {
  Bookmark,
  BookmarkBorder,
  CheckBox,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
    <Card sx={{margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar 
          src="https://e7.pngegg.com/pngimages/287/555/png-clipart-manchester-city-f-c-manchester-city-w-f-c-premier-league-2011-fa-cup-final-premier-league-text-trademark-thumbnail.png"
          sx={{ bgcolor: "red",width: 45, height: 45 }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Arijeet Das Chowdhury"
        subheader="July 7th, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://www.thesun.co.uk/wp-content/uploads/2016/07/nintchdbpict0002493605591-e1467837837720.jpg"
        alt="Pep Guardiola"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Pep Guardiola had agreed to succeed him as manager, with his tenure beginning on 1 July 2016.
        Despite a trophy-less first season in 2016–17, Guardiola would lead City to unprecedented success in the following six seasons.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
        <CardHeader
        avatar={
          <Avatar 
          src="https://e7.pngegg.com/pngimages/287/555/png-clipart-manchester-city-f-c-manchester-city-w-f-c-premier-league-2011-fa-cup-final-premier-league-text-trademark-thumbnail.png"
          sx={{ bgcolor: "red",width: 45, height: 45 }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Arijeet Das Chowdhury"
        subheader="July 7th, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://www.thesun.co.uk/wp-content/uploads/2016/07/nintchdbpict0002493605591-e1467837837720.jpg"
        alt="Pep Guardiola"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Pep Guardiola had agreed to succeed him as manager, with his tenure beginning on 1 July 2016.
        Despite a trophy-less first season in 2016–17, Guardiola would lead City to unprecedented success in the following six seasons.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
