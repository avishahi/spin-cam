input.onButtonPressed(Button.A, function () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 30)
    basic.pause(100)
    ContinuousServo.turn_off_motor(DigitalPin.P0)
})
input.onButtonPressed(Button.B, function () {
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P0, 30)
    basic.pause(100)
    ContinuousServo.turn_off_motor(DigitalPin.P0)
})
