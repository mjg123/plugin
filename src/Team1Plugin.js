import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';
import LionbridgeInterpreter  from './components/LionbridgeInterpreter/LionbridgeInterpreter';
import reducers, { namespace } from './states';

const PLUGIN_NAME = 'Team1Plugin';

export default class Team1Plugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    this.registerReducers(manager);

    const options = { sortOrder: -1 };
    /*
    flex.AgentDesktopView
      .Panel1
      .Content
      .add(<CustomTaskListContainer key="demo-component" />, options);
    */

    flex.Actions.addListener("afterSelectTask", (payload) => {
      if(payload.task && payload.task.channelType) {
        console.log(
          "%cAfterSelectTask!",
          "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
        );
        const channelType = payload.task.channelType;
        const attributes = payload.task.attributes;
  
        if(channelType === 'voice') {
          console.log(`attributes: ${JSON.stringify(attributes)}`);
          if(attributes.conference && attributes.conference.sid) {
            const conferenceSID = attributes.conference.sid;
            console.log(`conferenceSID ${conferenceSID}`);
            flex.TaskCanvasHeader
            .Content
            .add(<LionbridgeInterpreter key="demo-component-1" conferenceSID={conferenceSID}/>, options);
          }
        }
      }
    });
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
