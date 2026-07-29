export interface City {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  county: string;
  zipCodes: string[];
  /** Slugs of nearby cities (must exist in this file) */
  nearbyCities: string[];
  localDescription: string;
  coordinates: { lat: number; lng: number };
  population: string;
  /** Local landmarks / neighborhoods used to make copy locally specific */
  localHighlights: string[];
  /** Typical housing stock note, used for locally relevant copy */
  housingNote: string;
}

export const cities: City[] = [
  {
    slug: "denton-tx",
    city: "Denton",
    state: "Texas",
    stateAbbr: "TX",
    county: "Denton County",
    zipCodes: ["76201", "76205", "76207", "76208", "76209", "76210"],
    nearbyCities: ["argyle-tx", "justin-tx", "flower-mound-tx", "roanoke-tx"],
    localDescription:
      "Home to two universities and one of the liveliest downtown squares in North Texas, Denton blends historic craftsman homes near the square with fast-growing master-planned communities to the south.",
    coordinates: { lat: 33.2148, lng: -97.1331 },
    population: "150,000+",
    localHighlights: [
      "the Denton Square",
      "University of North Texas area",
      "Robson Ranch",
      "Southridge",
    ],
    housingNote:
      "a mix of historic homes near downtown that often need careful updates and newer builds south of Loop 288",
  },
  {
    slug: "haslet-tx",
    city: "Haslet",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76052"],
    nearbyCities: ["fort-worth-tx", "keller-tx", "justin-tx", "watauga-tx"],
    localDescription:
      "A fast-growing community on the north edge of Fort Worth, Haslet pairs small-town feel with brand-new neighborhoods, larger lots, and easy access to the Alliance corridor.",
    coordinates: { lat: 32.9746, lng: -97.3478 },
    population: "3,500+",
    localHighlights: [
      "Sendera Ranch",
      "the Alliance corridor",
      "Avondale",
      "Willow Springs",
    ],
    housingNote:
      "newer construction on generous lots, where owners often upgrade builder-grade finishes",
  },
  {
    slug: "keller-tx",
    city: "Keller",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76244", "76248"],
    nearbyCities: [
      "southlake-tx",
      "watauga-tx",
      "north-richland-hills-tx",
      "haslet-tx",
    ],
    localDescription:
      "Consistently ranked among the best places to live in Texas, Keller features established upscale neighborhoods, top-rated schools, and homeowners who invest seriously in their properties.",
    coordinates: { lat: 32.9346, lng: -97.2517 },
    population: "45,000+",
    localHighlights: [
      "Old Town Keller",
      "Hidden Lakes",
      "Marshall Ridge",
      "the Keller Town Center",
    ],
    housingNote:
      "established 1990s–2000s homes where kitchens and primary baths are prime candidates for modernization",
  },
  {
    slug: "roanoke-tx",
    city: "Roanoke",
    state: "Texas",
    stateAbbr: "TX",
    county: "Denton County",
    zipCodes: ["76262"],
    nearbyCities: ["justin-tx", "keller-tx", "southlake-tx", "haslet-tx"],
    localDescription:
      "Known as the 'Unique Dining Capital of Texas,' Roanoke's charming Oak Street anchors a growing community of newer neighborhoods and families upgrading their first move-up homes.",
    coordinates: { lat: 33.0043, lng: -97.2258 },
    population: "10,000+",
    localHighlights: [
      "Oak Street",
      "Fairway Ranch",
      "Highlands Glen",
      "the Trophy Club border",
    ],
    housingNote:
      "newer family homes where owners personalize open-concept spaces and outdoor living areas",
  },
  {
    slug: "watauga-tx",
    city: "Watauga",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76137", "76148"],
    nearbyCities: [
      "north-richland-hills-tx",
      "keller-tx",
      "haltom-city-tx",
      "fort-worth-tx",
    ],
    localDescription:
      "A close-knit, affordable community in northeast Tarrant County, Watauga is full of solid 1970s–90s homes that reward smart, value-focused renovations.",
    coordinates: { lat: 32.8579, lng: -97.2547 },
    population: "23,000+",
    localHighlights: [
      "Capp Smith Park",
      "the Whitley Road corridor",
      "Parkview",
      "Summerfields",
    ],
    housingNote:
      "well-built 1970s–90s ranch homes where updated kitchens, baths, and flooring dramatically boost value",
  },
  {
    slug: "mesquite-tx",
    city: "Mesquite",
    state: "Texas",
    stateAbbr: "TX",
    county: "Dallas County",
    zipCodes: ["75149", "75150", "75181", "75185"],
    nearbyCities: ["grand-prairie-tx", "arlington-tx"],
    localDescription:
      "The official 'Rodeo Capital of Texas' on Dallas's eastern edge, Mesquite offers established neighborhoods with real character — and thousands of homes ready for modern updates.",
    coordinates: { lat: 32.7668, lng: -96.5992 },
    population: "150,000+",
    localHighlights: [
      "the Mesquite Rodeo",
      "Town East",
      "Creek Crossing",
      "Falcon's Lair",
    ],
    housingNote:
      "established brick homes from the 1970s–2000s, ideal candidates for kitchen, bath, and flooring updates",
  },
  {
    slug: "arlington-tx",
    city: "Arlington",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76001", "76002", "76006", "76010", "76012", "76013", "76015", "76016", "76017", "76018"],
    nearbyCities: ["grand-prairie-tx", "fort-worth-tx", "mesquite-tx"],
    localDescription:
      "Home of the Cowboys, the Rangers, and nearly 400,000 residents, Arlington spans everything from mid-century neighborhoods near UTA to newer communities in the south — all squarely in our service area.",
    coordinates: { lat: 32.7357, lng: -97.1081 },
    population: "395,000+",
    localHighlights: [
      "the Entertainment District",
      "Dalworthington Gardens area",
      "South Arlington",
      "the UTA district",
    ],
    housingNote:
      "an enormous range, from 1950s cottages to 2010s builds — each needing a different remodeling approach",
  },
  {
    slug: "grapevine-tx",
    city: "Grapevine",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76051", "76092"],
    nearbyCities: ["colleyville-tx", "southlake-tx", "flower-mound-tx", "keller-tx"],
    localDescription:
      "With its historic Main Street, lakeside living, and prime location beside DFW Airport, Grapevine mixes charming older homes with high-value properties that deserve quality craftsmanship.",
    coordinates: { lat: 32.9343, lng: -97.0781 },
    population: "50,000+",
    localHighlights: [
      "Historic Main Street",
      "Grapevine Lake",
      "the Vineyard district",
      "Silver Lake",
    ],
    housingNote:
      "character-rich older homes near Main Street and lakeside properties where quality finishes matter",
  },
  {
    slug: "fort-worth-tx",
    city: "Fort Worth",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76102", "76104", "76107", "76109", "76110", "76116", "76132", "76133", "76137", "76179", "76244"],
    nearbyCities: [
      "haltom-city-tx",
      "watauga-tx",
      "lake-worth-tx",
      "haslet-tx",
      "arlington-tx",
    ],
    localDescription:
      "From historic Fairmount bungalows to Alliance-area new builds, Fort Worth is our home base — we've remodeled hundreds of homes across Cowtown's wonderfully varied neighborhoods.",
    coordinates: { lat: 32.7555, lng: -97.3308 },
    population: "960,000+",
    localHighlights: [
      "Fairmount",
      "the Cultural District",
      "TCU area",
      "Alliance",
      "Tanglewood",
    ],
    housingNote:
      "everything from 1920s bungalows requiring careful renovation to modern builds needing custom upgrades",
  },
  {
    slug: "lake-worth-tx",
    city: "Lake Worth",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76135"],
    nearbyCities: ["fort-worth-tx", "springtown-tx", "haslet-tx"],
    localDescription:
      "A lakeside community northwest of Fort Worth, Lake Worth combines affordable established neighborhoods with waterfront properties along its namesake lake.",
    coordinates: { lat: 32.8046, lng: -97.4453 },
    population: "4,900+",
    localHighlights: [
      "Lake Worth shoreline",
      "the Jacksboro Highway corridor",
      "Indian Oaks",
      "Marine Creek area",
    ],
    housingNote:
      "lakeside properties and established homes where smart updates deliver strong returns",
  },
  {
    slug: "haltom-city-tx",
    city: "Haltom City",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76117", "76137"],
    nearbyCities: [
      "watauga-tx",
      "north-richland-hills-tx",
      "fort-worth-tx",
    ],
    localDescription:
      "One of northeast Tarrant County's most established communities, Haltom City is full of sturdy mid-century homes where thoughtful remodeling goes a long way.",
    coordinates: { lat: 32.7996, lng: -97.2692 },
    population: "46,000+",
    localHighlights: [
      "the Broadway Avenue corridor",
      "Buffalo Ridge",
      "Little Fossil Park area",
      "North Haltom",
    ],
    housingNote:
      "solid mid-century homes with great bones, perfect for kitchen, bath, and flooring transformations",
  },
  {
    slug: "argyle-tx",
    city: "Argyle",
    state: "Texas",
    stateAbbr: "TX",
    county: "Denton County",
    zipCodes: ["76226"],
    nearbyCities: ["denton-tx", "flower-mound-tx", "justin-tx", "roanoke-tx"],
    localDescription:
      "Rolling pastures, acre lots, and upscale new construction define Argyle — a community where homeowners expect craftsmanship that matches their investment.",
    coordinates: { lat: 33.1212, lng: -97.1834 },
    population: "5,500+",
    localHighlights: [
      "Harvest",
      "Canyon Falls",
      "the 5T Ranch area",
      "Old Town Argyle",
    ],
    housingNote:
      "custom and semi-custom homes on large lots where premium finishes and quality work are the standard",
  },
  {
    slug: "flower-mound-tx",
    city: "Flower Mound",
    state: "Texas",
    stateAbbr: "TX",
    county: "Denton County",
    zipCodes: ["75022", "75028", "75077"],
    nearbyCities: ["grapevine-tx", "argyle-tx", "denton-tx", "southlake-tx"],
    localDescription:
      "A premier Denton County suburb between Grapevine Lake and Lewisville Lake, Flower Mound features meticulously kept neighborhoods where 1990s–2000s homes are entering prime remodeling years.",
    coordinates: { lat: 33.0146, lng: -97.0969 },
    population: "78,000+",
    localHighlights: [
      "Bridlewood",
      "Wellington",
      "the River Walk",
      "Lakeside DFW",
    ],
    housingNote:
      "well-maintained 1990s–2000s homes where kitchens and primary suites are ready for modern refreshes",
  },
  {
    slug: "justin-tx",
    city: "Justin",
    state: "Texas",
    stateAbbr: "TX",
    county: "Denton County",
    zipCodes: ["76247"],
    nearbyCities: ["haslet-tx", "roanoke-tx", "argyle-tx", "denton-tx"],
    localDescription:
      "A small town with big growth, Justin holds onto its western heritage while welcoming new neighborhoods — and homeowners who want quality work without big-city hassle.",
    coordinates: { lat: 33.0848, lng: -97.2961 },
    population: "5,800+",
    localHighlights: [
      "Old Town Justin",
      "Timberbrook",
      "Justin Crossing",
      "the FM 407 corridor",
    ],
    housingNote:
      "a blend of older farmhouse-style properties and brand-new subdivisions, each with distinct remodeling needs",
  },
  {
    slug: "decatur-tx",
    city: "Decatur",
    state: "Texas",
    stateAbbr: "TX",
    county: "Wise County",
    zipCodes: ["76234"],
    nearbyCities: ["springtown-tx", "justin-tx", "denton-tx"],
    localDescription:
      "The Wise County seat with a beautiful historic courthouse square, Decatur mixes century-old homes, ranch properties, and new construction on the growing edge of the Metroplex.",
    coordinates: { lat: 33.2343, lng: -97.5861 },
    population: "7,000+",
    localHighlights: [
      "the Courthouse Square",
      "the Highway 380 corridor",
      "Sunset Oaks",
      "rural Wise County ranches",
    ],
    housingNote:
      "historic homes near the square and ranch properties that call for versatile, experienced crews",
  },
  {
    slug: "grand-prairie-tx",
    city: "Grand Prairie",
    state: "Texas",
    stateAbbr: "TX",
    county: "Dallas County",
    zipCodes: ["75050", "75051", "75052", "75054", "75104"],
    nearbyCities: ["arlington-tx", "mesquite-tx", "fort-worth-tx"],
    localDescription:
      "Stretching from I-30 south to Joe Pool Lake, Grand Prairie covers established mid-city neighborhoods and booming lakeside communities alike — nearly 200,000 residents strong.",
    coordinates: { lat: 32.746, lng: -96.9978 },
    population: "200,000+",
    localHighlights: [
      "Joe Pool Lake",
      "EpicCentral",
      "Westchester",
      "Mira Lagos",
    ],
    housingNote:
      "everything from 1960s mid-city homes to newer lakeside builds near Joe Pool Lake",
  },
  {
    slug: "southlake-tx",
    city: "Southlake",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76092"],
    nearbyCities: ["keller-tx", "grapevine-tx", "colleyville-tx", "roanoke-tx"],
    localDescription:
      "One of DFW's most prestigious addresses, Southlake is defined by luxury custom homes, Town Square, and homeowners who expect — and receive — white-glove remodeling service.",
    coordinates: { lat: 32.9412, lng: -97.1342 },
    population: "31,000+",
    localHighlights: [
      "Southlake Town Square",
      "Timarron",
      "Carillon",
      "the Monticello area",
    ],
    housingNote:
      "luxury custom homes where premium materials, precise craftsmanship, and discretion are non-negotiable",
  },
  {
    slug: "springtown-tx",
    city: "Springtown",
    state: "Texas",
    stateAbbr: "TX",
    county: "Parker County",
    zipCodes: ["76082"],
    nearbyCities: ["lake-worth-tx", "decatur-tx", "fort-worth-tx"],
    localDescription:
      "A Parker County town with genuine country character, Springtown serves families on acreage and in town alike — folks who value straight talk and honest workmanship.",
    coordinates: { lat: 32.9662, lng: -97.6836 },
    population: "3,200+",
    localHighlights: [
      "the Springtown Square",
      "Highway 199 corridor",
      "rural Parker County acreage",
      "Pojo country",
    ],
    housingNote:
      "farmhouses, manufactured homes, and in-town properties — we bring the same quality to all of them",
  },
  {
    slug: "colleyville-tx",
    city: "Colleyville",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76034"],
    nearbyCities: [
      "grapevine-tx",
      "southlake-tx",
      "keller-tx",
      "north-richland-hills-tx",
    ],
    localDescription:
      "An affluent, tree-lined community in the heart of northeast Tarrant County, Colleyville features estate properties and executive homes where quality remodeling protects serious investments.",
    coordinates: { lat: 32.8807, lng: -97.155 },
    population: "26,000+",
    localHighlights: [
      "Colleyville Boulevard",
      "Whittier Heights",
      "Remington Park",
      "the Pleasant Run corridor",
    ],
    housingNote:
      "executive and estate homes from the 1980s–2000s entering their prime renovation window",
  },
  {
    slug: "north-richland-hills-tx",
    city: "North Richland Hills",
    state: "Texas",
    stateAbbr: "TX",
    county: "Tarrant County",
    zipCodes: ["76180", "76182"],
    nearbyCities: [
      "watauga-tx",
      "keller-tx",
      "haltom-city-tx",
      "colleyville-tx",
    ],
    localDescription:
      "The third-largest city in Tarrant County, North Richland Hills offers established neighborhoods, strong schools, and tens of thousands of homes in their ideal remodeling years.",
    coordinates: { lat: 32.8343, lng: -97.2289 },
    population: "70,000+",
    localHighlights: [
      "Iron Horse",
      "Hometown NRH",
      "the Davis Boulevard corridor",
      "Smithfield",
    ],
    housingNote:
      "established 1980s–2000s neighborhoods where kitchens, baths, and floors are top remodeling priorities",
  },
];

export const getCity = (slug: string): City | undefined =>
  cities.find((c) => c.slug === slug);

export const citySlugs = cities.map((c) => c.slug);
