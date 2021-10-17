// A component which takes ina string
// and outputs it to the screen
interface IError {
	errormessage: string;
}
const ErrorComponent = ({ errormessage }: IError) => {
	return <div>{errormessage}</div>;
};

export default ErrorComponent;
