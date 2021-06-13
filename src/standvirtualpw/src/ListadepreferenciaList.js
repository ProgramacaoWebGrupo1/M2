import {List, Datagrid, TextField, NumberField, ReferenceField, EditButton, Edit, SimpleForm, TextInput, SearchInput, ReferenceInput, Filter, Create, SelectInput} from "react-admin";

// Filtros

const PostTitle = ({record}) =>
    <span>Cliente {record ? `"${record.subject}"` : ''}</span>
const PostFilter = (props) => <Filter {...props}>
    <SearchInput source="clienteId" alwaysOn />
</Filter>


// Listas

export const ListadepreferenciaCreate = (props) => {
    return (
       <Create title = 'Cria uma lista' {...props}>
            <SimpleForm>
            <TextInput source="categoria" />
            <TextInput source="modelo" />
            <ReferenceInput source="clienteId" reference="clientes"><SelectInput optionText="nome" /></ReferenceInput>
            </SimpleForm>
       </Create> 
    )
}

export const ListadepreferenciaList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid >
            <NumberField source="id" />
            <TextField source="categoria" />
            <TextField source="modelo" />
            <ReferenceField source="clienteId" reference="clientes"><TextField source="nome" /></ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export const ListadepreferenciaEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm >
            <TextInput source="categoria" />
            <TextInput source="modelo" />
            <ReferenceInput source="clienteId" reference="clientes"><TextInput source="id" /></ReferenceInput>
            <EditButton />
        </SimpleForm>
    </Edit>
);