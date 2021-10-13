import { routes } from 'configs';
import { ObjectValues } from './utils';
import { TokenType, WindDirection } from './enums';

export interface TokenData {
  access_token: string;
  expires_in: number;
  token_type: TokenType;
}

export type Color = `#${string}`;

export type PaletteItem = Partial<
  Record<'main' | 'contrastText' | 'dark' | 'light', Color>
>;

export interface HeaderLink {
  path: ObjectValues<typeof routes>;
  exact?: boolean;
  text: string;
  title: string;
  descendants?: ObjectValues<typeof routes>[];
}

export interface Forecast {
  time: Date;
  symbol: string;
  temperature: number;
  feelsLikeTemp: number;
  windDir: number;
  windGust: number;
  windSpeed: number;
  windDirString: WindDirection;
  precipProb: number;
  precipRate: number;
}

export interface Weather {
  time: Date;
  symbol: string;
  symbolPhrase: string;
  temperature: number;
  feelsLikeTemp: number;
  relHumidity: number;
  dewPoint: number;
  windSpeed: number;
  windDirString: WindDirection;
  windGust: number;
  precipProb: number;
  precipRate: number;
  cloudiness: number;
  thunderProb: number;
  uvIndex: number;
  pressure: number;
  visibility: number;
}
