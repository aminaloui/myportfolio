import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Opleidingen from './opleidingen';
import Werkervaringen from './werkervaringen';
import Skills from './skills';


class Cv extends Component {
    render() {
        return (
            <div>
                <Grid>

                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src="/images/avatar.png" alt="avatar" style={{ height: '300px' }} />

                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Amin Aloui</h2>
                        <h4 style={{ color: 'grey' }}> Junior Software Developer</h4>
                        <hr style={{ borderTop: '3px solid #833f62', width: '50%' }} />
                        <p> "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        "Er is niemand die van pijn zelf houdt, die het zoekt en die het hebben wil, eenvoudigweg omdat het pijn is..."
                        Wat is Lorem Ipsum?
                        Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken.
                        </p>
                        <hr style={{ borderTop: '3px solid #833f62', width: '50%' }} />
                        <h5>Addres</h5>
                        <p>Hacker way, Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>(+316) 40665465</p>
                        <h5>Email</h5>
                        <p>Theaminaloui@hotmail.com</p>
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
                            schoolDescription={"Er is niemand die van pijn zelf houdt, die het zoekt en die het hebben wil, eenvoudigweg omdat het pijn is...Er is niemand die van pijn zelf houdt, die het zoekt en die het hebben wil, eenvoudigweg omdat het pijn is..."
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
                            startYear={2018}
                            endYear={2020}
                            jobName={"Acorel Commerce - Alkmaar"}
                            jobDescription={"Als software developer bij Acorel Commerce, heb ik me bezig gehouden met het bouwen van commerce platforms voor grote klanten. Het eerste project waar ik aan heb gewerkt , was voor bavaria (Bavaria Cashback actie). Hier heb ik in Java aan gewerkt met het webframework Spring. Hiernaast heb ik me bij Acorel ook bezig gehouden met bugfixing en het analyseren van logbestanden."}
                        />
                        <Werkervaringen
                            startYear={2018}
                            endYear={2020}
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
                        

                    </Cell>


                </Grid>
            </div>
        )
    }
}



export default Cv;