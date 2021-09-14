import TheTitle from './TheTitle';
import BeautifullScreen from './BeautifullScreen';
import AmazingNumberButton from './AmazingNumberButton';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';

function Calculator(){
    return(
        <section className="calculette">
            <TheTitle />
            <BeautifullScreen number='0' />
            <section className="lestouches">
                <AmazingNumberButton name="1" />
                <AmazingNumberButton name="2" />
                <AmazingNumberButton name="3" />
                <AmazingNumberButton name="4" />
                <AmazingNumberButton name="5" />
                <AmazingNumberButton name="6" />
                <AmazingNumberButton name="7" />
                <AmazingNumberButton name="8" />
                <AmazingNumberButton name="9" />
                <AmazingNumberButton name="0" />
                <GreatOperationButton />
                <MagnificientEqualButton />
            </section>
        </section>
    );
}
export default Calculator;
