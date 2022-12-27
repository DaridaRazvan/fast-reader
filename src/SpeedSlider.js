const SpeedSlider = (props) => {
    return(
        <div>
            <input type="range" min={props.minSpeed} max={props.maxSpeed}
            value={props.sliderValue}
            onChange={(e) => props.changeSpeed(e.target.value)}/>
        </div>
    )
}

export default SpeedSlider;