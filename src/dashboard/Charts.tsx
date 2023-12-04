import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import {Grid} from "@mui/material";
import LineChart from "./LineChart";
import {PieChart} from "./PieChart";
import Card from "@material-ui/core/Card";

export const Charts = () => {
    return <Card style={{marginBottom: 20}}>
        <CardHeader title={'Charts'}/>
        <CardContent>
            <Grid container={true} gap={'20px'} justifyContent={'space-between'}>
                <Grid item={true}><LineChart/></Grid>
                <Grid item={true}><PieChart/></Grid>
            </Grid>
        </CardContent>
    </Card>
}
