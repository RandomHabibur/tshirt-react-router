import Special from '../Special/Special';

const Myself = ({ ring }) => {
    return (
        <div>
            <h2>This is Myself</h2>
            <Special ring={ring}>Special</Special>
        </div>
    );
};

export default Myself;