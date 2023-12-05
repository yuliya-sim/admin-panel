import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  useMediaQuery,
  Theme,
} from "@mui/material";

import {
  ListBase,
  Pagination,
  Title,
  TextField,
  DateField,
  UrlField,
  ImageField,
  useListContext,
  useTranslate,
} from "react-admin";

const RecentNewsGrid = () => {
  const { data, isLoading } = useListContext();
  const translate = useTranslate();

  if (!data) return null;

  return (
    <Grid spacing={2} container>
      {data.map((record) => (
        <Grid item key={record.id} sm={12} md={10} lg={8}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardHeader
              className="comment"
              title={
                <DateField
                  record={record}
                  source="date"
                  sx={{
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                />
              }
              subheader={<UrlField record={record} source="link" />}
            />
            <CardContent>
              <TextField
                record={record}
                source="body"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              />
            </CardContent>
            <CardContent>
              <ImageField
                record={record}
                source="imageUrl"
                sx={{
                  "& .RaImageField-image": {
                    width: "100%",
                    height: "auto",
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const ListView = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
  const { defaultTitle } = useListContext();

  return (
    <>
      <Title defaultTitle={defaultTitle} />
      {/* {isSmall ? <CommentMobileList /> : <CommentGrid />} */}
      <RecentNewsGrid />
      <Pagination rowsPerPageOptions={[6, 9, 12]} />
    </>
  );
};

const RecentNewsList = () => (
  <ListBase perPage={6}>
    <ListView />
  </ListBase>
);

export default RecentNewsList;
