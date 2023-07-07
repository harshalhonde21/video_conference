import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

function Room() {
  const { roomId } = useParams();

  const metting = async (element) => {
    const appID = 1346808813;
    const serverSecret = "9d954e43756a803e47de90f9c3ace3df";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString() ,'harshal'
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
        container : element,
        scenario :{
            mode : ZegoUIKitPrebuilt.VideoConference,
        }
    })
  };

  return <div className="room-page"><div ref={metting}/></div>;
}

export default Room;
