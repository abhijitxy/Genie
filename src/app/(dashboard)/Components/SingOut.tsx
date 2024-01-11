import React from 'react';

interface SignOutProps {
    onSignOut: () => void;
}

const SignOut: React.FC<SignOutProps> = ({ onSignOut }) => {
    const handleSignOut = () => {
        // Call the onSignOut function passed as a prop
        onSignOut();
    };

    return (
        <button onClick={handleSignOut}>
            Sign Out
        </button>
    );
};

export default SignOut;
