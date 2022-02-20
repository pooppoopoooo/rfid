NFC.nfcEvent(function () {
    x = NFC.getUID()
    if (x == "3F271E40") {
        basic.showIcon(IconNames.Yes)
        radio.sendNumber(555)
    }
})
let x = ""
NFC.NFC_setSerial(SerialPin.P0, SerialPin.P1)
radio.setGroup(3)
