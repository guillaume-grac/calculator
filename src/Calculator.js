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
            <AmazingNumberButton />
            <GreatOperationButton />
            <MagnificientEqualButton />
        </section>
    );
}
export default Calculator;
