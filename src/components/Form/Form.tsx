import { useForm, SubmitHandler } from "react-hook-form";
import "./Form.css";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log({ errors });

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className="input-container">
        <label className="form-label">First Name</label>
        <input
          className="form-input"
          defaultValue="test"
          {...register("example")}
        />
      </div>

      {/* include validation with required or other standard HTML validation rules */}
      <div className="input-container">
        <label className="form-label">Last Name</label>
        <input
          className="form-input"
          {...register("exampleRequired", { required: true })}
        />
      </div>

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default Form;
