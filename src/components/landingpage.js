import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { index: 0 };
//     }

//     pageSize() {
//         if (this.state.index === 0) {
//             return (
//                 <Grid className="landing-grid">
//                     <Cell col={12} hidePhone="true" hideTablet="true">
//                         <img src="/images/avatar.png" alt="avatar" className="avatar-img" />

//                         <div className="banner-text-desktop">
//                             <h1>Junior Software Developer</h1>
//                             <hr />
//                             <p>HTML/CSS | JavaScript | ReactJs | Java | Python</p>

//                             <div className="social-links-desktop">

//                                 {/*Linkedin*/}
//                                 <a href="https://www.linkedin.com/in/amin-a-1b3316152/" target="_blank" rel="noopener noreferrer">

//                                     <i className="fa fa-linkedin-square" aria-hidden="true" />

//                                 </a>


//                                 {/*Github*/}
//                                 <a href="https://github.com/aminaloui" target="_blank" rel="noopener noreferrer">
//                                     <i className="fa fa-github-square" aria-hidden="true" />
//                                 </a>


//                                 {/*Email*/}
//                                 <a href="mailto:theaminaloui@hotmail.com" target="_blank" rel="noopener noreferrer">
//                                     <i className="fa fa-envelope-square" aria-hidden="true" />
//                                 </a>

//                             </div>

//                         </div>




//                     </Cell>




//                 </Grid>

//             )
    
//         }
// else if (this.state.index === 1){
//     return(
//         <Grid className="landing-grid-phone">

//                     <Cell col={2} phone={4} hideDesktop="true" hideTablet="true" >
//                         <img src="/images/avatar.png" alt="avatar" className="avatar-img" />

//                         <div className="banner-text-mobile">
//                             <h1>Junior Software Developer</h1>
//                             <hr />
//                             <p>HTML/CSS | JavaScript | ReactJs | Java | Python</p>
//                             <div className="social-links-mobile">

//                                 {/*Linkedin*/}
//                                 <a href="https://www.linkedin.com/in/amin-a-1b3316152/" target="_blank" rel="noopener noreferrer">

//                                     <i className="fa fa-linkedin-square" aria-hidden="true" />

//                                 </a>


//                                 {/*Github*/}
//                                 <a href="https://github.com/aminaloui" target="_blank" rel="noopener noreferrer">
//                                     <i className="fa fa-github-square" aria-hidden="true" />
//                                 </a>


//                                 {/*Email*/}
//                                 <a href="mailto:theaminaloui@hotmail.com" target="_blank" rel="noopener noreferrer">
//                                     <i className="fa fa-envelope-square" aria-hidden="true" />
//                                 </a>

//                             </div>

//                         </div>




//                     </Cell>
//                 </Grid>
//     )
// }
// else if (this.state.index){
//     return(
//         <Grid className="landing-grid-tablet">

//                     <Cell col={6} tablet={8} hideDesktop="true" hidePhone="true" align="middle">
//                         <img src="/images/avatar.png" alt="avatar" className="avatar-img" />

//                         <div className="banner-text-tablet">
//                             <h1>Junior Software Developer</h1>
//                             <hr />
//                             <p>HTML/CSS | JavaScript | ReactJs | Java | Python</p>
//                             <div className="social-links-tablet">

//                                 {/*Linkedin*/}
//                                 <a href="https://www.linkedin.com/in/amin-a-1b3316152/" target="_blank" rel="noopener noreferrer">

//                                     <i className="fa fa-linkedin-square" aria-hidden="true" />

//                                 </a>


//                                 {/*Github*/}
//                                 <a href="https://github.com/aminaloui" target="_blank" rel="noopener noreferrer">
//                                     <i className="fa fa-github-square" aria-hidden="true" />
//                                 </a>


//                                 {/*Email*/}
//                                 <a href="mailto:theaminaloui@hotmail.com" target="_blank" rel="noopener noreferrer">
//                                     <i className="fa fa-envelope-square" aria-hidden="true" />
//                                 </a>

//                             </div>

//                         </div>

//                     </Cell>
//                 </Grid>

//     )
// }
//     }


    render() {

        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12} hidePhone="true" hideTablet="true">
                        <img src="/images/avatar.png" alt="avatar" className="avatar-img" />

                        <div className="banner-text-desktop">
                            <h1>Junior Software Developer</h1>
                            <hr />
                            <p>HTML/CSS | JavaScript | ReactJs | Java | Python</p>

                            <div className="social-links-desktop">

                                {/*Linkedin*/}
                                <a href="https://www.linkedin.com/in/amin-a-1b3316152/" target="_blank" rel="noopener noreferrer">

                                    <i className="fa fa-linkedin-square" aria-hidden="true" />

                                </a>


                                {/*Github*/}
                                <a href="https://github.com/aminaloui" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>


                                {/*Email*/}
                                <a href="mailto:theaminaloui@hotmail.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-envelope-square" aria-hidden="true" />
                                </a>

                            </div>

                        </div>




                    </Cell>




                </Grid>
                <Grid className="landing-grid-phone">

                    <Cell col={2} phone={4} hideDesktop="true" hideTablet="true" >
                        <img src="/images/avatar.png" alt="avatar" className="avatar-img" />

                        <div className="banner-text-mobile">
                            <h1>Junior Software Developer</h1>
                            <hr />
                            <p>HTML/CSS | JavaScript | ReactJs | Java | Python</p>
                            <div className="social-links-mobile">

                                {/*Linkedin*/}
                                <a href="https://www.linkedin.com/in/amin-a-1b3316152/" target="_blank" rel="noopener noreferrer">

                                    <i className="fa fa-linkedin-square" aria-hidden="true" />

                                </a>


                                {/*Github*/}
                                <a href="https://github.com/aminaloui" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>


                                {/*Email*/}
                                <a href="mailto:theaminaloui@hotmail.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-envelope-square" aria-hidden="true" />
                                </a>

                            </div>

                        </div>




                    </Cell>
                </Grid>

                <Grid className="landing-grid-tablet">

                    <Cell col={6} tablet={8} hideDesktop="true" hidePhone="true" align="middle">
                        <img src="/images/avatar.png" alt="avatar" className="avatar-img" />

                        <div className="banner-text-tablet">
                            <h1>Junior Software Developer</h1>
                            <hr />
                            <p>HTML/CSS | JavaScript | ReactJs | Java | Python</p>
                            <div className="social-links-tablet">

                                {/*Linkedin*/}
                                <a href="https://www.linkedin.com/in/amin-a-1b3316152/" target="_blank" rel="noopener noreferrer">

                                    <i className="fa fa-linkedin-square" aria-hidden="true" />

                                </a>


                                {/*Github*/}
                                <a href="https://github.com/aminaloui" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>


                                {/*Email*/}
                                <a href="mailto:theaminaloui@hotmail.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-envelope-square" aria-hidden="true" />
                                </a>

                            </div>

                        </div>

                    </Cell>
                </Grid>

            </div>


        )
    }
}



export default LandingPage;