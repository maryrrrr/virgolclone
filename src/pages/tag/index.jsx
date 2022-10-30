import {useParams} from 'react-router-dom';
const Tag = () => {
    
    const {tagname} = useParams();
    return (<div>Tag: {tagname} </div>);
    
}
export default Tag;