import { NumberField, Edit, SimpleForm, EditButton, Datagrid, List,  Create, Filter, SearchInput, TextField, ReferenceField, ReferenceInput, SelectInput} from "react-admin";
import * as React from "react";


const PostFilter = props => (
    <Filter {...props}>
        <SearchInput source="listadepreferenciaId" alwaysOn />
    </Filter>
);

export const FavoritoCreate = (props) => {
    return (
       <Create title = 'Cria um favorito' {...props}>
            <SimpleForm>
            <ReferenceInput source="listadepreferenciaId" reference="listadepreferencias"><SelectInput optionText="id" /></ReferenceInput>
                <ReferenceInput source="carroId" reference="carros"><SelectInput optionText="modelo" /></ReferenceInput>
            </SimpleForm>
       </Create> 
    )
}

export const FavoritosList = props => {
    return (
    <List  filters={<PostFilter />} {...props}>
        <Datagrid >
                <NumberField source="id" />
                <ReferenceField source="listadepreferenciaId" reference="listadepreferencias"><TextField source="id" /></ReferenceField>
                <ReferenceField source="carroId" reference="carros"><TextField source="id" /></ReferenceField>
                <EditButton />
        </Datagrid>
    </List>
    )
};


export const FavoritoEdit = props => (
    <Edit  {...props}>
        <SimpleForm >
        <ReferenceInput source="listadepreferenciaId" reference="listadepreferencias"><SelectInput optionText="id" /></ReferenceInput>
                <ReferenceInput source="carroId" reference="carros"><SelectInput optionText="modelo" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);