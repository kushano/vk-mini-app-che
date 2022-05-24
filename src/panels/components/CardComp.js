import React from 'react';
import PropTypes from 'prop-types';

import { ContentCard, Text, Spacing, Button, Avatar } from '@vkontakte/vkui';

import cinema_db from '../dbs/cinema.json'

const CardComp = ({ getIf, number, ...props }) => {
    if (props.getIf == true) {
        <ContentCard
            size="l"
            header={<Avatar size={150} src={cinema_db[props.number].img} />}
            subtitle={cinema_db[props.number].from}
            maxHeight={200}
            text={<div>
                <Text weight='semibold'>{cinema_db[props.number].name}</Text>
                <Text>Режиссёр: {cinema_db[props.number].dir}</Text>
                <Text color='#ff0000'>КП: {cinema_db[props.number].kp} IMDb: {cinema_db[props.number].imdb}</Text>
                <Spacing />
                <Text>{cinema_db[props.number].desc}</Text></div>
            }
        >
        </ContentCard>
    } else {
        <ContentCard></ContentCard>
    }
    <ContentCard></ContentCard>
}

export default CardComp