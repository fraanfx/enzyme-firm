import { SignatureProps } from './UISignature'
import '../App.css'
import { TableBody } from '@material-ui/core';

import  REnzyme  from './../img/firm-logo.png';
import  RBlog  from './../img/firm-blog.png';
import  RLinkedin  from './../img/firm-link.png';
import  RDesc  from './../img/firm-descargar.png';


const Signature = (props:SignatureProps) =>{
    return(
        // cellPadding={0} cellSpacing={0}
        <table  className={"signature"} style={{
            
            fontFamily: 'Arial',
        }}>
        
        {/*Todo */}
       
            {/*Image header */}
            <tr>        
                        <td valign="top" align='left' rowSpan={1}>
                            <a href="http://enzyme.biz/" target="_blank" rel='noreferrer'>
                                <img
                                    src="https://signature.enzyme.es/firm-logo.png"
                                    alt="Enzyme Logo"
                                    width="154.64px"
                                    height="31px"
                                    style={{
                                        marginBottom: '15px'
                                    }}
                                />
                            </a>
                        </td>
                   </tr>
            {/*Name */}
            <tr style={{marginBottom: '15px'}}>
                <td><b style={{fontFamily: 'Arial',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '16px',
                lineHeight: '18px',
                color: '#2D3A49',
                marginBottom: '-20px'}}>{props.fullName}</b></td>
            </tr>
            {/*Position */}
            <tr>
                <td rowSpan={1}><p style={{fontFamily: 'Arial',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '18px',
                color: '#2D3A49',
                marginTop: '0px',
                marginBottom: '10px'}}>{props.position}</p></td>
            </tr>
            {/*Telf */}
            <tr>
                <td rowSpan={1}>
                    <a style={{fontFamily: 'Arial',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '18px',
                        marginBottom: '15px',
                        color: '#2D3A49'}}>{props.prefix} +34 {props.phone}
                    </a>
                </td>
            </tr>
            {/*Mail*/}
            
                    <tr>
                         <td rowSpan={1}>{props.mail}  </td>
            
                     </tr>
            
                    {props.calendarLink !== "none" &&
                        <tr style={{marginTop: '10px',
                        marginBottom: '10px'}}>
                            <td  rowSpan={1}>
                                <p> Puedes agendar una reuni??n conmigo en el siguiente 
                                    <a href={props.calendarLink} target="_blank" rel="noreferrer" style={{fontFamily: 'Arial',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    color:'#2D3A49',
                                    fontSize: '16px',
                                    lineHeight: '18.4px',
                                    marginTop: '10px',
                                    marginBottom: '10px',
                                    textDecoration: 'underline',}}> link
                                    </a> 
                                </p> 
                            </td>
                        </tr>
                    }
             
             
                
             <tr>
                <tr>
                {/*Ubi Barcelona */}
                  <tr>
                        <td>
                            <b style={{fontWeight:"700", fontSize:"12px", lineHeight: "13.8px", color:"#2D3A49" }}>Barcelona</b>
                        
                            <p style={{fontFamily: 'Arial', fontStyle: 'normal', fontWeight: '400', fontSize: '12px', lineHeight: '13.8px'}}>Passeig de Gr??cia 17, 4?? planta </p>
                        
                            <p style={{fontFamily: 'Arial', fontStyle: 'normal', fontWeight: '400', fontSize: '12px', lineHeight: '13.8px'}}>08007 Barcelona</p>
                        </td>
                    

                
                    {/*Ubi Madrid */}
                   
                        <td style={{paddingLeft: "50px",}}>
                            <b style={{fontFamily: 'Arial',fontWeight:"700", fontSize:"12px", lineHeight: "13.8px", color:"#2D3A49" }}>Madrid</b>
                       
                            <p style={{fontFamily: 'Arial', fontStyle: 'normal', fontWeight: '400', fontSize: '12px', lineHeight: '13.8px'}}>Paseo de la Castellana 77, 6??</p>
                        
                            <p style={{fontFamily: 'Arial', fontStyle: 'normal', fontWeight: '400', fontSize: '12px', lineHeight: '13.8px'}}>28046 Madrid </p>
                        
                        </td>
                    </tr>
                   </tr> 
                </tr>
       
          
                {/*Secci??n logos*/}
                <tr >
                    <tr>
                        <td>
                            <a style={{marginRight: "10px",}} href={"https://www.linkedin.com/company/enzymeadvisinggroup/mycompany/"} rel="noreferrer" target="_blank">
                                <img src="https://signature.enzyme.es/firm-link.png" width={"22px"} height={"22px"} alt={"Linkedin"}/>
                            </a>
                            <a style={{marginRight: "10px",}} href={"https://enzyme.biz/blog"} rel="noreferrer" target="_blank">
                                <img src="https://signature.enzyme.es/firm-blog.png" width={"22px"} height={"22px"} alt={"Blog"}/>
                            </a>
                       
                            <a href={"http://enzyme.biz/recursos"} target="_blank" rel="noreferrer">
                                <img src="https://signature.enzyme.es/firm-descargar.png" width={"22px"} height={"22px"} alt={"Descargable"}/>
                            </a>
                        </td>
                    </tr>
                </tr>
  

    
        </table>
    )
}
export default Signature;