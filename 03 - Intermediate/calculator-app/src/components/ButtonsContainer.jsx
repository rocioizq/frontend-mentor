import Button, { buttons } from "./Button.jsx";

export default function ButtonsContanier({ handleClick }) {
    return(
        <div className="container">
        {buttons.map((btn, index) => (      
        <Button 
            key={index} 
            value={btn.value}
            className={btn.className}
            dataValue={btn.dataValue}
            handleClick={() => handleClick(btn.value, btn.className)}
        />
      ))}
        </div>
    )
}