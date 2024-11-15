import React from 'react';
// Data
import { services } from '../../helpers/usedData';
import ServiceCard from '../shared/ServiceCard';

export default function ServicesCardsSection() {

    return (
        <section className='relative w-full flex overflow-x-auto lg:grid lg:grid-cols-10 px-4 lg:px-32 justify-start lg:justify-center items-center gap-4 pb-10 lg:pb-0' id='services-section'>
            {/* Card */}
            {/* We can make this card component reusable by creating a separate component for it but because this is a simple component and because we don't know if we will need it in other places or not so we can just make it here. */}
            {services.map((category, index) => (
                <ServiceCard category={category} index={index} />
            ))}
        </section>
    );
}