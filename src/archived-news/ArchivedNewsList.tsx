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

const data = [
  {
    id: 1,
    date: "2022-01-01",
    link: "https://www.reuters.com/business/autos-transportation/china-issues-safety-guidelines-autonomous-public-transport-vehicles-2023-12-05/",
    body: "China issues safety guidelines for autonomous public transport vehicles",
    imageUrl:
      "https://www.reuters.com/resizer/7G_YpYKOfQvLg4UjvihQnGABj4c=/1200x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KB3GIP43FZK7PGLKBZWZWOVX2I.jpg",
  },
  {
    id: 2,
    date: "2022-01-02",
    body: "Telegraph, Spectator to not resume sale as Barclay family repays debt",
    link: "https://www.reuters.com/business/media-telecom/telegraph-spectator-not-resume-sale-barclay-family-repays-debt-2023-12-05/",
    imageUrl:
      "https://www.reuters.com/resizer/PU50HMo2SWK_AP9Dtv7Sm39GNK4=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YFZEWSAOFBL4XCJTFXZLYU4MZ4.jpg",
  },
  {
    id: 3,
    date: "2022-01-02",
    body: "Exclusive: World animal health body warns of swine fever vaccine risks as Vietnam readies exports",
    link: "https://www.reuters.com/business/healthcare-pharmaceuticals/world-animal-health-body-warns-swine-fever-vaccine-risks-vietnam-readies-exports-2023-12-05/",
    imageUrl:
      "https://www.reuters.com/resizer/4oXhHhlddtpU2eieDr-oW9N0uD4=/1080x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/V2WEVUNPPNJOPAZDESOAHDEH24.jpg",
  },
  {
    id: 4,
    date: "2022-01-03",
    body: "France puts country on 'high' alert for bird flu",
    link: "https://www.reuters.com/business/healthcare-pharmaceuticals/france-puts-country-high-alert-regarding-bird-flu-2023-12-05/",
    imageUrl:
      "https://www.reuters.com/resizer/e81AA5ujJ7hOznrLCwSYxe2BtpQ=/1200x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3N5POSONHZOU7ISUAKXWKPHDMY.jpg",
  },
  {
    id: 5,
    date: "2022-01-07",
    body: "Global banks face negative outlook, property stress in 2024 - Moody's",
    link: "https://www.reuters.com/business/finance/global-banks-face-negative-outlook-property-stress-2024-moodys-2023-12-04/",
    imageUrl:
      "https://www.reuters.com/resizer/s0IcpOKBoVs13dnxsVjGls5WHjk=/1080x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TLKA6QQD55NGDAS2X4WLQ27ME4.jpg",
  },
];

const RecentNewsGrid = () => {
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
