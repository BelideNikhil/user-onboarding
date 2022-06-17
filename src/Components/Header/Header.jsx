import "./Header.css";
export default function Header({ headerText, subText }) {
    return (
        <div className="header-wrapper">
            <h1 className="txt-center">{headerText}</h1>
            <div className="header-subtitle txt-center">{subText}</div>
        </div>
    );
}
