

module.exports = ManualAnimation;

function ManualAnimation(_params) {

    this.view = _params.view;
    this.filenames = _params.filenames;
    this.frameRate = _params.frameRate;
    this.finishedCallback = _params.finishedCallback;

    this.numberOfFrames = _params.filenames.length;
    this.currentFrameNumber = 1;
}

ManualAnimation.prototype.init = function () {
    this.stop();
    this.setFrame(1);
};

ManualAnimation.prototype.start = function () {
    this.stop();

    var frameInterval = 1000 / this.frameRate;
    this.setFrame(this.currentFrameNumber);
    var self = this;
    this.intervalID = setInterval(function () {
        self.currentFrameNumber++;
        if (self.currentFrameNumber <= self.numberOfFrames) self.setFrame(self.currentFrameNumber);else {
            self.currentFrameNumber = self.numberOfFrames;

            self.stop();
            if (self.finishedCallback) {
                self.finishedCallback();
            }
        }
    }, frameInterval);
};

ManualAnimation.prototype.stop = function () {
    if (this.intervalID) {
        clearInterval(this.intervalID);

        this.intervalID = null;
    }
};

ManualAnimation.prototype.seek = function (_frameNumber) {
    this.stop();
    this.setFrame(_frameNumber);
};

ManualAnimation.prototype.setFrame = function (_frameNumber) {
    this.currentFrameNumber = _frameNumber;
    switch (this.view.apiName) {
        case 'Ti.UI.ImageView':
            this.view.image = this.filenames[_frameNumber - 1];
            break;

        case 'Ti.UI.View':
            this.view.backgroundImage = this.filenames[_frameNumber - 1];
            break;
    }
};