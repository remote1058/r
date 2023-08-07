radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    if (receivedString == "F") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 14)
    } else if (receivedString == "L") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 14)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 14)
    } else if (receivedString == "R") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 14)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 14)
    } else if (receivedString == "S") {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
radio.setGroup(1)
