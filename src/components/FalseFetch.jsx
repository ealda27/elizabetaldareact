import {data} from '../Muebles/Tipos'

let is_ok = true;

const FalseFetch = () => {                               
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (is_ok){
            resolve(data);
        } else {
            reject("Error");
        }
    },1000)
    })
}

export default FalseFetch

