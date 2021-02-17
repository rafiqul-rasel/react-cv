

import React from 'react';
import {Grid, Typography} from '@material-ui/core';

import HomeSocialButton from '../social/Social';
import {LINKEDIN_LINK, GITHUB_LINK, FACEBOOK_LINK, INSTAGRAM_LINK, TWITTER_LINK, NAME} from "../constant";
import HomeParticleComponent from './particleheader';
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";


const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: theme.palette.common.black,
        minHeight: '100vh',
    },
    headingFont: {
        fontFamily: 'poppins-bold, sans-serif',
    },
    headingColor: {
        color: theme.palette.common.white
    },
    buttons: {
        zIndex: 2,
        color: theme.palette.common.white,
        margin: '0'
    }
}))

const Header = () => {

    const classes = useStyles()

    const s = " | ";
    return (
        <Grid container alignItems="center" className={classes.background}>

            <HomeParticleComponent/>

            <Grid container alignItems="center" style={{zIndex: 2, margin: '5% 0 0 0'}}>
                <Grid item lg={12}>
                    <Typography align="center" variant="h3" color="primary" className={clsx(classes.headingColor, classes.headingFont)}>
                        Assalam Oalikum
                    </Typography>
                    <Typography align="center" variant="h1" className={clsx(classes.headingColor, classes.headingFont)}>
                        I'm {NAME}
                    </Typography>
                </Grid>
            </Grid>

            <Grid container style={{zIndex: 2, margin: '0 0 0 0'}}>
                <Grid item lg={12}>
                    <Typography align="center" variant="h5" className={classes.headingColor}>
                        <span>Learning</span>
                        <span> [ Ai</span>
                        {`${s}`}
                        <span>Blockchain</span>
                        {`${s}`}
                        <span>SQA ]</span>
                        {`${s}`}
                        <span>[ Android</span>
                        {`${s}`}
                        <span>Wab</span>
                        {`${s}`}
                        <span>Software ]</span>
                        <span>Developer</span>
                    </Typography>
                    <Typography align="center" variant="h4" color="primary" className={classes.headingFont}>

                        <span className={clsx(classes.headingColor, classes.headingFont)}><br/>I love to Develop creative Technology</span>

                    </Typography>
                </Grid>
            </Grid>

            <Grid container justify="center" spacing={5} className={classes.buttons}>
                <Grid item>
                    <HomeSocialButton iName="Linkedin" link={LINKEDIN_LINK}/>
                </Grid>
                <Grid item>
                    <HomeSocialButton iName="Github" link={GITHUB_LINK}/>
                </Grid>
                <Grid item>
                    <HomeSocialButton iName="Facebook" link={FACEBOOK_LINK}/>
                </Grid>
                <Grid item>
                    <HomeSocialButton iName="Instagram" link={INSTAGRAM_LINK}/>
                </Grid>
                <Grid item>
                    <HomeSocialButton iName="Twitter" link={TWITTER_LINK}/>
                </Grid>
            </Grid>

            <Grid container justify="center" className={classes.buttons}>
                <Grid item lg={12}>
                    <Typography align="center" component={"div"}>
                        <HomeSocialButton iName="ChevronDown" link="#about"/>
                    </Typography>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Header;
