import {useState} from 'react';
import TheTitle from './TheTitle';
import ItsOver9000 from "./ItsOver9000";
import BeautifullScreen from './BeautifullScreen';
import AmazingNumberButton from './AmazingNumberButton';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';

function Calculator(){

    /*var string = '';*/
    /*const [nombre, setNombre] = useState(''); // useState c'est global*/
    /*const [operator, setOpera] = useState("");*/
    const [conca, setConca] = useState("");
    const [its, setOver] = useState(false)

    function handleClick(e) {

        e.preventDefault();
        const event = e.target.value;

        switch(event) {
            case '+':
                return setConca((conca+event).substr(0,15));
            case '-':
                return setConca((conca+event).substr(0,15));
            case '/':
                return setConca((conca+event).substr(0,15));
            case '%':
                return setConca((conca+event).substr(0,15));
            case '*':
                return setConca((conca+event).substr(0,15));
            case 'C':
                setOver(false)
                return setConca("");
            case '=':
                //Limiter nombre de caractères
                // eslint-disable-next-line no-eval
                let result = eval(conca.substr(0,15));

                if(result >= 9000){
                    setOver(true)
                    return setConca('ITS OVER 9000!!!')
                }else{
                    setOver(false)
                    return setConca(result);
                }

            default:
                return setConca((conca+event).substr(0,15));
        }
    }
    return(
        <section className="calculette">
            <TheTitle />
            {its ? <ItsOver9000 /> : <div></div>}
            <BeautifullScreen number='0' conca={conca} />
            <section className="lestouches">
                <AmazingNumberButton name="1" handleClick={handleClick}/>
                <AmazingNumberButton name="2" handleClick={handleClick} />
                <AmazingNumberButton name="3" handleClick={handleClick} />
                <AmazingNumberButton name="4" handleClick={handleClick} />
                <AmazingNumberButton name="5" handleClick={handleClick} />
                <AmazingNumberButton name="6" handleClick={handleClick} />
                <AmazingNumberButton name="7" handleClick={handleClick} />
                <AmazingNumberButton name="8" handleClick={handleClick} />
                <AmazingNumberButton name="9" handleClick={handleClick} />
                <AmazingNumberButton name="0" handleClick={handleClick} />
                <GreatOperationButton name="+" handleClick={handleClick}/>
                <GreatOperationButton name="-" handleClick={handleClick}/>
                <GreatOperationButton name="*" handleClick={handleClick}/>
                <GreatOperationButton name="/" handleClick={handleClick}/>
                <GreatOperationButton name="C" handleClick={handleClick}/>
                <MagnificientEqualButton name="=" handleClick={handleClick} />
            </section>
        </section>
    );
}
export default Calculator;

// pour concaténer les valeurs ils faut utiliser une nouvelle variable a la place de la props
// eval fonctionne avec les strings
// convertir le resultat si on veut l'affichr tout en limitant les characteres