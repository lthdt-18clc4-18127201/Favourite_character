import SearchBox from './Search-box'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Nav() {
    const router = useRouter();
    //this define the action after click button

    function handleRegister() {
        router.push('/register');
    }

    function handleLogin() {
        router.push('/login');
    }
    return (
        <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link href="/" passHref>
                    <a className="navbar-brand" >Favourite Character</a>
                </Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link href="/admin" passHref>
                            <a className="nav-link" >Admin</a>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                    <div className="to-auth-form__guest">
                        <button className="btn btn-to-auth-form" onClick={handleRegister}>Register</button>
                        <button className="btn btn-to-auth-form" onClick={handleLogin}>Login</button>
                    </div>
                    <SearchBox/>
                </div>
                </nav>
        </div>
        </>
    )
}