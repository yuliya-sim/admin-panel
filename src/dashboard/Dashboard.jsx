
import Welcome from "./Welcome";
import { Charts } from "./Charts";
import { LastComments } from "./LastComments";
import {Title} from "react-admin";

export default () => (
    <>
        <Title defaultTitle={'Dashboard'}/>
        <Welcome />
        <Charts />
        <LastComments />
    </>
);
