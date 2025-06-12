export interface User {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface UserFrontend {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const mapUserToFrontend = (user: User): UserFrontend => {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
};
export const mapUsersToFrontend = (users: User[]): UserFrontend[] => {
  return users.map(mapUserToFrontend);
};
