export function Avatar(props) {
    return (
        <img
            className="avatar"
            src={props.user.avatarUrl}
            alt={pros.user.name}
        />
    )
}