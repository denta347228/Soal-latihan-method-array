const videoData = [{
        name: 'Miss Scarlet',
        present: true,
        rooms: {
            kitchen: false,
            ballroom: false,
            conservatory: false,
            'dining room': false,
            'billiard room': false,
            library: false
        }
    },
    {
        name: 'Rusty',
        present: false,
        rooms: {
            kitchen: false,
            ballroom: false,
            conservatory: false,
            'dining room': false,
            'billiard room': false,
            library: false
        }
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: {
            kitchen: false,
            ballroom: false,
            conservatory: false,
            'dining room': false,
            'billiard room': false,
            library: false
        }
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: {
            kitchen: false,
            ballroom: false,
            conservatory: false,
            'dining room': false,
            'billiard room': false,
            library: false
        }
    }
]

const undangan = videoData.filter(kehadiran => kehadiran.present === true);

console.log("tamu undangan hadir: " + undangan.length);

console.log("Detail orang yang hadir: ", undangan);