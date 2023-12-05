import { List, SimpleList } from 'react-admin';

export default () => (
    <List>
        <SimpleList
            primaryText={record => new Date(record.published).toLocaleDateString()}
            secondaryText={record => record.text}
            rowSx={record => ({ backgroundColor: record.nb_views >= 500 ? '#efe' : 'white' })}
        />
    </List>
);
