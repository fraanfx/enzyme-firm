import React from "react";
import Signature from "./firm";
import Firm from '../components/firm'
import '../index.css'
import { getValue } from "@testing-library/user-event/dist/utils";
import { Button, FormControlLabel, Switch, TextField, Typography } from "@material-ui/core";
 
export interface SignatureProps {
    fullName: string;
    position: string;
    mail: string;
    phone: string;
    calendarLink: string;
}


interface State extends SignatureProps {
    withPhone: boolean;
    withCalendar: boolean;
    copied: boolean;
}

const initialState: State = {
    fullName: "",
    position: "",
    mail: "",
    phone: "",
    calendarLink: "",
    withPhone: false,
    withCalendar: false,
    copied: false,
};

 export function UISignature () {
    const [state, setState] = React.useState<State>(initialState)
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "withPhone" || event.target.name === "withCalendar") {
            setState((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.checked,
            }));
        } else {
            setState((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value,
            }))
        }
    };
   
    const clearState =()=> setState(initialState);
    const isStateChanged = () => {
        return JSON.stringify(state) === JSON.stringify(initialState);
    };
const enoughData = () => {
    let progress = 100;
    if (state.withCalendar && state.withPhone){
        if(
           state.fullName &&
           state.position &&
           state.mail &&
           state.phone &&
           state.calendarLink
        ){
            return(
            <Firm  
                fullName={state.fullName} 
                position={state.position} 
                mail={state.mail} 
                phone={state.phone} 
                calendarLink={state.calendarLink}  
            />

            )
        }else {
            Object.entries(state).forEach(([key, value]) => {
                if(
                    ["fullName", "position", "mail", "phone", "calendarLink"].includes(key)
                ) {
                    if(getValue.length === 0){
                        progress = progress -20;
                    }
                }
            });
        }
    } else if (state.withCalendar){
            if(
               state.fullName &&
               state.position &&
               state.mail &&
               state.calendarLink
            ){
                return(
                    <Firm  
                        fullName={state.fullName} 
                        position={state.position} 
                        mail={state.mail} 
                        phone="902 026 289" 
                        calendarLink={state.calendarLink}  
                    />
                )
            }else {
                Object.entries(state).forEach(([key, value]) => {
                    if(
                        ["fullName", "position", "mail", "calendarLink"].includes(key)
                    ) {
                        if(getValue.length === 0){
                            progress = progress -25;
                        }
                    }
                });
            }
        
    }else if(state.withPhone){
            if(
               state.fullName &&
               state.position &&
               state.mail &&
               state.phone
            ){
                return(
                    <Firm  
                    fullName={state.fullName} 
                    position={state.position} 
                    mail={state.mail} 
                    phone={state.phone} 
                    calendarLink="none"  
                />
                )
            }else {
                Object.entries(state).forEach(([key, value]) => {
                    if(
                        ["fullName", "position", "mail", "phone"].includes(key)
                    ) {
                        if(getValue.length === 0){
                            progress = progress -25;
                        }
                    }
                });
            }
            

    }
    else{
        if(
            state.fullName &&
            state.position &&
            state.mail 
            
         ){
             return(
            <Firm  
                 fullName={state.fullName} 
                 position={state.position} 
                 mail={state.mail} 
                 phone="902 026 289" 
                 calendarLink="none"  
             />
             )
         }else {
             Object.entries(state).forEach(([key, value]) => {
                 if(
                     ["fullName", "position", "mail"].includes(key)
                 ) {
                     if(getValue.length === 0){
                         progress = progress -33;
                     }
                 }
             });
         }

    }
}



const copyToClipboard = () => {
    let copyText = document.querySelector(".signature");
    const range = document.createRange();
    if (copyText) {
        range.selectNode(copyText);
    }
    const windowSelection = window.getSelection();
    if (windowSelection) {
        windowSelection.removeAllRanges();
        windowSelection.addRange(range);
    }
    try {
        let successful = document.execCommand("copy");
        console.log(successful ? "Success" : "Fail");
        setState((prevState) => ({
            ...prevState,
            copied: true,
        }));
    } catch (err) {
        console.log("Fail");
    }
};





return(
    <>
        <div className="container column">
                <div className="header">
                    <img className="img-logo" src="https://signature.enzyme.es/AF-ENZYME-Logotipo-RGB-POSITIVO.svg"/>
                    <p>Signature generator</p>
                </div>

                <div className="columns">
                    <div className="form-column">
                        <form action="">
                        <input 
                            type="text"
                            placeholder="Tu nombre aquí"
                            className="form--input"
                            name="fullName"
                            value={state.fullName}
                            onChange={handleChange}
                        /> 

                        <input 
                            type="text"
                            placeholder="Tu cargo aquí"
                            className="form--input"
                            name="position"
                            value={state.position}
                            onChange={handleChange}
                        />  
                        
                        <input 
                            type="checkbox"
                            id="isPhoneChecked"
                            name="withPhone"
                            checked={state.withPhone}
                            onChange={handleChange}

                        />
                        <label>{state.withPhone ? "Movil personal" : "Movil de Enzyme"}</label>
                      
                        {state.withPhone &&(
                                <input 
                                type="text"
                                placeholder="Tu telefono aquí"
                                className="form--input"
                                name="phone"
                                value={state.phone}
                                onChange={handleChange}
                            />    
                        )
                        }
                        <input 
                            type="text"
                            placeholder="Tu email aquí"
                            className="form--input"
                            name="mail"
                            value={state.mail}
                            
                            onChange={handleChange}
                        />  






                        <input 
                            type="checkbox"
                            id="isCalendarChecked"
                            name="withCalendar"
                            checked={state.withCalendar}
                            onChange={handleChange}
                        />
                         <label>{state.withCalendar ? "Enlace de reunion google meet" : "Sin enlace de reunión"}</label>
                       
                        
                        {state.withCalendar &&(

                                <input 
                                        type="text"
                                        placeholder="Link reunión"
                                        className="form--input"
                                        name="calendarLink"
                                        value={state.calendarLink}
                                        onChange={handleChange}
                                />    
                                    
                        )
                        
                        } 
                        <div className="container-buttons">
                              
                            <a className="button-style" onClick={copyToClipboard}>Copiar firma</a> 
                            <a className="button-style" href="http://gmail.com/#settings/general" target="_blank" rel="noreferrer">Cambiar firma</a>                      
                            <button className="button-style"  onClick={clearState}>Limpiar estado</button>
                        </div> 
                         </form>
                    </div>
                    <div className="signature-column">
                        {enoughData()}
                    </div>
                </div>

                <div className='footer-sutil'>
          <p>Made with <div className='heart'>&#128153;</div>  from Enzyme Factory</p>
      </div> 
        </div>
        
    </>
)



 }
