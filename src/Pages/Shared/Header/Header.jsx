import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto pt-10' src={logo} />
            <p className='my-3'>Journalism Without Fear or Favour</p>
            <p className='text-xl mb-6'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;