export const getButtonVariant = (variant) => {
  switch (variant) {
    case 'primary':
      return 'btn-primary';
    case 'delete':
      return 'btn-delete';
    default:
      return 'btn-primary';
  }
};
