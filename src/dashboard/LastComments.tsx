import CardHeader from "@material-ui/core/CardHeader";
import {CardActions, CardContent, Grid, Button} from "@mui/material";
import Card from "@material-ui/core/Card";
import data from '../data';
import {useMemo} from "react";
import {Link} from "@material-ui/core";

export const LastComments = () => {
    const resentComments = useMemo(() => {
        return data.comments.slice(-3)
    }, [data])

    return <Card style={{marginBottom: 20}}>
        <CardHeader title="Last comments"/>
        <Grid container={true} gap={'10px'} >
            {resentComments.map(el => {
                return <Card>
                    <CardHeader title={el.author.name}/>
                    <CardContent>{el.body}</CardContent>
                    <CardActions><Link>Go to post</Link></CardActions>
                </Card>
            })}
        </Grid>
    </Card>
}
