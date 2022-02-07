import React from 'react'

export default function Button(props) {
    const clickButton1 = ()=>{
        props.showAlert("Success", "Button 1 has been clicked");
    }
    const clickButton2 = ()=>{
        props.showAlert("Success", "Button 2 has been clicked");
    }
  return (
    <>
    <button type="button" className="btn btn-primary my-3 mx-3" onClick={clickButton1}>Button1</button>
    <button type="button" className="btn btn-primary my-3 mx-3" onClick={clickButton2}>Button2</button>
    </>
  )
}
