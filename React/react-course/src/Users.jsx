export const Users = ({users}) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <ul key={user.id}>
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>
              <img src={user.image} alt={user.name} />
            </li>
          </ul>
        );
      })}
    </div>
  );
};
