import {useState} from 'react';
import TheTitle from './TheTitle';
import BeautifullScreen from './BeautifullScreen';
import AmazingNumberButton from './AmazingNumberButton';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';

function Calculator(){

    const [nombre, setNombre] = useState(''); // useState c'est global


    function handleClick(e) {
        e.preventDefault();
        console.log(e.target.value);
        const event = e.target.value

        setNombre(event)

    }

    return(
        <section className="calculette">
            <TheTitle />
            <BeautifullScreen number='0' nombre={nombre} />
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
                <GreatOperationButton name="+"/>
                <GreatOperationButton name="-"/>
                <GreatOperationButton name="x"/>
                <GreatOperationButton name="/"/>
                <MagnificientEqualButton name="=" />


            </section>
        </section>
    );
}
export default Calculator;
// pour concaténer les valeurs ils faut utiliser une nouvelle variable a la place de la props
// eval fonctionne avec les strings
// convertir le resultat si on veut l'affichr tout en limitant les characteres