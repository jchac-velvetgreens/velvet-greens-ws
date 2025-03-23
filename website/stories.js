const stories = document.querySelectorAll('.story');
const modal = document.getElementById('storyModal');
const videoPlayer = document.getElementById('storyVideo');

stories.forEach(story => {
    story.addEventListener('click', () => {
        const videoSrc = story.getAttribute('data-video');
        videoPlayer.src = videoSrc;
        modal.style.display = 'flex';
    });
});

function closeStory() {
    modal.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}
