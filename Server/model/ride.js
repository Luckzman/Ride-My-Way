const rides = [
    {
        id: 1,
        name: 'Abiodun J.',
        source: 'Mowe',
        destination: 'Oshodi',
        departure_time: '8:30',
        car: 'Toyota Camry',
        available_seats: 3,
        cost: 800,
        ride_request: [
            {
                id: 1,
                name: 'Tony D',
                phone: '07034333484',
                comment: 'Any space for luggage'
            },
            {
                id: 2,
                name: 'Goodness A',
                phone: '080343332344',
                comment: 'is AC available'
            }
        ]
    },
    {
        id: 2,
        name: 'jeremiah E.',
        source: 'Ikorodu',
        destination: 'Lekki',
        departure_time: '10:30',
        car: 'Kia Rio',
        Available_seats: 4,
        cost: 1200,
        ride_request: [
            {
                id: 3,
                name: 'Florence Amadi',
                phone: '07034333484'
            }
        ]
    },
    {
        id: 3,
        name: 'Kayode O.',
        source: 'ketu',
        destination: 'Epe',
        departure_time: '7:00',
        car: 'Honda civic',
        available_seats: 2,
        cost: 1000,
        ride_request: [
            {
                id: 4,
                name: 'Tony D',
                phone: '07034333484'
            }
        ]
    }
]

export default rides;