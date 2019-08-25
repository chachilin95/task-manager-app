import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type TParams = { id: string };
const EditTask = (props: RouteComponentProps<TParams>) => {

    const id = props.match.params.id;

    return (
        <h1>Edit Task #{id}</h1>
    )
};

export default EditTask;