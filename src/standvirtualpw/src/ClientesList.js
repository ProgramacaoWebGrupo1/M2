import {List, Datagrid, TextField, NumberField, EditButton, Edit, SimpleForm, TextInput, Create, SearchInput,
    NumberInput, Filter} from "react-admin";



const PostFilter = props => (
    <Filter {...props}>
        <SearchInput source="nif" alwaysOn />
    </Filter>
);


export const CriarCliente = (props) => {
    return (
       <Create title = 'Cria um cliente' {...props}>
            <SimpleForm>
            <TextInput source="nome" />
            <NumberInput source="contacto" />
            <NumberInput source="nif" />
            </SimpleForm>
       </Create> 
    )
}

export const ClienteList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid >
            <NumberField source="id" />
            <TextField source="nome" />
            <NumberField source="contacto" />
            <NumberField source="nif" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ClienteEdit = props => (
    <Edit  {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="nome" />
            <NumberInput source="contacto" />
            <NumberInput source="nif" />
        </SimpleForm>
    </Edit>
);