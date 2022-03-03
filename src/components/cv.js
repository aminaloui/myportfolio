import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Opleidingen from './opleidingen';
import Werkervaringen from './werkervaringen';
import Skills from './skills';
import Hobbys from './hobbys';
import { motion } from 'framer-motion';




class Cv extends Component {
    render() {
        return (
            <motion.div 
            initial={{ opacity: 0}}
            animate={{ opacity: 2}}
            exit={{ opacity: 0}} 
            key = "cv"> 
                <Grid>
                    <Cell col={4} >
                        <div className="avatar-grid">
                            <img src="/images/avatar3.png" className= "avatar-cv" alt="avatar"/>
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Amin Aloui</h2>
                        <h4 style={{ color: 'grey' }}> Junior Software Developer</h4>
                        <hr style={{ borderTop: '3px solid #2c3e50', width: '50%' }} />
                        <p> Mijn interesse in programmeren is voor mij begonnen tijdens mijn tussenjaar. Ik had toen veel vrije tijd waarin ik mezelf heb aangeleerd te werken met HTML en CSS. Door middel van verschillende online cursussen en oefenopdrachten ben ik erachter gekomen dat ik hier nog veel meer over wil leren en een carrière van wil maken en heb ik me daarom aangemeld voor de opleiding ICT Software development. Tijdens mijn huidige opleiding bij YoungCapital Next heb ik leren werken met Python, Java, Javascript , Html en css . Mijn streefdoel is om zo veel
                        mogelijk ervaring op programmeergebied te kunnen opdoen.
                        </p>
                        <hr style={{ borderTop: '3px solid #2c3e50', width: '50%' }} />
                        <h5>Email</h5>
                        <p>Aminaloui1@gmail.com</p>

                        <h5>Geboorte datum</h5>
                        <p>19-08-1997</p>
                        <h5>Rijbewijs</h5>
                        <p>Ja &nbsp; <i class="fa fa-car" aria-hidden="true"></i></p>
                        
                        <hr style={{ borderTop: '3px solid #2c3e50', width: '50%' }} />
                    </Cell>
                    <Cell className="cv-right-col" col={8}>
                        <h3>Opleidingen</h3>

                        <Opleidingen
                            startYear={2018}
                            endYear={2022}
                            icon={"fa fa-graduation-cap"}
                            schoolName={"HBO ICT: Software Development"}
                            schoolDescription={"De eerste 3 maanden heb ik tijdens de opleiding een bootcamp gevolgd waarbij ik verschillende programmeertalen heb geleerd. Vervolgens ga ik 4 dagen in de week werken en 1 dag per week naar school. Naast de programmeertalen die ik heb geleerd, heb ik ook aan mijn soft skills gewerkt zoals presentatie- , communicatie-, en gespreksvaardigheden."
                            } />
                        <Opleidingen
                            startYear={2017}
                            endYear={ 2018}
                            schoolName={"HBO: Bedrijfskunde MER"}
                            schoolDescription={"De opleiding bedrijfskunde MER heb ik aan de Hogeschool van Amsterdam gevolgd. Deze opleiding heb ik niet afgerond."
                            } />
                        <Opleidingen
                            startYear={2015}
                            endYear={2017}
                            icon={"fa fa-graduation-cap"}
                            schoolName={"Havo"}
                            schoolDescription={"Profiel Natuur & gezondheid met de vakken Wiskunde A , natuurkunde , scheikunde en biologie."
                            } />
                        <Opleidingen
                            startYear={2010}
                            endYear={2014}
                            icon={"fa fa-graduation-cap"}
                            schoolName={"VMBO-T"}
                            schoolDescription={"profiel Techniek met de vakken Wiskunde Natuurkunde en Biologie"
                            } />

                        <hr style={{ borderTop: '3px solid #2c3e50' }} />

                        <h3>Werkervaringen</h3>
                        <Werkervaringen
                            startYear={"September 2021"}
                            endYear={"Heden"}
                            jobName={"9 Knots - De Kwakel, Uithoorn"}
                            jobDescription={"Als Junior Developer bij 9 Knots hou ik mij bezig met het ontwikkelen van bedrijfssoftware. Dit wordt gedaan binnen 9 Knots haar eigen framework ,genaamd CaseMaster, in combinatie van SQL. Binnen het framework werdt er ook met HTML, CSS en JavaScript gewerkt. De klanten van 9 Knots komen voornamelijk uit de sierteeltsector."}
                        />

                        <Werkervaringen
                            startYear={"Juli 2020"}
                            endYear={"Augustus 2020"}
                            jobName={"Stage bij Indocs - Utrecht"}
                            jobDescription={"Tijdens mijn huidige (Zomer)stage bij Indocs in Utrecht, leer ik door middel van trainingen om met het low code-platform K2 te werken en krijg ik trainingen in SQL. Na de trainingen is het de bedoeling om Business Applicaties te bouwen. Zowel intern als voor klanten worden dit soort Business Apps gebruikt."}
                        />

                        <Werkervaringen
                            startYear={"December 2018"}
                            endYear={"Mei 2020"}
                            jobName={"Acorel Commerce - Alkmaar"}
                            jobDescription={"Als software developer bij Acorel Commerce, heb ik me bezig gehouden met het bouwen van commerce platforms voor grote klanten. Het eerste project waar ik aan heb gewerkt , was voor bavaria (Bavaria Cashback actie). Hier heb ik in Java aan gewerkt met het webframework Spring. Hiernaast heb ik me bij Acorel ook bezig gehouden met bugfixing en het analyseren van logbestanden."}
                        />

                      

                        <hr style={{ borderTop: '3px solid #2c3e50' }} />
                        <h2>Skills</h2>
                        
                        <Skills
                            skill={"HTML"}
                            progress={80}
                        />
                          <Skills
                            skill={"CSS"}
                            progress={75}
                        />
                        <Skills
                            skill={"JavaScript"}
                            progress={75}
                        />
                         <Skills
                            skill={"SQL"}
                            progress={70}
                        />
                        <Skills
                            skill={"React.JS"}
                            progress={60}
                        />
                        <Skills
                            skill={"Java"}
                            progress={50}
                        />
                        <Skills
                            skill={"Python"}
                            progress={50}
                        />
                        <Skills
                            skill={"Django"}
                            progress={50}
                        />

                       
                        <h3>Hobby's</h3>
                   
                         <Hobbys
                            
                            hobby={"Koken"}
                            icon={"fa fa-cutlery"}
                            
                        />
                    
                            <Hobbys
                            
                            hobby={"Lezen"}
                            icon={"fa fa-book"}
                            
                        />
                         <Hobbys 
                            
                            hobby={"Gamen"}
                            icon={"fa fa-gamepad"}
                            
                        />
                      
                        



                    </Cell>


                </Grid>
            </motion.div>
        )
    }
}



export default Cv;