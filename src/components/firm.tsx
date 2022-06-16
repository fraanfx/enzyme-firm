import { SignatureProps } from '../components/UISignature'

import '../App.css'

const Signature = (props:SignatureProps) =>{
    return(
        <table cellPadding={0} cellSpacing={0} className={"signature"} style={{
            
            fontFamily: 'Arial',
        }}>
    <tbody>
        
    <tr>
        <td rowSpan={1}>
            <a href="http://enzyme.biz/" target="_blank" rel='noreferrer'>
            <img
                src="https://signature.enzyme.es/AF-ENZYME-Logotipo-RGB-POSITIVO.svg"
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
    <tr>
        <td><b style={{fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '18px',
        color: '#2D3A49'}}>{props.fullName}</b></td>
    </tr>
    <tr>
        <td rowSpan={1}><p style={{fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '18px',
        color: '#2D3A49'}}>{props.position}</p></td>
    </tr>
    <tr>
        <td rowSpan={1}><a style={{fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '18px',
        color: '#2D3A49'}}>M. +34 {props.phone}
        </a></td>
    </tr>
    <tr>
        <td rowSpan={1}>{props.mail}</td>
    </tr>
    
    
            {props.calendarLink !== "none" &&
              <td > <p> Puedes agendar una reunión conmigo en el siguiente <a href={props.calendarLink} target="_blank" rel="noreferrer" style={{fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: '700',
              color:'#2D3A49',
              fontSize: '16px',
              lineHeight: '18px',
                textDecoration: 'underline',
            }}>link</a> </p> </td>
            }
             
         
    <tr  style={{marginTop: "20px", marginBottom: "20px"}}>
       <td> 
        <tr style={{marginRight: "30px",}}>
            <tr>
                <b style={{fontWeight:"700", fontSize:"12px", lineHeight: "14px", color:"#2D3A49" }}>Barcelona</b>
            </tr>
            
            <tr>
            <p style={{fontFamily: 'Arial', fontStyle: 'normal', fontWeight: '400', fontSize: '12px', lineHeight: '14px'}}>Passeig de Gràcia 17, 4ª planta </p>
            </tr>
            <tr>
            <p style={{fontFamily: 'Arial', fontStyle: 'normal', fontWeight: '400', fontSize: '12px', lineHeight: '14px'}}>08007 Barcelona</p>
            </tr>
        </tr>
   
          </td>
        <td>
        <tr style={{marginLeft: '50px'}}>
            <tr>
                <b style={{fontFamily: 'Arial',fontWeight:"700", fontSize:"12px", lineHeight: "14px", color:"#2D3A49" }}>Madrid</b>
            </tr>
            <tr >
            <p style={{fontFamily: 'Arial', fontStyle: 'normal', fontWeight: '400', fontSize: '12px', lineHeight: '14px'}}>Paseo de la Castellana 77, 6º</p>
            </tr>
            <tr>
            <p style={{fontFamily: 'Arial', fontStyle: 'normal', fontWeight: '400', fontSize: '12px', lineHeight: '14px'}}>28046 Madrid </p>
            </tr>
        </tr>
        </td>
            </tr>
    <tr>
        <br />
        <tr >
            <tr>
                <td>
                <a style={{marginRight: "5px",}} href={"https://www.linkedin.com/company/enzymeadvisinggroup/mycompany/"} rel="noreferrer" target="_blank">
                    <img src="https://signature.enzyme.es/Linkedin.svg" width={"22px"} height={"22px"} alt={"Linkedin"}/>
                </a>
                </td>
                <td>
                <a style={{marginRight: "5px",}} href={"https://enzyme.biz/blog"} rel="noreferrer" target="_blank">
                    <img src="https://signature.enzyme.es/Blogblog-svg1x.svg" width={"22px"} height={"22px"} alt={"Blog"}/>
                </a>
                </td>
                <td>
                <a href={"http://enzyme.biz/recursos"} target="_blank" rel="noreferrer">
                    <img src="https://signature.enzyme.es/Descargabledown-svg.svg" width={"22px"} height={"22px"} alt={"Descargable"}/>
                </a>
                </td>
                    
               
               
            </tr>
        </tr>
    </tr>
    
    
    </tbody>
</table>
    )
}
export default Signature;