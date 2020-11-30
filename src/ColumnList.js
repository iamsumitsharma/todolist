import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import DisplayComponent from './DisplayComponent';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import './ColumnList.css';


const propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.array,
	updateTask: PropTypes.func.isRequired,
	removeTask: PropTypes.func.isRequired,
	removeMode: PropTypes.bool,
};


const defaultProps = {
	items: [],
	removeMode: [],
};

const ColumnList = (props) => {
	return (
		<div className="column-list">
		 {props && props.items.length > 0 ? <DisplayComponent style={{pading: 10}}>
				<List>
					<CSSTransitionGroup
						transitionName="task-animation"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={300}>
						{props.items.map(item => (
							<ListItem
								key={item.id+item.title}
								onClick={() => (props.removeMode ? props.removeTask(item) : props.updateTask(item))}
								rightIcon={props.removeMode ? <DeleteIcon /> :
									<DeleteIcon style={{visibility: 'hidden'}} />}
							>
								<Checkbox
									label={item.title}
									disabled={props.removeMode}
									checked={item.status === 'Done'}
									className={(item.status === 'Done') ? 'task-done': ''}
								/>
							</ListItem>
						))}
					</CSSTransitionGroup>
				</List>
			</DisplayComponent> : <div> Your To Do List Is Empty</div>}
		</div>
	)
};

export default ColumnList;
