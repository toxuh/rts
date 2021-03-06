import { spawn } from 'redux-saga/effects';

import campaignsSagas from '../common/campaigns/saga';
import usersSagas from '../common/users/saga';
import videoSagas from '../common/video/saga';

export default function* rootSaga(): Generator {
  yield spawn(campaignsSagas);
  yield spawn(usersSagas);
  yield spawn(videoSagas);
}
