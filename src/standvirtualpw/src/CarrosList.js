import * as React from "react";
import {List, Datagrid, TextField, NumberField, 
    ReferenceField, EditButton, Edit, SimpleForm, TextInput, NumberInput, ReferenceInput, Filter, SelectInput, Create, SearchInput} from "react-admin";


// Filtros

const PostTitle = ({record}) =>
    <span>Marca {record ? `"${record.subject}"` : ''}</span>
const PostFilter = (props) => <Filter {...props}>
    <SearchInput source="modelo" alwaysOn />
    <ReferenceInput label="Marca" source="marcaId"
reference="marcas" allowEmpty>
        <SelectInput optionText="marca" />
    </ReferenceInput>
</Filter>


export const PostCreate = (props) => {
    return (
       <Create title = 'Cria um carro' {...props}>
            <SimpleForm>
                <TextInput source="categoria" />
                <TextInput source="nome_marca" />
                <TextInput source="modelo" />
                <NumberInput source="preco" />
                <NumberInput source="potencia" />
                <TextInput source="cor" />
                <NumberInput source="ano" />
                <ReferenceInput source="marcaId" reference="marcas"><SelectInput optionText="marca" /></ReferenceInput>
            </SimpleForm>
       </Create> 
    )
}

// Listas

export const CarroList = props => {
    return (
    <List filters={<PostFilter />} {...props}>
        <Datagrid >
            <NumberField source="id" />
            <TextField source="categoria" />
            <TextField source="modelo" />
            <NumberField source="preco" />
            <NumberField source="potencia" />
            <TextField source="cor" />
            <NumberField source="ano" />
            <ReferenceField source="marcaId" reference="marcas"><TextField source="marca" /></ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
    )
};

export const CarroEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm >
            <TextInput source="categoria" />
            <TextInput source="nome_marca" />
            <TextInput source="modelo" />
            <NumberInput source="preco" />
            <NumberInput source="potencia" />
            <TextInput source="cor" />
            <NumberInput source="ano" />
        </SimpleForm>
    </Edit>
);