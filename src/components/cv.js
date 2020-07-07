import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Opleidingen from './opleidingen';
import Werkervaringen from './werkervaringen';
import Skills from './skills';
import Hobbys from './hobbys';


class Cv extends Component {
    render() {
        return (
            <div>
                <Grid>

                    <Cell col={4} >
                        <div style={{ textAlign: 'center' }}>
                            <img src="/images/avatar.png" alt="avatar" style={{ height: '300px', }} />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Amin Aloui</h2>
                        <h4 style={{ color: 'grey' }}> Junior Software Developer</h4>
                        <hr style={{ borderTop: '3px solid #833f62', width: '50%' }} />
                        <p> Mijn interesse in programmeren is voor mij begonnen tijdens mijn tussenjaar. Ik had toen veel vrije tijd waarin ik mezelf heb aangeleerd te werken met HTML en CSS. Door middel van verschillende online cursussen en oefenopdrachten ben ik erachter gekomen dat ik hier nog veel meer over wil leren en een carrière van wil maken en heb ik me daarom aangemeld voor de opleiding ICT Software development. Tijdens mijn huidige opleiding bij YoungCapital Next heb ik leren werken met Python, Java, Javascript , Html en css . Mijn streefdoel is om zo veel
                        mogelijk ervaring op programmeergebied te kunnen opdoen.
                        </p>
                        <hr style={{ borderTop: '3px solid #833f62', width: '50%' }} />
                        <h5>Email</h5>
                        <p>Theaminaloui@hotmail.com</p>

                        <h5>Geboorte datum</h5>
                        <p>19-08-1997</p>
                        <h5>Rijbewijs</h5>
                        <p>Ja</p>
                        <hr style={{ borderTop: '3px solid #833f62', width: '50%' }} />
                    </Cell>
                    <Cell className="cv-right-col" col={8}>
                        <h3>Opleidingen</h3>

                        <Opleidingen
                            startYear={2018}
                            endYear={"Heden"}
                            schoolName={"ICT Software Development"}
                            schoolDescription={"De eerste 3 maanden heb ik tijdens de opleiding een bootcamp gevolgd waarbij ik verschillende programmeertalen heb geleerd. Vervolgens ga ik 4 dagen in de week werken en 1 dag per week naar school. Naast de programmeertalen die ik heb geleerd, heb ik ook aan mijn soft skills gewerkt zoals presentatie- , communicatie-, en gespreksvaardigheden."
                            } />
                        <Opleidingen
                            startYear={2012}
                            endYear={2018}
                            schoolName={"Bedrijfskunde MER"}
                            schoolDescription={""
                            } />
                        <Opleidingen
                            startYear={2015}
                            endYear={"2017 (Diploma behaald)"}

                            schoolName={"Havo"}
                            schoolDescription={"Profiel Natuur & gezondheid met de vakken Wiskunde A , natuurkunde , scheikunde en biologie."
                            } />
                        <Opleidingen
                            startYear={2010}
                            endYear={"2014 (Diploma behaald)"}
                            schoolName={"VMBO-T"}
                            schoolDescription={"profiel Techniek met de vakken Wiskunde Natuurkunde en Biologie"
                            } />

                        <hr style={{ borderTop: '3px solid #833f62' }} />

                        <h3>Werkervaringen</h3>
                        <Werkervaringen
                            startYear={"07-2020"}
                            endYear={"08-2020"}
                            jobName={"Stage bij Indocs - Utrecht"}
                            jobDescription={"Als software developer bij Acorel Commerce, heb ik me bezig gehouden met het bouwen van commerce platforms voor grote klanten. Het eerste project waar ik aan heb gewerkt , was voor bavaria (Bavaria Cashback actie). Hier heb ik in Java aan gewerkt met het webframework Spring. Hiernaast heb ik me bij Acorel ook bezig gehouden met bugfixing en het analyseren van logbestanden."}
                        />

                        <Werkervaringen
                            startYear={"12-2018"}
                            endYear={"05-2020"}
                            jobName={"Acorel Commerce - Alkmaar"}
                            jobDescription={"Als software developer bij Acorel Commerce, heb ik me bezig gehouden met het bouwen van commerce platforms voor grote klanten. Het eerste project waar ik aan heb gewerkt , was voor bavaria (Bavaria Cashback actie). Hier heb ik in Java aan gewerkt met het webframework Spring. Hiernaast heb ik me bij Acorel ook bezig gehouden met bugfixing en het analyseren van logbestanden."}
                        />


                        <hr style={{ borderTop: '3px solid #833f62' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill={"HTML/CSS"}
                            progress={80}
                        />
                        <Skills
                            skill={"JavaScript"}
                            progress={75}
                        />
                        <Skills
                            skill={"ReactJs"}
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
                            
                            hobby={"Reizen"}
                            icon={"fa fa-plane"}
                            
                        />



                    </Cell>


                </Grid>
            </div>
        )
    }
}



export default Cv;