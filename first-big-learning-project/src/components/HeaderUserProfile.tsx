interface Props {
    user: {
        id: number;
        name: string;
        avatarUrl: string
    };
    onSignOut: () => void,
    localization?: {
        searchPlaceholder: string;
        signInButtonTitle: string;
        signUpButtonTitle: string;
        signOutButtonTitle: string;
        changeThemeButtonTitle: string;
    }
}

const HeaderUserProfile = ({user, onSignOut, localization} : Props) => {
    return (
        <div>
            <img src={user.avatarUrl}></img>
            <span>{user.name}</span>
            <button type="button" onClick={onSignOut}>
                {localization?.signOutButtonTitle || "Sign out"}
            </button>
        </div>
    )
}

export default HeaderUserProfile;