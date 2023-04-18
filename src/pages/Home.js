
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';

  export default function Home() {
    const { isLoggedIn } = useAuth();

    return (
     <div>
            {!isLoggedIn ? ( <p>
            Hello! Welcome to PhoneBook:{' '}
            <Link to="/register"> register </Link>
            or
            <Link to="/login"> login </Link>
             </p>):(<p> You are already logged in</p>)
         }
       </div>

    )
        }   
    
  