export type SearchType = {
	setSearch: any;
	search: boolean;
};
type FormElements = HTMLFormControlsCollection & {
	location: HTMLInputElement;
};
export type FormElement = HTMLFormElement & {
	readonly elements: FormElements;
};
export type location = {
	title: string;
	woeid: string | number;

	[key: string]: string | number | any;
};
export type SearchFormProps = {
	closeContainer: () => void;
	location: string;

	setLocation: React.Dispatch<React.SetStateAction<string>>;
};
export type SearchProps = {
	setSearch: React.Dispatch<React.SetStateAction<boolean>>;
};
