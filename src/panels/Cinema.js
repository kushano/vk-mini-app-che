import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, PanelHeader, PanelHeaderBack, Button, FixedLayout, Text, ContentCard, Avatar, Spacing } from '@vkontakte/vkui';

import cinema_db from './dbs/cinema.json'
import { useEffect, useState } from 'react/cjs/react.production.min';
import { number } from 'prop-types';

// fetch(cinema_db).then(cinema_db => console.log(cinema_db))

function Cinema(props) {
	// const count = Array(cinema_db)
	
	const count = 5
	let number = 4
	const getRandomNumber = (e) => {
		// window.location.reload(false);
		// e.preventDefault()
		number = Math.floor(Math.random() * (count+1))
		console.log(number)
	}
	// const getRandomInteger = (e) => {
	// 	e.preventDefault();
	// 	var v = Object.keys(count).map((obj) => {
	// 		var size = 0
	// 		for (obj in count) {
	// 			size++;
	// 		}
	// 		return size;
	// 	})
	// 	console.log(Math.floor(Math.random() * count))
	// 	console.log(v)
	// }

	return (
		<Panel id={props.id}>
			{getRandomNumber()}
			<FixedLayout>
				<PanelHeader
					left={<PanelHeaderBack onClick={props.go} data-to="home" />}
				>чё посмотреть?
				</PanelHeader>
				<Spacing></Spacing>
				<Button type="submit" onClick={getRandomNumber} stretched size="l">скажи</Button>
				<Spacing></Spacing>
				<ContentCard
					size="l"
					header={<Avatar size={150} src={cinema_db[number].img}/>}	
					subtitle={cinema_db[number].from}
					maxHeight={200}
					text={<div>
						<Text weight='semibold'>{cinema_db[number].name}</Text>
						<Text>Режиссёр: {cinema_db[number].dir}</Text>
						<Text color='#ff0000'>КП: {cinema_db[number].kp} IMDb: {cinema_db[number].imdb}</Text>
						<Spacing/>
						<Text>{cinema_db[number].desc}</Text></div>
					}
				>	
				</ContentCard>
			</FixedLayout>
		</Panel>
	)
}

Cinema.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Cinema;
