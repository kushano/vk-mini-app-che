import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, PanelHeader, PanelHeaderBack, Button, FixedLayout, Text, ContentCard, Avatar, Spacing } from '@vkontakte/vkui';

import books_db from './dbs/books.json'

function Books(props) {

	const count = 5

	const [number, setNumber] = useState(0)

	const getRandomNumber = (e) => {
		e.preventDefault()
		setNumber(Math.floor(1 + Math.random() * (count + 1)))
		// console.log(number)
	}

	var cardMap = Object.keys(books_db).map((msg) =>
		<ContentCard
			size="l"
			header={<Avatar size={150} src={books_db[number].img} />}
			subtitle={books_db[number].from}
			maxHeight={200}
			text={<div>
				<Text weight='semibold'>{books_db[number].jenre} {books_db[number].name}, {books_db[number].year}</Text>
				<Text>Автор: {books_db[number].author}</Text>
				<Text color='#ff0000'>Литрес: {books_db[number].litres}</Text>
                <Spacing />
                <Text>Цитата: {books_db[number].quote}</Text>
				<Spacing />
				<Text>{books_db[number].desc}</Text></div>
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
				>чё почитать?
				</PanelHeader>
				<Spacing></Spacing>
				<Button type="submit" onClick={getRandomNumber} stretched size="l">скажи</Button>
				<Spacing></Spacing>
			</FixedLayout>
			{cardMap[0]}
		</Panel>
	)
}

Books.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Books;
