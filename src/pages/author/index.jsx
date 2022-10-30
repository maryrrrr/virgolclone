import {useParams} from 'react-router-dom';

const Author = () =>{
    const {id} = useParams();
    return (<div>author {id} </div>);

}
export default Author;