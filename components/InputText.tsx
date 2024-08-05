export default function Input(props: any) {
  return (
    <div className="flex flex-col justify-between gap-3">
      <label>{props.label}</label>
      <input
        className="rounded-md border"
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}
