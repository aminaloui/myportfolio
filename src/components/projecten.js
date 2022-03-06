import React, { Component } from 'react';
import Project from './project';
import { motion } from 'framer-motion';
import { Grid } from '@mui/material';


class Projecten extends Component {


    render() {

        const pageTransition = {
            in: {
                opacity: 1,
                y: 0,
            },
            out: {
                opacity: 0,
                y: "-10vh"
            }
        };

        return (
            <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}

                className="category-tabs">
       

                <div >
                <Grid container>
                <Project
                title={'Mijn Portfolio'} 
                body={'Mijn Portfolio heb ik in ReactJs geschreven. Bekijk het project op github via de button onder deze tekst.'}
                img={'https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg'}
                link={'https://github.com/aminaloui/myportfolio'}
                button={'Github'}
                /> 
                   <Project
                title={'Boodschappenlijst'}
                body={'In de applicatie meld je je via je google account aan en kun je een boodschappenlijstje opzetten. De objecten worden opgeslagen in een firebase database.'}
                img={'https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg'}
                link={'https://github.com/aminaloui/boodschappen-lijst'}
                button={'Github'}
                /> 
                   <Project
                title={'Bavaria Cashback'}
                body={'Tijdens mijn werkzaamheden bij Acorel Commerce in Alkmaar, heb ik met trots mee mogen werken aan het actieplatform van Bavria. Deze web-app is gebouwd in Java.'}
                img={'https://www.biernet.nl/images/brouwerij/55296-Bavaria%20logo.jpg'}
                link={'https://cashback.bavaria.com'}
                button={'Website'}
                /> 
                   <Project
                title={'Foodify'}
                body={'Foodify is een schoolproject gebouwd voor het vak Praktijkvaardigheden 2. Deze applicatie is gebouwd zodat mensen die te veel hebben gekookt en mensen die niet hebben gekookt elkaar tegemoetkomen. Het doel is om voedselverspilling te voorkomen.'}
                img={'https://indigo.amsterdam/wp-content/uploads/2017/05/python-django-logo-1024x576.jpg'}
                link={'https://github.com/aminaloui/Foodify-Praktijk-2-'}
                button={'Github'}
                /> 

                

                </Grid>
                
                    
                  
                    </div>


            </motion.div>
        )

    }
}



export default Projecten;