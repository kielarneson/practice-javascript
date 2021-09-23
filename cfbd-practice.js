const players = [
  {
    id: "71458",
    athleteId: "4431274",
    recruitType: "HighSchool",
    year: 2021,
    ranking: 1,
    name: "Korey Foreman",
    school: "Centennial",
    committedTo: "USC",
    position: "SDE",
    height: 76,
    weight: 265,
    stars: 5,
    rating: 0.9994,
    city: "Corona",
    stateProvince: "CA",
    country: "USA",
    hometownInfo: { latitude: "33.8752945", longitude: "-117.5664449", fipsCode: "06065" },
  },
  {
    id: "71459",
    athleteId: "4431437",
    recruitType: "HighSchool",
    year: 2021,
    ranking: 2,
    name: "JC Latham",
    school: "IMG Academy",
    committedTo: "Alabama",
    position: "OT",
    height: 78,
    weight: 305,
    stars: 5,
    rating: 0.999,
    city: "Bradenton",
    stateProvince: "FL",
    country: "USA",
    hometownInfo: { latitude: "27.4989278", longitude: "-82.5748194", fipsCode: "12081" },
  },
  {
    id: "71460",
    athleteId: null,
    recruitType: "HighSchool",
    year: 2021,
    ranking: 3,
    name: "J.T. Tuimoloau",
    school: "Eastside Catholic",
    committedTo: null,
    position: "SDE",
    height: 76,
    weight: 277,
    stars: 5,
    rating: 0.999,
    city: "Sammamish",
    stateProvince: "WA",
    country: "USA",
    hometownInfo: { latitude: "47.6088445", longitude: "-122.0423067", fipsCode: "53033" },
  },
  {
    id: "71461",
    athleteId: "4431590",
    recruitType: "HighSchool",
    year: 2021,
    ranking: 4,
    name: "Jack Sawyer",
    school: "Pickerington North",
    committedTo: "Ohio State",
    position: "SDE",
    height: 77,
    weight: 248,
    stars: 5,
    rating: 0.998,
    city: "Pickerington",
    stateProvince: "OH",
    country: "USA",
    hometownInfo: { latitude: "39.896277299999994", longitude: "-82.77319049748806", fipsCode: "39045" },
  },
];

var feet;
var inches;

var specificPlayer = players
  .filter((player) => player["name"].toLowerCase() === "jack sawyer".toLowerCase())
  .map(function (player) {
    if (player["height"] > 72) {
      feet = 6;
      inches = player["height"] - 72;
    }
    return `${feet}', ${inches}"`;
  });
console.log(specificPlayer);
