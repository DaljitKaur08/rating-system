import { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';

function App() {

    const [isOpen, setOpen] = useState(false);

    function openDialog() {
        setOpen(true);
    }

    function closeDialog() {
        setOpen(false);
    }

    return (
        <div className="app">
            <StarRating />

            <button className="open-btn" onClick={openDialog}>
                Open Dialog
            </button>

            {isOpen ? (
                <Dialog closeDialog={closeDialog} />
            ) : null}
        </div>
    );
}

export default App;