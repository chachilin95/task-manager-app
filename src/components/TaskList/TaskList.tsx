import React from 'react';
import { connect } from 'react-redux';

import { Props } from './types';
import TaskListItem from '../TaskListItem';

const TaskList: React.FC<Props> = ({ tasks }) => {

    const renderTasks = () => {
        
        if (tasks.length === 0) {
            return <p>No tasks to show.</p>
        }
        
        return tasks.map((task, index) => (
            <TaskListItem key={index} task={task}/>
        ));
    };

    return (
        <div>
            {renderTasks()}
        </div>
    );
}

const mapStateToProps = (state: any) => ({
    tasks: state.tasks
});

export default connect(mapStateToProps)(TaskList);