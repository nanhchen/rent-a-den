const Login = () => {
  return (
    <div>
      <p className="font-bold text-xl">SIGN IN</p>
      <input placeholder="Username" className="underline" />
      <input placeholder="Password" className="underline" />
      <p>
        Don't have an account? <span>Register here</span>
      </p>
    </div>
  );
};

export default Login;
