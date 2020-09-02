import React, { useState } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const VisibleCountUp = ({ end, decimals, duration, suffix }) => {
    const [visible, setVisible] = useState(false)

    return (
        <CountUp start={visible ? null : 0} end={end} decimals={decimals} duration={duration} suffix={suffix}>
            {({ countUpRef }) => {
                return (
                    <VisibilitySensor
                        active={!visible}
                        onChange={isVisible => {
                            if (isVisible) {
                                setVisible(true)
                            }
                        }}
                        delayedCall
                    >
                        <span ref={countUpRef}></span>
                    </VisibilitySensor>
                )
            }}
        </CountUp>
    )
}

export default VisibleCountUp