import {List, Datagrid, TextField, NumberField, 
     EditButton, Edit,Filter , SimpleForm, TextInput, NumberInput,Create, SearchInput} from "react-admin";

     const PostFilter = props => (
        <Filter {...props}>
            <SearchInput source="marca" alwaysOn />
        </Filter>
    );

export const MarcaCreate = (props) => {
    return (
       <Create title = 'Cria uma marca' {...props}>
            <SimpleForm>
            <TextInput source="marca" />
            <NumberInput source="quantidade" />
            </SimpleForm>
       </Create> 
    )
}

export const MarcaList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid >
            <NumberField source="id" />
            <TextField source="marca" />
            <NumberField source="quantidade" />
            <EditButton />
        </Datagrid>
    </List>
);


export const MarcaEdit = props => (
    <Edit  {...props}>
        <SimpleForm >
            <TextInput source="marca" />
            <NumberInput source="quantidade" />
        </SimpleForm>
    </Edit>
);