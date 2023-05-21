const scanf = require('scanf');

/*
    N -> Number of cities
    R -> Number of roads
    H -> The minimum amount of time (hr) that must pass before Alice considers visiting a city again
    M -> The maximum duration (hr) of the road trip
    S -> The number of starting city of this road trip
*/
let [N, R, H, M, S] = scanf('%d %d %d %d %d');

/*
    cities[i].i -> The number of the city
    cities[i].s -> The name of the city
    cities[i].t -> The time (hr) required to visit that city
    cities[i].v -> The last time we visited that city
*/
let cities = [];
for (let i = 0; i < N; i++) {
    cities[i] = {};
    for (let j = 0; j < 4; j++) {
        switch (j) {
            case 0:
                cities[i].i = scanf('%d');
                break;
            case 1:
                cities[i].s = scanf('%s');
                break;
            case 2:
                cities[i].t = scanf('%d');
                break;
            case 3:
                cities[i].v = -1;
                break;
        }
    }
}

/*
    roads[i].c_from -> The number of starting city
    roads[i].c_to   -> The number of destination city
    roads[i].d      -> The time (hr) required to drive from c_from to c_to
*/
let roads = [];
for (let i = 0; i < R; i++) {
    roads[i] = {};
    for (let j = 0; j < 3; j++) {
        switch (j) {
            case 0:
                roads[i].c_from = scanf('%d');
                break;
            case 1:
                roads[i].c_to = scanf('%d');
                break;
            case 2:
                roads[i].d = scanf('%d');
                break;
        }
    }
}


let C_trip = [cities[S].s];
let C_now = S;
let T_now = 0;

do {
    cities[C_now].v = cities[C_now].t + T_now;
    T_now = cities[C_now].v;

    //filter out road that not connect to this city
    let road_options = [];
    road_options = roads.filter((road) => road.c_from == cities[C_now].i || road.c_to == cities[C_now].i);
    road_options = road_options.map((road) => {
        if (road.c_from == cities[C_now].i) {
            return { c_dest: road.c_to, d: road.d };
        } else {
            return { c_dest: road.c_from, d: road.d };
        }
    });

    //Rule #2: filter out road to recently visited city
    road_options = road_options.filter((road) => {
        if (cities[road.c_dest].v != -1) {
            return T_now + road.d - cities[road.c_dest].v >= H;
        } else {
            return true;
        }
    });

    //Rule #3: filter out road to city that exceed trip duration
    road_options = road_options.filter((road) => T_now + road.d + cities[road.c_dest].t <= M);

    if (road_options.length > 0) {
        //Rule #1: filter out longer duration road
        road_options.sort((road_a, road_b) => road_a.d - road_b.d);
        let shortest_d = road_options[0].d;
        road_options = road_options.filter((road) => road.d == shortest_d);

        //sort and choose city with lowest number
        road_options.sort((road_a, road_b) => road_a.c_dest - road_b.c_dest);

        C_trip.push(cities[road_options[0].c_dest].s);
        C_now = road_options[0].c_dest;
        T_now = T_now + road_options[0].d;
    } else {
        break;
    }
} while (true);

console.log("C_trip: ", C_trip.toString().replace(/,/g, " "));
console.log("T: ", T_now);