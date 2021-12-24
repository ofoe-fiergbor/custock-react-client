export const getInitials = (firstName, lastName) => {
  return firstName?.trim().charAt(0).toUpperCase() + lastName?.trim().charAt(0).toUpperCase();
};
