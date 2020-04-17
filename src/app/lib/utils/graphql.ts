export const getAuthContext = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${'asasas'}`,
    },
  };
};
