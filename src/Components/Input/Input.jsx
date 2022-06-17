import "./Input.css";

export default function Input({ content, type, placeholder }) {
    return (
        <label className="user-label">
            <span>{content}</span>
            <div className="input-container">
                {type === "url" ? <div>www.eden.com/</div> : null}
                <input type={type} placeholder={placeholder} className="user-input" />
            </div>
        </label>
    );
}
