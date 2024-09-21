import clear from "./svg/clear-day.svg";
import clearNight from "./svg/clear-night.svg";
import overcast from "./svg/overcast-day.svg";
import overcastNight from "./svg/overcast-night.svg";
import partlyClouded from "./svg/partly-cloudy-day.svg";
import partlyCloudedNight from "./svg/partly-cloudy-night.svg";

import fog from "./svg/fog-day.svg";
import fogNight from "./svg/fog-night.svg";

import rimeFog from "./svg/fog.svg";

import drizzleLight from "./svg/partly-cloudy-day-drizzle.svg";
import drizzleModerate from "./svg/overcast-day-drizzle.svg";
import drizzleExtreme from "./svg/extreme-day-drizzle.svg";
import drizzleLightNight from "./svg/partly-cloudy-night-drizzle.svg";
import drizzleModerateNight from "./svg/overcast-night-drizzle.svg";
import drizzleExtremeNight from "./svg/extreme-night-drizzle.svg";

import drizzleFreezingLight from "./svg/overcast-drizzle.svg";
import drizzleFreezingDense from "./svg/extreme-drizzle.svg";

import rainLight from "./svg/partly-cloudy-day-rain.svg";
import rainModerate from "./svg/overcast-day-rain.svg";
import rainExtreme from "./svg/extreme-day-rain.svg";
import rainLightNight from "./svg/partly-cloudy-night-rain.svg";
import rainModerateNight from "./svg/overcast-night-rain.svg";
import rainExtremeNight from "./svg/extreme-night-rain.svg";

import rainFreeze from "./svg/rain.svg";
import rainFreezeHeavy from "./svg/extreme-rain.svg";

import snow from "./svg/partly-cloudy-day-snow.svg";
import snowModerate from "./svg/overcast-day-snow.svg";
import snowExtreme from "./svg/extreme-day-snow.svg";

import snowNight from "./svg/partly-cloudy-night-snow.svg";
import snowModerateNight from "./svg/overcast-night-snow.svg";
import snowExtremeNight from "./svg/extreme-night-snow.svg";

import snowGrain from "./svg/snowflake.svg";

import thunderstorms from "./svg/thunderstorms-day.svg";
import thunderstormsNight from "./svg/thunderstorms-night.svg";

import thunderstormsHailLight from "./svg/thunderstorms-day-rain.svg";
import thunderstormsHailHeavy from "./svg/thunderstorms-extreme-rain.svg";
import thunderstormsHailLightNight from "./svg/thunderstorms-night-rain.svg";
import thunderstormsHailHeavyNight from "./svg/thunderstorms-extreme-rain.svg";

export const wmoCodeAndSVG = {
  true: {
    0: clear,
    1: clear,
    2: partlyClouded,
    3: overcast,
    45: fog,
    48: rimeFog,
    51: drizzleLight,
    53: drizzleModerate,
    55: drizzleExtreme,
    56: drizzleFreezingLight,
    57: drizzleFreezingDense,
    61: rainLight,
    63: rainModerate,
    65: rainExtreme,
    66: rainFreeze,
    67: rainFreezeHeavy,
    71: snow,
    73: snowModerate,
    75: snowExtreme,
    77: snowGrain,
    80: rainLight,
    81: rainModerate,
    82: rainExtreme,
    85: snow,
    86: snowExtreme,
    95: thunderstorms,
    96: thunderstormsHailLight,
    99: thunderstormsHailHeavy,
  },
  false: {
    0: clearNight,
    1: clearNight,
    2: partlyCloudedNight,
    3: overcastNight,
    45: fogNight,
    48: rimeFog,
    51: drizzleLightNight,
    53: drizzleModerateNight,
    55: drizzleExtremeNight,
    56: drizzleFreezingLight,
    57: drizzleFreezingDense,
    61: rainLightNight,
    63: rainModerateNight,
    65: rainExtremeNight,
    66: rainFreeze,
    67: rainFreezeHeavy,
    71: snowNight,
    73: snowModerateNight,
    75: snowExtremeNight,
    77: snowGrain,
    80: rainLightNight,
    81: rainModerateNight,
    82: rainExtremeNight,
    85: snowNight,
    86: snowExtremeNight,
    95: thunderstormsNight,
    96: thunderstormsHailLightNight,
    99: thunderstormsHailHeavyNight,
  },
} as const;
