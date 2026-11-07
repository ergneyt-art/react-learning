import { useState } from "react";
import '../css/site-header.css'
import Brand from './Brand';
import HeaderActionButton from './HeaderActionButton'
import HeaderLogin from './HeaderLogin';
import HeaderUserProfile from './HeaderUserProfile';
import HeaderSelecter from "./HeaderSelecter";
import reactIcon from '../assets/react.svg';

interface User {
  id: number
  name: string
  avatarUrl: string
}

const languageOptions: {value: string, label: string}[] = [
    {value: 'ENG', label: 'English'},
    {value: 'RU', label: 'Русский'}
]

interface Props {
    onToggleTheme: () => void;
    onToggleLang: (value: string) => void;
    currentTheme: 'light' | 'dark';
    localization?: {
        searchPlaceholder: string;
        signInButtonTitle: string;
        signUpButtonTitle: string;
        signOutButtonTitle: string;
        changeThemeButtonTitle: string;
    }
}

const Header = (props: Props) => {
    const [user, setUser] = useState<User | null>(null)
    return (
    <header className={`site-header ${props.currentTheme === 'light' ? 'header-light-mode' : 'header-dark-mode'}`}>
        <Brand></Brand>
        <div className="header-serach-container">
            <form className="header-serach-form">
                <input type="search" placeholder={props.localization?.searchPlaceholder || "Искать..."} aria-label="Поиск статей"/>
            </form>
        </div>
        <div className="header-actions">
            <HeaderSelecter onChangeSelectValue={props.onToggleLang} title="Lang" values={languageOptions} ></HeaderSelecter>
            <HeaderActionButton title={props.localization?.changeThemeButtonTitle || "Change theme"} onClick={props.onToggleTheme}></HeaderActionButton>
            {user ? <HeaderUserProfile  user={user} onSignOut={onSignOut} localization={props.localization}/> : <HeaderLogin localization={props.localization} onSignIn={onSignIn} onSignUp={onSignUp}/>}
        </div>
    </header>
    )

    function onSignIn() {
        setUser({
            id: 1,
            name: "Alex",
            avatarUrl: reactIcon,
        })
    }

    function onSignOut() {
        setUser(null);
    }

    function onSignUp() {
        console.log("SignUp clicked!");
    }
}

export default Header;