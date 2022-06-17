import { Header } from "../index";
import PlanLabel from "./PlanLabel";

export default function SelectPlan() {
    return (
        <>
            <Header headerText="How are you planning to use Eden?" subText="We'll streamline your setup accordingly." />
            <div className="plan-wrapper">
                <PlanLabel
                    icon={"person"}
                    title={"Myself"}
                    text={"Write better. Think more clearly. Stay organized."}
                    selected={"active"}
                />

                <PlanLabel
                    icon={"groups"}
                    title={"With my team"}
                    text={"Wikis, Docs, Tasks & Projects, all in one workspace."}
                    selected={""}
                />
            </div>
        </>
    );
}
