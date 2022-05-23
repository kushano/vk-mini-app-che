import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Button } from '@vkontakte/vkui';

// import cinema_db from 'cinema.json'

let cinema_db = require('~/db/cinema.json');

const Cinema = props => (
    
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>чё посмотреть?
		</PanelHeader>
	</Panel>
);

Cinema.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Cinema;
