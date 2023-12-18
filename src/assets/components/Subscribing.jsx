export default function Subscribing({ email }) {

    return (
        <div className="subscribingPage">
            <img src="images/largeCheck.svg" alt="Large Check Icon" />
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <b>{email}</b>.Please open it and click the button inside to confirm your subscription.</p>
            <button onClick={() => setFormSubmit(false)}>Dismiss message</button>
        </div>
    )
}