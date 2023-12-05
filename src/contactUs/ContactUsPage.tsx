import {Box, Button, Card, CardHeader, TextField} from "@mui/material";
import {useState} from "react";
import {Title} from "react-admin";

export const ContactUsPage = () => {
    const [value, setValue] = useState('');

    const onChange = (e) => setValue(e.target.value);

    const onSubmit = () => setValue('')

    return <>
        <Title defaultTitle={'Contact Us'}/>
        <Card style={{marginTop: 20}}>
            <CardHeader title={'Contact Us'}/>
            <Box padding={'20px'}>
                <TextField
                    value={value}
                    onChange={onChange}
                    fullWidth={true}
                    multiline
                    rows={4}
                />
                <Button onClick={onSubmit}>Submit</Button>
            </Box>
        </Card>
    </>
}
