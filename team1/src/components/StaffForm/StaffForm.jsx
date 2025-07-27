import "./staffForm.css"
export default function StaffForm() {
    return(
        <div>
            <div className="profile">
                <div className="edit-profile">
                    <h2 className="edit-profile__title">Add Profile</h2>
                    <div className="edit-profile__grid">
                        <div className="edit-profile__field">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" placeholder="Username"/>
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="password">Password</label>
                            <input type="text" id="password" placeholder="Password"/>
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="email-edit">Email Address</label>
                            <input type="email" id="email-edit" placeholder="Email"/>
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" placeholder="First name"/>
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" placeholder="Last name"/>
                        </div>
                        <div className="edit-profile__field edit-profile__field--full">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" placeholder="Home address"/>
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="age">Age</label>
                            <input type="text" id="age" placeholder="Age"/>
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" id="phone" placeholder="Phone Number"/>
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="role">Role</label>
                            <select id="role">
                                <option>--Select--</option>
                            </select>
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="salary">Salary</label>
                            <input type="text" id="salary" placeholder="Salary"/>
                        </div>
                        {/*<div className="edit-profile__field edit-profile__field--full">*/}
                        {/*    <label htmlFor="about">About Me</label>*/}
                        {/*    <textarea id="about" placeholder="Enter about your description"></textarea>*/}
                        {/*</div>*/}

                    </div>
                    <button className="edit-profile__button">Add Profile</button>
                </div>
            </div>
        </div>
    )
}