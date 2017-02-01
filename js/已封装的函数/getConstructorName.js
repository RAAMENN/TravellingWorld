function getConstructorName(obj){
    return (obj===undefined||obj===null)?obj:(obj.constructor&&obj.constructor.toString().match(/function\s*([^(]*)/)[1]);
}