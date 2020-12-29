import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import { InfoSec,
         InfoRow,
         InfoColumn,
         TextWrapper,
         TopLine,
         Heading,
         Subtitle,
         ImgWrapper,
         Img
} from './InfoData.element';

const InfoData = ({
                   primary,
                   lightBg, 
                   imgStart, 
                   lightTopline, 
                   lightText, 
                   lightTextDesc,
                   buttonLabel, 
                   description, 
                   headLine, 
                   topLine,
                   img,
                   alt,
                   start
                }) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopline={lightTopline}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>   
        </>
    )
}

export default InfoData
