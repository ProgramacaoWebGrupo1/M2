import { NumberField, Edit, SimpleForm, EditButton,ReferenceField, TextField ,Datagrid, List, Create, Filter, SearchInput, ReferenceInput, SelectInput} from "react-admin";
import * as React from "react";





const PostFilter = (props) => <Filter {...props}>
    <SearchInput source="marcaId"  alwaysOn />
    <ReferenceInput label="Fornecedor" source="nomefornecedor"
reference="fornecedors" allowEmpty>
        <SelectInput optionText="marca" />
    </ReferenceInput>
</Filter>


export const ListaCreate = (props) => {
    return (
       <Create title = 'Cria uma Lista' {...props}>
            <SimpleForm>
            <ReferenceInput source="marcaId" reference="marcas"><SelectInput optionText="marca" /></ReferenceInput>
            <ReferenceInput source="fornecedorId" reference="fornecedors"><SelectInput optionText="nomefornecedor" /></ReferenceInput>
            </SimpleForm>
       </Create> 
    )
}

export const ListaList = props => {
    return (
    <List filters={<PostFilter />} {...props} >
        <Datagrid >
                <NumberField source="id" />
                <ReferenceField source="marcaId" reference="marcas"><TextField source="marca" /></ReferenceField>
                <ReferenceField source="fornecedorId" reference="fornecedors"><TextField source="nomefornecedor" /></ReferenceField>
                <EditButton />
        </Datagrid>
    </List>
    )
};


export const ListaEdit = props => (
    <Edit  {...props}>
        <SimpleForm >
        <ReferenceInput source="marcaId" reference="marcas"><SelectInput optionText="marca" /></ReferenceInput>
                <ReferenceInput source="fornecedorId" reference="fornecedors"><SelectInput optionText="nomefornecedor" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);