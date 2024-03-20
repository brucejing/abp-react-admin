import moment from 'moment-timezone';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import utils from './lib/utils';
import abpUserConfigurationService from './services/abpUserConfigurationService';

declare let abp: any;

utils.setLocalization();

abpUserConfigurationService.getAll().then((data) => {
  utils.extend(true, abp, data.data.result);
  abp.clock.provider = utils.getCurrentClockProvider(data.data.result.clock.provider);

  moment.locale(abp.localization.currentLanguage.name);

  if (abp.clock.provider.supportsMultipleTimezone) {
    moment.tz.setDefault(abp.timing.timeZoneInfo.iana.timeZoneId);
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
