import "./signin.css";

const SignUp = () => {
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
