function Dialog(props) {
    return (
        <div className="dialog-overlay">
            <div className="dialog-box">
                <h2>Dialog Box</h2>

                <p>
                    This is a dialog box component.
                </p>

                <button onClick={props.closeDialog}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default Dialog;