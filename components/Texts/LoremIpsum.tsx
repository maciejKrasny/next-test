import React from 'react';
import styled from 'styled-components';

const LoremIpsumStyled = styled.p`
    color: white;
    background: rgb(0,212,255);
    background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 100%);
    padding: 32px 16px;
`;

export default function LoremIpsum() {
    return (
        <div>
            <LoremIpsumStyled>
                Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker
            </LoremIpsumStyled>
        </div>
    )
}
