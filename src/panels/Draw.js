import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Input, Panel, PanelHeader, PanelHeaderBack, Button, FixedLayout, Text, ContentCard, Avatar, Spacing } from '@vkontakte/vkui';

import draw_db from './dbs/draw.json'

function Draw(props) {

    const count = 146

    const [words, setWords] = useState('')

    const [number, setNumber] = useState(0)

    const getRandomNumber = (e) => {
        // e.preventDefault()
        setNumber(Math.floor(Math.random() * (count + 1)))

        const newMsg = {
            id: Date.now(),
            word: draw_db[number].word
        }
        setWords([...words, newMsg])
    }


    var cardMap = Object.keys(words).map((msg) =>
        <Text key={msg.toString()} weight='semibold'>{words[msg].word}</Text>
    )

    return (
        <Panel id={props.id}>
            <Spacing size={120}></Spacing>
            <FixedLayout filled vertical='top'>
                <PanelHeader
                    left={<PanelHeaderBack onClick={props.go} data-to="home" />}
                >чё порисовать?
                </PanelHeader>
                <Spacing></Spacing>
                <Button type="submit" onClick={getRandomNumber} stretched size="l">добавь</Button>
                <Spacing></Spacing>
            </FixedLayout>
            <Panel>
                <ContentCard
                    size="l"
                    header={"попробуй объединить этот список в один рисунок:"}
                    // subtitle={books_db[number].from}
                    // maxHeight={200}
                    text=
                    {cardMap}
                ></ContentCard>
            </Panel>
        </Panel>
    )
}

Draw.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Draw;
