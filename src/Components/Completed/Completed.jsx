import { Header } from "../index";

export default function Completed() {
    return (
        <>
            <div className="icon icon-lg active mt-4">
                <span className="material-icons-outlined">done</span>
            </div>
            <Header
                headerText="Congratulations, Eren!"
                subText="You have completed onboarding, you can start using Eden!"
            />
        </>
    );
}
