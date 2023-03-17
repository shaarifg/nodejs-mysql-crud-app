import "./signin.css";
const SignIn = () => {
  return (
    <div className="container">
      <h1>Sign In</h1>
      <form action="post">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
};

export default SignIn;
