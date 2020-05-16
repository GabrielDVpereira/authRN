export const authService = {
  signIn() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          token: "dkdhkddhkshkdsksd",
          user: {
            name: "Gabriel",
            email: "Gabriel@gmail.com",
          },
        });
      }, 2000);
    });
  },
};
