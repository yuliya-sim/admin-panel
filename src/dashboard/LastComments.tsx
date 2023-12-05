import { CardActions, CardContent, Grid } from "@mui/material";
import { Link } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";

import Card from "@material-ui/core/Card";
import { useGetList } from "react-admin";

export const LastComments = () => {
  let resentComments;
  const data = useGetList("comments");
  if (data) {
    resentComments = data.data?.slice(-3) ?? [] ;
  }

  if (!resentComments) {
    return <div>Loading...</div>;
  }

  return (
    <Card style={{ marginBottom: 20 }}>
      <CardHeader title="Last comments" />
      <Grid container={true} gap={"10px"}>
        {resentComments.map((el) => {
          return (
            <Card key={el.id} style={{marginInlineStart: '16px'}}>
              <CardHeader title={el.author.name} />
              <CardContent>{el.body}</CardContent>
              <CardActions>
                <Link>Go to post {el.post}</Link>
              </CardActions>
            </Card>
          );
        })}
      </Grid>
    </Card>
  );
};
