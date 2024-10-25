import React, { useState } from 'react';

export function NetflixRegister() {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <center>
            <div className="inputCon row">
                <p className="para1 text-white">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="col-md-7">
                    <input
                        type="email"
                        className="inputBar form-control text-white"
                        id="emailInput"
                        placeholder="Email address"
                        onFocus={() => setIsFocused(true)}
                    />
                </div>

                <div className="col-md-5">
                    <button className="inputBtn btn btn-danger btn-lg">
                        Get Started <span className="bi bi-chevron-right"></span>
                    </button>
                </div>
            </div>
        </center>
    );
}
