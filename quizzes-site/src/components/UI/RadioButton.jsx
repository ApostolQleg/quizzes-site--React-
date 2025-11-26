export default function RadioButton({ label, ...props }) {
	return (
		<>
			<input type="radio" {...props} />
			<label className={"radio-label"} htmlFor={props.id}>
				{label}
			</label>
		</>
	);
}
