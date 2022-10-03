interface ShareStrategy {
    share();
}

class Txt implements ShareStrategy {
    constructor() { }
    public share() {
        return 'sharing via text';
    }
}

class Email implements ShareStrategy {
    constructor () { }
    public share() {
        return 'sharing via email';
    }
}

class PhoneCameraApp {
    take() { }
    edit() { }
    save() { }
    setShareStrategy(shareType: any) {
        return shareType;
    }
}

class BasicCameraApp extends PhoneCameraApp {
    edit() {
        console.log('BasicCameraApp: edit');
    }
}

class CameraPlusApp extends PhoneCameraApp {
    edit() {
        console.log('CameraPlusApp: edit');
    }
}

const cp = new CameraPlusApp();
cp.edit();
const shareStrategy: any = cp.setShareStrategy(Email);
const message = new shareStrategy().share();
console.log('share type message: ', new shareStrategy().share());
