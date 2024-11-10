import React from 'react';
// Data
import { categories } from '../../helpers/usedData';
// Components
import ServiceBigCard from '../shared/ServiceBigCard';


export default function ServicesBigCardsSection() {
    return (
        <section className='relative w-full px-4 lg:px-32 grid grid-cols-2 lg:grid-cols-5 justify-center items-center gap-4 mt-16 lg:mt-48 mb-14 lg:mb-20' id='services-big-section'>
            {/* Card */}
            {/* We can make this card component reusable by creating a separate component for it but because this is a simple component and because we don't know if we will need it in other places or not so we can just make it here. */}
            {categories.map((category, index) => (
                <ServiceBigCard category={category} index={index} />
            ))}
        </section>
    );
}