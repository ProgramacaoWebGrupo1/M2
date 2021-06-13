import {List, Datagrid, TextField, NumberField, EditButton, Edit, SimpleForm, TextInput,
    NumberInput, Filter, SearchInput, Create} from "react-admin";


    const PostFilter = props => (
        <Filter {...props}>
            <SearchInput source="nomefornecedor" alwaysOn />
        </Filter>
    );


export const FornecedorCreate = props => {
    return (
        <Create title = 'Cria uma Fornecedor' {...props}>
             <SimpleForm>
             <TextInput source="nomefornecedor" />
            <NumberInput source="stock" />
             </SimpleForm>
        </Create> 
     )
};


export const FornecedorList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid >
            <TextField source="id" />
            <TextField source="nomefornecedor" />
            <NumberField source="stock" />
            <EditButton />
        </Datagrid>
    </List>
);

export const FornecedorEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nomefornecedor" />
            <NumberInput source="stock" />
        </SimpleForm>
    </Edit>
);