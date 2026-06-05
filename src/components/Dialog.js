function Dialog(props) {
    return (
        <div className="dialog-overlay">
            <div className="dialog-box">
                <h2>React Rating System</h2>

                <p>
                    Built using React components, props, and the useState hook.
                </p>

                <button onClick={props.closeDialog}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default Dialog;