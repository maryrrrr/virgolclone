import {useParams} from 'react-router-dom';
const Category = () => {
    const {id} = useParams();
    return (<div>category {id} </div>);
    
}
export default Category;