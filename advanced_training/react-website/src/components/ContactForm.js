import React from 'react'
import Button from './Button'

export default function ContactForm() {
    return (
        <form>
            <div>
                <label>First Name *</label>
                <input type="text" placeholder='first name'/>

                <label>Last Name *</label>
                <input type="text" placeholder='last name'/>
            </div>

            <label>Email *</label>
            <input type="email" placeholder='last name'/>

            <label>Message *</label>
            <textarea rows={3}/>
            
            <Button
                classN="submit-btn"
                buttonText="Submit"
            />
        </form>
    )
}
