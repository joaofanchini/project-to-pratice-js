'use strict';

var frames = ['frame1', 'frame2', 'frame3', 'frame4', 'frame5', 'frame6', 'frame7', 'frame8', 'frame9']

class Sprite {

    __currentSelectorFrames;
    __$elementSprite;
    __lastCurrentSelectorFrames;

    constructor(elementSprite) {
        this.__$elementSprite = elementSprite;
    }

    nextFrame() {
        if (this.__currentSelectorFrames == undefined) {
            this.__currentSelectorFrames = 0;
            this.__$elementSprite.addClass(frames[this.__currentSelectorFrames]);

        } else {
            this.__lastCurrentSelectorFrames = this.__currentSelectorFrames;

            if (this.__currentSelectorFrames + 1 < frames.length)
                this.__currentSelectorFrames += 1;
            else
                this.__currentSelectorFrames = 0;

            this.__$elementSprite.removeClass(frames[this.__lastCurrentSelectorFrames])
                .addClass(frames[this.__currentSelectorFrames]);

        }
    }
}


function createSprite(selectorSprite) {
    return new Sprite($(selectorSprite));
}



