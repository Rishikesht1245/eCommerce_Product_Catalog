import { ErrorMessage, Field } from "formik";

const SelectInput = ({ name, options, className, label }: Props) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="text-sm font-bold tracking-widest text-slate-700 whitespace-nowrap"
      >
        {label} :
      </label>
      <div className={`flex flex-col`}>
        <Field
          as="select"
          name={name}
          id={name}
          className={`${className} text-slate-600 font-semibold rounded-md p-2 mt-2 ml-2 shadow focus:outline-none w-full text-sm`}
        >
          [
          {options?.map((option: Option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
          ]
        </Field>
        <span className="m-1 text-sm font-semibold text-red-800">
          <ErrorMessage name={name}></ErrorMessage>
        </span>
      </div>
    </div>
  );
};

interface Props {
  name: string;
  options: Option[];
  className?: string;
  label?: string;
}

type Option = { text: string; value: string };
export default SelectInput;
