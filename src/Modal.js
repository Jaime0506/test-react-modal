import React from 'react'

export default function Modal({ isOpen, children }) {

    return (
        <div className={'container-modal ' + (isOpen ? 'isVisible' : 'notVisible')}>
            { children }
        </div>
    )
}
