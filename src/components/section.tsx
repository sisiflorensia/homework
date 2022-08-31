import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div`
    background: black;
    height: 720px;
`
const SectionTitleGroup = styled.div``
const SectionTitle = styled.h3``
const SectionText = styled.p``

const Section = props => (
    <SectionGroup image={props.image}>
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section