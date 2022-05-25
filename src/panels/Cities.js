import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Input, Panel, PanelHeader, PanelHeaderBack, Button, FixedLayout, Text, ContentCard, Avatar, Spacing } from '@vkontakte/vkui';

import cities_db from './dbs/cities.json'

function Cities(props) {

    const count = 1116

    const [words, setWords] = useState('')

    const [number, setNumber] = useState(0)

    const getRandomNumber = (e) => {
        // e.preventDefault()
        setNumber(Math.floor(Math.random() * (count + 1)))

        const newMsg = {
            id: Date.now(),
            city: cities_db[number].city
        }
        setWords([newMsg])
    }


    var cardMap = Object.keys(words).map((msg) =>
        <Text key={msg.toString()} weight='semibold'>{words[msg].city}</Text>
    )

    return (
        <Panel id={props.id}>
            <Spacing size={120}></Spacing>
            <FixedLayout filled vertical='top'>
                <PanelHeader
                    left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
                >куда сгонять?
                </PanelHeader>
                <Spacing></Spacing>
                <Button type="submit" onClick={getRandomNumber} stretched size="l">сгенерить</Button>
                <Spacing></Spacing>
            </FixedLayout>
            <Panel>
                <ContentCard
                    size="l"
                    header={"попробуй cгонять в этот город:"}
                    // subtitle={books_db[number].from}
                    // maxHeight={200}
                    text=
                    {cardMap}
                ></ContentCard>
            </Panel>
        </Panel>
    )
}

Cities.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Cities;
