import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, PanelHeader, PanelHeaderBack, Button, FixedLayout, Text, ContentCard, Avatar, Spacing } from '@vkontakte/vkui';

import cinema_db from './dbs/cinema.json'

function Cinema(props) {

	const count = 18

	const [number, setNumber] = useState(0)

	const getRandomNumber = (e) => {
		e.preventDefault()
		setNumber(Math.floor(1 + Math.random() * (count + 1)))
		// console.log(number)
	}

	var cardMap = Object.keys(cinema_db).map((msg) =>
		<ContentCard
			size="l"
			header={<Avatar size={150} src={cinema_db[number].img} />}
			subtitle={cinema_db[number].from}
			maxHeight={200}
			text={<div>
				<Text weight='semibold'>{cinema_db[number].name}</Text>
				<Text>Режиссёр: {cinema_db[number].dir}</Text>
				<Text color='#ff0000'>КП: {cinema_db[number].kp} IMDb: {cinema_db[number].imdb}</Text>
				<Spacing />
				<Text>{cinema_db[number].desc}</Text></div>
			}
		>
		</ContentCard>
	)

	return (
		<Panel id={props.id}>
			<Spacing size={120}></Spacing>
			<FixedLayout filled vertical='top'>
				<PanelHeader
					left={<PanelHeaderBack onClick={props.go} data-to="home" />}
				>чё посмотреть?
				</PanelHeader>
				<Spacing></Spacing>
				<Button type="submit" onClick={getRandomNumber} stretched size="l">скажи</Button>
				<Spacing></Spacing>
			</FixedLayout>
			{cardMap[0]}
		</Panel>
	)
}

Cinema.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Cinema;
