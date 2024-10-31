import PropTypes from 'prop-types';
import "./User.css"
import { useNavigate } from 'react-router-dom';
const User = ({user}) => {
    const {id, name, email, phone} = user;
    const navigate = useNavigate();
    const handleShowDetails = () => {
        navigate(`/user/${id}`)
    };
    return (
        <div className='user'>
           <h2>Name: {name}</h2> 
           <p>Email: {email}</p>
           <p>Phone {phone}</p>
           <button onClick={handleShowDetails}>Show details</button>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.array
}

export default User;