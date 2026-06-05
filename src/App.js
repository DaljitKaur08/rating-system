import { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';

function App() {
//useState
    const [isOpen, setOpen] = useState(false);
// Event handler to open and to close the dailog 
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