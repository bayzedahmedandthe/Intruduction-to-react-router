import PropTypes from 'prop-types';
import "./User.css"
const User = ({user}) => {
    const {id, name, email, phone} = user;
    return (
        <div className='user'>
           <h2>Name: {name}</h2> 
           <p>Email: {email}</p>
           <p>Phone {phone}</p>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.array
}

export default User;