import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { Props } from './types';

const TaskListItem: React.FC<Props> = ({ task }) => {
    
    const { _id, description } = task;
    const createdAt = moment(task.createdAt).format('MMM DD, YYYY');
    const completed = task.completed ? '√' : 'x';
    
    return (
        <Link to={`/edit/${_id}`}>
            <div>
                <h3>{description}</h3>
                <span>{createdAt}</span>
            </div>
            <h3>{completed}</h3>
        </Link>
    );
};

export default TaskListItem;