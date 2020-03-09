import React from 'react';
import TodoItem from './TodoItem';

function MainContent(){
	const date = new Date();
	const hours = date.getHours();
	let timeOfDay;

	const styles = {color: "white", backgroundColor: "grey"};

	if (hours < 12){
		timeOfDay = "morning"
		styles.color = "red";
	}else if (hours >= 12 && hours < 17) {
		timeOfDay = "afternoon"
		styles.color = "green";
	}else{
		timeOfDay = "night"
		styles.color ="blue";
	}


	return(
	<div>
		<h2 style={styles}>Good {timeOfDay}!</h2>

		<div className="item-list">
		<TodoItem />
		<TodoItem />
		<TodoItem />
		<TodoItem />
		</div>
	</div>
	);
}

export default MainContent;