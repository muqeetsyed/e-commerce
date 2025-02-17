export const CreateUser = () => {
    return <div className="form-container">
        <h2>User Registration</h2>

        <form>
            <div className="form-group">
                <label>Name: </label>
                <input type="text" name="firstName" placeholder="first name"/>
                <input type="text" name="lastName" placeholder="last name"/>
            </div>

            <div className="form-group">
                <label>Email: </label>
                <input type="email" name="email" placeholder="email"/>
            </div>

            <div className="form-group">
                <label>Mobile: </label>
                <input type="tel" name="mobile" placeholder="mobile"/>
            </div>

            <div className="form-group">
                <label>Address: </label>
                <input type="text" name="streetAddress" placeholder="street address"/>
                <input type="text" name="streetAddressLine2" placeholder="street address line 2"/>
                <br/>
                <input type="text" name="city" placeholder="city"/>
                <input type="text" name="region" placeholder="region"/>
                <br/>
                <input type="text" name="zipCode" placeholder="zip code/postal code"/>
                <input type="text" name="country" placeholder="country"/>
            </div>

            <div className="form-group">
                <label>Any other info you want to know about? </label>
                <br/>
                <textarea id="query" name="query" rows="4" cols="50"/>

            </div>


            <button type="submit" className="registration-button">Register</button>

        </form>
    </div>
}