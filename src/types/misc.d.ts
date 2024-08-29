export interface IProject {
    name:           string;
    description:    React.JSX.Element;
    url:            string;
    active:         boolean;
    git?:           string;
    outbound?:      boolean;
};
