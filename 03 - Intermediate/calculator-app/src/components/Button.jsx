export const buttons = [
  { value: "7", dataValue: 7, className: "number" },
  { value: "8", dataValue: 8, className: "number" },
  { value: "9", dataValue: 9, className: "number" },
  { value: "DEL", dataValue: "DEL", className: "function" },
  
  { value: "4", dataValue: 4, className: "number" },
  { value: "5", dataValue: 5, className: "number" },
  { value: "6", dataValue: 6, className: "number" },
  { value: "+", dataValue: "+", className: "operator" },

  { value: "1", dataValue: 1, className: "number" },
  { value: "2", dataValue: 2, className: "number" },
  { value: "3", dataValue: 3, className: "number" },
  { value: "-", dataValue: "-", className: "operator" },

  { value: ".", dataValue: ".", className: "number" },
  { value: "0", dataValue: 0, className: "number" },
  { value: "/", dataValue: "/", className: "operator" },
  { value: "*", dataValue: "*", className: "operator" },
  
  { value: "RESET", dataValue: "RESET", className: "function reset" },
  { value: "=", dataValue: "=", className: "equal" }  
];

export default function Button(props) {
  return(
    <button 
      className={props.className}
      data-value={props.dataValue}
      onClick={props.handleClick}
      >
        {props.value}
    </button>
  )
}