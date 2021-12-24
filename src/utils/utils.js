export const getInitials = (firstName, lastName) => {
  return firstName?.trim().charAt(0).toUpperCase() + lastName?.trim().charAt(0).toUpperCase();
};
export const ucfirst = (text) => (text?.length ? `${text[0].toUpperCase()}${text.slice(1)}` : '');
