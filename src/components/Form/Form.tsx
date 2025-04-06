import { useForm, SubmitHandler } from "react-hook-form";
import "./Form.css";
import { useNavigate } from "react-router-dom";

type Inputs = {
  userName: string;
  password: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = (data) => navigate("/products");

  //   console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className="input-container">
        <label className="form-label">User Name:</label>
        <input
          className="form-input"
          {...register("userName", { required: true })}
        />
      </div>
      {errors.userName && <span>User Name is admin</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <div className="input-container">
        <label className="form-label">Password:</label>
        <input
          className="form-input"
          type="password"
          {...register("password", { required: true })}
        />
      </div>

      {/* errors will return when field validation fails  */}
      {errors.password && <span>Password is admin</span>}

      <input type="submit" value="Login" />
    </form>
  );
};

export default Form;
