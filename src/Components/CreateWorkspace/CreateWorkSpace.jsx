import { Header, Input } from "../index";

export default function CreateWorkSpace() {
    return (
        <>
            <Header
                headerText="Let's setup a home for all your work"
                subText="You can always create a workspace later."
            />
            <div className="input-wrapper">
                <Input content="Workspace Name" type="text" placeholder="Eden" />
                <Input content="Workspace URL" type="url" placeholder="Example" />
            </div>
        </>
    );
}
