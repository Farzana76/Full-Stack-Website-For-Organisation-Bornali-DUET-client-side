import React from 'react';
import YouTubeSubscribe from './YoutubeSubscribe';


const Youtube = () => {
    let channelid = "UCvoGV5SFuLsmZ9nURSrJKmg";

    return (
        <div>
            <section className="c-share">
                <YouTubeSubscribe
                // channelName={channelName}
                channelid={channelid}
                theme={"default"}
                layout={"full"}
                count={"default"}
                />
            </section>
        </div>
    );
};

export default Youtube;