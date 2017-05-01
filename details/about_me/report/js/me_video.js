/**
 * Created by husha_000 on 2017/4/29.
 */
var bv = new Bideo();
bv.init(
    {
        // Video element
        videoEl: document.querySelector('#background_video'),
        // Container element
        container: document.querySelector('body'),
        // Resize
        resize: true,
        autoplay: true,

        //isMobile: window.matchMedia('(max-width: 768px)').matches,
        //playButton: document.querySelector('#play'),
        //pauseButton: document.querySelector('#pause'),

        // Array of objects containing the src and type
        // of different video formats to add
        src: [
            {
                src: 'source/printYourGirl.mp4',
                type: 'video/mp4'
            }
        ],
        // What to do once video loads (initial frame)
        onLoad: function() {
            document.querySelector('#video_cover').style.display = 'none';
            document.querySelector('.row_first').style.marginTop= '830px';
        }
    }
);