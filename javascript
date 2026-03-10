// Funky Bot heartbeat
const funkyBeats = ['https://youtu.be/funky1', 'https://youtu.be/funky2'];
if (message.content === '!funkytime') {
    const song = funkyBeats[Math.floor(Math.random() * funkyBeats.length)];
    // play song in voice channel
    message.channel.send("🎵 Get funky! Now playing: " + song);
}
