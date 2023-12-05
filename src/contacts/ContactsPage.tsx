import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {Card, CardHeader} from "@mui/material";
import {Title} from "react-admin";

enum EnumStatuses {
    active = 'Active',
    blocked = 'Blocked'
}

const {active, blocked} = EnumStatuses

const rows = [
    {id: 1, name: 'June Jacobs', age: 35, email: 'email@gmail.com', phone: '+123456789', status: active},
    {id: 2, name: 'Stan Hudson', age: 42, email: 'email@gmail.com', phone: '+123456789', status: active},
    {id: 3, name: 'Rudolf Flowers', age: 45, email: 'email@gmail.com', phone: '+123456789', status: active},
    {id: 4, name: 'Gerald Boone', age: 16, email: 'email@gmail.com', phone: '+123456789', status: active},
    {id: 5, name: 'Geoffrey Gillespie', age: 28, email: 'email@gmail.com', phone: '+123456789', status: blocked},
    {id: 6, name: 'Ginger Santana', age: 40, email: 'email@gmail.com', phone: '+123456789', status: active},
    {id: 7, name: 'Weldon Oconnell', age: 44, email: 'email@gmail.com', phone: '+123456789', status: active},
    {id: 8, name: 'Rich Olsen', age: 36, email: 'email@gmail.com', phone: '+123456789', status: blocked},
    {id: 9, name: 'Marcie Collier', age: 65, email: 'email@gmail.com', phone: '+123456789', status: active},
];

export const ContactsPage = () => {
    return <>
        <Title defaultTitle={'Contacts'}/>
        <Card style={{marginTop: 20}}>
            <CardHeader title={'Contacts'}/>
            <TableContainer style={{margin: '10px 20px', width: 'auto'}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone number</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(({id, name, age, email, phone, status}) => (
                            <TableRow
                                key={id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {name}
                                </TableCell>
                                <TableCell align="right">{age}</TableCell>
                                <TableCell align="right">{email}</TableCell>
                                <TableCell align="right">{phone}</TableCell>
                                <TableCell align="right"
                                           style={{color: status === active ? 'green' : 'red'}}>{status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    </>
}
