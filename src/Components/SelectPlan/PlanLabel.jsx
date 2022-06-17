export default function PlanLabel({ icon, title, text }) {
    return (
        <label className="plan-label active">
            <div>
                <span className="material-icons">{icon}</span>
            </div>
            <h4>{title}</h4>
            <p>{text}</p>
            <input type="radio" name="plan" />
        </label>
    );
}
