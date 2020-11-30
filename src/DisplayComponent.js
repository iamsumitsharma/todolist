import React from 'react';
import PropTypes from 'prop-types';



// Open source mobile sheet used here
const Displaycomponent = (props) => {

	const height = "100%";
	const styles = {
		root: {
			margin: '0 auto',
			maxWidth: 500,
			width: '100%',
		},
		container: {
			border: 'solid 1px #d9d9d9',
			height: height,
			overflow: 'hidden',
		},
		bottomTear: {
			display: 'block',
			position: 'relative',
			marginTop: -10,
			maxWidth: 500,
		},
	};

	return (
		<div style={styles.root}>
			<div style={styles.container}>
				{props.children}
				{console.log("here", props)}
			</div>
		</div>
	);
};



export default Displaycomponent;