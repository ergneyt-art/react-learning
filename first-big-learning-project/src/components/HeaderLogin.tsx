interface Props {
    onSignIn: () => void;
    onSignUp: () => void;
    localization?: {
        searchPlaceholder: string;
        signInButtonTitle: string;
        signUpButtonTitle: string;
        signOutButtonTitle: string;
        changeThemeButtonTitle: string;
    }
}

const HeaderLogin = (props: Props) => {
    return (
        <div className="header-login-actions">
            <button type="button" onClick={props.onSignIn}>
                {props.localization?.signInButtonTitle || "Sign in"}
            </button>
            <button type="button" onClick={props.onSignUp}>
                {props.localization?.signUpButtonTitle || "Sign up"}
            </button>
        </div>
    )
}
export default HeaderLogin;