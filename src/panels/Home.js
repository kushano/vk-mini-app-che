import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Spacing } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>чёподелать?</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">Приветствуем Вас,</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Выбирайте:</Header>}>
			<Div>
				{/* <Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
				<Spacing/> */}
				<Button stretched size="l" mode="secondary" onClick={go} data-to="cinema">
					чё посмотреть?
				</Button>
				<Spacing/>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="books">
					чё почитать?
				</Button>
				<Spacing/>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="draw">
					чё порисовать?
				</Button>
				<Spacing/>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="cities">
					куда сгонять?
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
