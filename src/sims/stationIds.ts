/** Tiny module so routing/home can know the experiment ids without loading the experiments themselves. */
export type StationId = 'pendulum' | 'torricelli' | 'bernoulli' | 'concave-mirror' | 'convex-mirror';
export const STATION_ORDER: StationId[] = ['pendulum', 'torricelli', 'bernoulli', 'concave-mirror', 'convex-mirror'];
export const isStationId = (x: string): x is StationId => (STATION_ORDER as string[]).includes(x);
