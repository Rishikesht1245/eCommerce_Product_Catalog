import { Field, ErrorMessage } from "formik";

function CheckBox({ name, placeholder, className }: Props) {
  return (
    <div className={`${className}`}>
      <label
        htmlFor={name}
        className="text-sm font-bold flex gap-2 items-center mb-1 ml-1 tracking-widest text-slate-700 whitespace-nowrap"
      >
        <Field
          className="rounded-lg p-3 shadow-sm focus:outline-none w-full"
          id={name}
          name={name}
          placeholder={placeholder}
          type={"checkbox"}
        />
        {placeholder}
      </label>

      {/* Field is provided by Formik to represent input elements */}

      <span className="m-1 text-sm font-semibold text-red-600">
        <ErrorMessage name={name} />
      </span>
    </div>
  );
}

interface Props {
  name: string;
  placeholder: string;
  className?: string;
}

export default CheckBox;
