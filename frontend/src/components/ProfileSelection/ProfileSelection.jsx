import fetchProfiles from '../../api/Profile/fetchProfiles';
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
        </div>
    )
}
