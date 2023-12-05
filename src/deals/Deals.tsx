

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Grid } from "@mui/material";
import data from '../data';


export default () => {


    return (
        <Grid container={true} gap={"10px"}>
            {data.comments.map((el) => {
                return (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    {el.body.slice(0, 1)}
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={el.body.slice(0, 10)}
                            subheader={new Date(el.created_at).toLocaleDateString()}
                        />
                        <CardContent>{el.body}</CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                );
            })}
        </Grid>

    );
};
