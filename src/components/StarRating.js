import { useState } from 'react';
import Star from './Star';

function StarRating() {

    const [rating, setRating] = useState(0);
//Array of Rating descriptions
    const ratings = [
        '',
        'Poor',
        'Fair',
        'Good',
        'Very Good',
        'Excellent'
    ];

    return (
        <section>
            <div>
                {[1, 2, 3, 4, 5].map(star => (
                    <Star
                        key={star}
                        onClick={() => setRating(star)}
                        color={star <= rating ? '#ffd700' : '#555'}
                    />
                ))}
            </div>

            <h2>{ratings[rating]}</h2>
        </section>
    );
}

export default StarRating;