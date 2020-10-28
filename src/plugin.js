flex.Actions.addListener("afterAcceptTask", (payload) => {
  if(payload.task && payload.task.channelType) {
    console.log(
      "%cAfterAcceptTask!",
      "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
    const channelType = payload.task.channelType;
    const attributes = payload.task.attributes;

    if(channelType === 'voice') {
      const conferenceSID = payload.task.attributes.conference.sid;
      console.log(`conferenceSID ${conferenceSID}`);
    }
  }
});

flex.Actions.addListener("afterSelectTask", (payload) => {
  if(payload.task && payload.task.channelType) {
    console.log(
      "%cAfterSelectTask!",
      "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
    const channelType = payload.task.channelType;
    const attributes = payload.task.attributes;

    if(channelType === 'voice') {
      const conferenceSID = payload.task.attributes.conference.sid;
      console.log(`conferenceSID ${conferenceSID}`);
    }
  }
});