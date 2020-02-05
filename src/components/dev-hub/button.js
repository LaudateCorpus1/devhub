import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { size, colorMap, layer } from './theme';
import { P } from './text';

const borderGradient = css`
    border: solid;
    border-image-source: linear-gradient(
        270deg,
        ${colorMap.magenta} 0%,
        ${colorMap.violet} 100%
    );
    border-image-slice: 1;
    border-image-width: 3px;
`;

// below is a trick to center the button
// above the bottom layer for hovering effect
const centerPositioningStyles = css`
    margin: 2px;
`;

const buttonHoverStyles = css`
    &:hover {
        transform: translate3d(${size.small}, -${size.small}, 0px);
    }
`;

const secondaryHoverStyles = css`
    &:hover {
        ${borderGradient}
    }
`;
const primaryStyles = css`
    background: linear-gradient(
        270deg,
        ${colorMap.magenta} 0%,
        ${colorMap.violet} 100%
    );
    ${centerPositioningStyles}
    ${buttonHoverStyles}
`;

const secondaryStyles = css`
    background: ${colorMap.greyDarkTwo};
    border: 1px solid ${colorMap.greyLightTwo};
    ${centerPositioningStyles}
    ${secondaryHoverStyles}
    ${buttonHoverStyles}
`;

const ternaryStyles = css`
    background: none;
    &:hover,
    &:active {
        p {
            background: linear-gradient(
                270deg,
                ${colorMap.magenta} 0%,
                ${colorMap.violet} 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`;

const StyledButton = styled('button')`
    box-shadow: none;
    border: none;
    color: ${({ color }) => (color ? color : colorMap.devWhite)};
    cursor: pointer;
    height: 100%;
    padding: ${size.default};
    position: relative;
    transition: .1s ease-in-out;
    transition-delay: .02s;
    width: 100%;
    z-index: ${layer.middle};

    ${({ primary }) => primary && primaryStyles}
    ${({ secondary }) => secondary && secondaryStyles}
    ${({ primary, secondary }) => !primary && !secondary && ternaryStyles}
`;

const ButtonFront = styled('div')`
    width: 100%;
    height: 100%;
`;

const Text = styled('P')`
    margin: 0;
    padding: 0;
`;

const ButtonBack = styled('div')`
    height: 100%;
    position: absolute;
    // hide the bottom layer until hover
    visibility: hidden;
    width: 100%;
    z-index: ${layer.back};
    ${borderGradient}
`;

const ButtonWrapper = styled('div')`
    position: relative;
    min-height: 60px;
    min-width: 250px;
    &:hover {
        // show the bottom layer
        div {
            visibility: visible;
        }
    }
`;

/**
 * @param {Object<string, any>} props
 * @property {node} props.children
 * @property {func?} props.onClick
 * @property {boolean?} props.primary
 * @property {boolean?} props.secondary
 */
const Button = ({ children, onClick, primary, secondary, ...props }) => (
    <ButtonWrapper onClick={onClick}>
        {(primary || secondary) && <ButtonBack></ButtonBack>}
        <ButtonFront>
            <StyledButton primary={primary} secondary={secondary} {...props}>
                <Text> {children} </Text>
            </StyledButton>
        </ButtonFront>
    </ButtonWrapper>
);

export default Button;
