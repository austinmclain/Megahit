import fetchProfiles from '../../api/Profile/fetchProfiles';
import addProfile from '../../api/Profile/addProfile';
import Profile from './Profile'
import { useState, useEffect } from 'react';

export default function ProfileSelection(props) {
    const { currentAccount, setCurrentProfile } = props;
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const getProfiles = () => {
            fetchProfiles(currentAccount)
                .then((response) => {
                    setProfiles(response);
                })
                .catch(error => console.error(`Error: ${error}`));
        }
        getProfiles();
    });

    async function createProfile(event) {
        event.preventDefault();

        const email = currentAccount;
        const name = event.target[0].value;

        try {
            addProfile(email, name);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            {profiles.map((profile) => {
                return (
                    <div key={profile.profile_name}>
                        <Profile name={profile.profile_name} picture={profile.profile_picture} setCurrentProfile={setCurrentProfile} />
                    </div>
                )
            })
            }
            <br></br>
            <form onSubmit={(event) => createProfile(event)}>
                <input type="text" placeholder="Name"></input>
                <button>Create New Profile</button>
            </form>
        </div >
    )
}
