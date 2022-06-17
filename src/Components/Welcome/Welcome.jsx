import { Header, Input } from "../index";

export default function Welcome() {
    return (
        <>
            <Header headerText="Welcome! First things first..." subText="You can always change them later." />
            <div className="input-wrapper">
                <Input content="Full Name" type="text" placeholder="Steve Jobs" />
                <Input content="Display Name" type="text" placeholder="Steve" />
            </div>
        </>
    );
}
