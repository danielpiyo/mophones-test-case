import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'co.mophones.app',
  appName: 'mophones',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
