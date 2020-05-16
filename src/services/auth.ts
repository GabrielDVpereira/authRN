interface Response {
  token: string;
  user: object;
}

export const authService = {
  signIn(): Promise<Response> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          token: "kherbvnlkx232klvmcdlskvn43i43lvdf",
          user: {
            name: "Gabriel",
            email: "Gabriel@gmail.com",
          },
        });
      }, 2000);
    });
  },
};
