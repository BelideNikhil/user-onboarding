export default function PlanLabel({ icon, title, text, selected }) {
    return (
        <label className={`plan-label ${selected}`}>
            <div>
                <span className="material-icons">{icon}</span>
            </div>
            <h4>{title}</h4>
            <p>{text}</p>
            <input type="radio" name="plan" />
        </label>
    );
}
