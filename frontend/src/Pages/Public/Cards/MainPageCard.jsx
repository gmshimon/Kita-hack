
import { useEffect, useState } from 'react';
import BiddingCard from './BiddingCard';


const MainPageCard = () => {

    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCard(data))
            .catch(error => console.error('Error fetching data:', error));

    }, []);



    return (

        <div>
            <h2 className="font-semibold text-4xl my-8 text-center">Current Bidding</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up">

                {
                    card.map(card => <BiddingCard key={card.id} card={card}></BiddingCard>)
                }

            </div>
        </div>
    );
};

export default MainPageCard;