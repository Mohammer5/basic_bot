import { size } from 'lodash';
import { getMainConfig } from './webpack/mainConfig';
import { getServerConfig } from './webpack/getServerConfig';
import { getClientConfig } from './webpack/getClientConfig';

const COMPILE_SERVER_JS = true;
const COMPILE_BROWSER_JS = true;
const PROJECT_PATH = __dirname;
const SERVER_ENTRY_FILE_PATH = 'src/Index/Server';
const CLIENT_ENTRY_FILE_PATH = 'src/Index/Client';

const mainConfig = getMainConfig(PROJECT_PATH);
const serverConfig = getServerConfig(PROJECT_PATH, SERVER_ENTRY_FILE_PATH);
const clientConfig = getClientConfig(PROJECT_PATH, CLIENT_ENTRY_FILE_PATH);

const exportConfigs = [];

if (COMPILE_SERVER_JS && size(serverConfig.entry)) {
  exportConfigs.push({ ...mainConfig, ...serverConfig });
}

if (COMPILE_BROWSER_JS && size(clientConfig.entry)) {
  exportConfigs.push({ ...mainConfig, ...clientConfig });
}

// tslint:disable:no-default-export
export default exportConfigs;
