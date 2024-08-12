import { useParams } from 'react-router-dom';
import TermsAndConditions from '../pages/TermsAndConditions';

let data = {
    "terms-conditions": <TermsAndConditions />
}
const DynamicPage = () => {
    const { slug } = useParams();

    return (
        <div className="container mx-auto p-4">
            {data[slug]}
        </div>
    );
};

export default DynamicPage;
